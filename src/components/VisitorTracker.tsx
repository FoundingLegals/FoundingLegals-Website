"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const VISITOR_STORAGE_KEY = "fl_visitor_id";
const SESSION_STORAGE_KEY = "fl_session_id";

function getOrCreateVisitorId(): string {
  try {
    let vid = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (!vid) {
      vid = "vid_" + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
      localStorage.setItem(VISITOR_STORAGE_KEY, vid);
    }
    return vid;
  } catch {
    return "vid_guest";
  }
}

function getOrCreateSessionId(): string {
  try {
    let sid = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sid) {
      sid = "sid_" + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
      sessionStorage.setItem(SESSION_STORAGE_KEY, sid);
    }
    return sid;
  } catch {
    return "sid_guest";
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
