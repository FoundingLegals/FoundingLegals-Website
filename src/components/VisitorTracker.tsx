"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const VISITOR_STORAGE_KEY = "fl_visitor_id";
const SESSION_STORAGE_KEY = "fl_session_id";

function generateCleanUuid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getOrCreateVisitorId(): string {
  try {
    let vid = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (!vid || vid.startsWith("vid_guest") || !vid.startsWith("usr_")) {
      vid = "usr_" + generateCleanUuid();
      localStorage.setItem(VISITOR_STORAGE_KEY, vid);
    }
    return vid;
  } catch {
    return "usr_" + generateCleanUuid();
  }
}

function getOrCreateSessionId(): string {
  try {
    let sid = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sid || sid.startsWith("sid_guest") || !sid.startsWith("ses_")) {
      sid = "ses_" + generateCleanUuid();
      sessionStorage.setItem(SESSION_STORAGE_KEY, sid);
    }
    return sid;
  } catch {
    return "ses_" + generateCleanUuid();
  }
}

export default function VisitorTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    // NEVER track admin or analytics or api internal routes
    if (
      pathname.startsWith("/admin") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/analytics")
    ) {
      return;
    }
    const currentFull =
      typeof window !== "undefined"
        ? window.location.pathname + window.location.search
        : pathname;

    if (lastTrackedPath.current === currentFull) {
      return;
    }
    lastTrackedPath.current = currentFull;

    const visitorId = getOrCreateVisitorId();
    const sessionId = getOrCreateSessionId();

    const payload = JSON.stringify({
      page: currentFull || "/",
      pageTitle: typeof document !== "undefined" ? document.title : "Founding Legals",
      referrer:
        typeof document !== "undefined" && document.referrer
          ? document.referrer
          : "Direct",
      visitorId,
      sessionId,
    });

    // Send asynchronously without blocking the user
    try {
      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon("/api/analytics/track", blob);
      } else {
        fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Fail silently
    }
  }, [pathname]);

  return null; // 100% invisible
}
