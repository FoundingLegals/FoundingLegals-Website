import { NextRequest, NextResponse } from "next/server";
import { recordVisitorLog, VisitorLog, isLegitimateLog } from "@/lib/db/visitorLogs";
import crypto from "crypto";

export const dynamic = "force-dynamic";

// In-memory cache for IP lookups to avoid repetitive lookups
const ipGeoCache = new Map<
  string,
  { city: string; region: string; country: string; country_code: string }
>();

function parseUserAgent(ua: string) {
  let device: "Mobile" | "Desktop" | "Tablet" = "Desktop";
  if (/mobile|iphone|ipod|android.*mobile|blackberry|phone/i.test(ua)) {
    device = "Mobile";
  } else if (/ipad|tablet|android(?!.*mobile)/i.test(ua)) {
    device = "Tablet";
  }

  let browser = "Other";
  if (/edg/i.test(ua)) browser = "Edge";
  else if (/chrome|crios/i.test(ua)) browser = "Chrome";
  else if (/safari/i.test(ua)) browser = "Safari";
  else if (/firefox|fxios/i.test(ua)) browser = "Firefox";
  else if (/opera|opr/i.test(ua)) browser = "Opera";

  let os = "Other";
  if (/windows/i.test(ua)) os = "Windows";
  else if (/macintosh|mac os x/i.test(ua)) os = "macOS";
  else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
  else if (/android/i.test(ua)) os = "Android";
  else if (/linux/i.test(ua)) os = "Linux";

  return { device, browser, os };
}

function getFormattedIstTime(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const partMap: Record<string, string> = {};
  for (const p of parts) {
    partMap[p.type] = p.value;
  }

  return `${partMap.year}-${partMap.month}-${partMap.day} ${partMap.hour}:${partMap.minute}:${partMap.second} IST`;
}

async function resolveLocation(req: NextRequest, ip: string) {
  // 1. Check edge platform headers (Vercel / Cloudflare)
  let rawCity = req.headers.get("x-vercel-ip-city") || req.headers.get("cf-ipcity");
  let rawRegion = req.headers.get("x-vercel-ip-country-region") || req.headers.get("cf-region-code");
  let rawCountry = req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry");

  if (rawCity) {
    try {
      rawCity = decodeURIComponent(rawCity);
    } catch {}
  }

  if (rawCity && rawCountry) {
    return {
      city: rawCity,
      region: rawRegion || "Region",
      country: rawCountry === "IN" ? "India" : rawCountry,
      country_code: rawCountry,
    };
  }

  // 2. Check in-memory cache
  if (ip && ipGeoCache.has(ip)) {
    return ipGeoCache.get(ip)!;
  }

  // 3. Localhost identification
  const isLocal =
    !ip ||
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip === "localhost";

  if (isLocal) {
    const loc = {
      city: "Localhost / India",
      region: "Internal Dev",
      country: "India",
      country_code: "IN",
    };
    if (ip) ipGeoCache.set(ip, loc);
    return loc;
  }

  // 4. Fallback lookup for public IPs via secure HTTPS ipwho.is
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const res = await fetch(`https://ipwho.is/${ip}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.success) {
        const loc = {
          city: data.city || data.region || "Unknown City",
          region: data.region || "Region",
          country: data.country || "India",
          country_code: data.country_code || "IN",
        };
        ipGeoCache.set(ip, loc);
        return loc;
      }
    }
  } catch {
    // Fail silently on timeout or network error
  }

  return {
    city: "India Visitor",
    region: "India",
    country: "India",
    country_code: "IN",
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const page = String(body.page || "/").trim();
    const pageTitle = String(body.pageTitle || "Founding Legals").trim();
    const referrer = String(body.referrer || "Direct").trim();

    let visitorId = String(body.visitorId || "").trim();
    if (!visitorId || visitorId === "anon_vid" || visitorId === "vid_guest") {
      visitorId = "usr_" + crypto.randomUUID();
    }

    let sessionId = String(body.sessionId || "").trim();
    if (!sessionId || sessionId === "anon_sid" || sessionId === "sid_guest") {
      sessionId = "ses_" + crypto.randomUUID();
    }

    // Extract client IP
    const forwarded = req.headers.get("x-forwarded-for");
    let ip =
      (forwarded ? forwarded.split(",")[0].trim() : null) ||
      req.headers.get("x-real-ip") ||
      req.headers.get("x-vercel-forwarded-for") ||
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("true-client-ip") ||
      "127.0.0.1";

    if (ip.includes(":") && ip.includes(".")) {
      ip = ip.split(":")[0];
    }

    const userAgent = req.headers.get("user-agent") || "";
    const { device, browser, os } = parseUserAgent(userAgent);
    const location = await resolveLocation(req, ip);
    const istTime = getFormattedIstTime();

    const logEntry: VisitorLog = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      timestamp_ist: istTime,
      city: location.city,
      region: location.region,
      country: location.country,
      country_code: location.country_code,
      page,
      page_title: pageTitle,
      device,
      browser,
      os,
      referrer,
      visitor_id: visitorId,
      session_id: sessionId,
      ip,
    };

    // Filter out localhost dev calls so they NEVER pollute the real-time database
    if (!isLegitimateLog(logEntry)) {
      return NextResponse.json({ success: true, ignored: "localhost_dev" }, { status: 200 });
    }

    // Real-time asynchronous write to memory and persistent disk
    await recordVisitorLog(logEntry);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/analytics/track:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
