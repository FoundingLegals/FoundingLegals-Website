export interface VisitorLog {
  id: string;
  timestamp: string;
  date?: string;
  timestamp_ist: string;
  city: string;
  region: string;
  country: string;
  country_code: string;
  page: string;
  page_title: string;
  device: "Mobile" | "Desktop" | "Tablet";
  browser: string;
  os: string;
  referrer: string;
  visitor_id: string;
  session_id: string;
  ip: string;
}

// In-memory global store (zero disk latency, fast response)
declare global {
  var __fl_visitor_logs_cache: VisitorLog[] | undefined;
}

function getMemoryLogs(): VisitorLog[] {
  if (!globalThis.__fl_visitor_logs_cache) {
    globalThis.__fl_visitor_logs_cache = [];
  }
  return globalThis.__fl_visitor_logs_cache;
}

function setMemoryLogs(logs: VisitorLog[]) {
  globalThis.__fl_visitor_logs_cache = logs;
}

export function isLegitimateLog(log: VisitorLog): boolean {
  if (!log || !log.ip) return false;
  const ua = (log.browser || "").toLowerCase();
  if (ua.includes("bot") || ua.includes("crawler") || ua.includes("spider")) {
    return false;
  }
  return true;
}

/**
 * Lightweight, non-blocking visitor log recording.
 * Eliminates heavy disk IO locks to ensure maximum website speed on Vercel.
 */
export async function recordVisitorLog(log: VisitorLog): Promise<void> {
  if (!log.date) {
    log.date = log.timestamp ? log.timestamp.split("T")[0] : new Date().toISOString().split("T")[0];
  }

  // Update in-memory log buffer instantly
  const mem = getMemoryLogs();
  mem.unshift(log);
  if (mem.length > 500) {
    mem.length = 500;
  }
  setMemoryLogs(mem);

  // If DigitalOcean App backend URL is configured, forward asynchronously
  const backendApiUrl = process.env.DIGITALOCEAN_ANALYTICS_URL || process.env.NEXT_PUBLIC_APP_API_URL;
  if (backendApiUrl) {
    fetch(`${backendApiUrl}/api/v1/analytics/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    }).catch(() => {});
  }
}

export async function getRecentVisitorLogs(limit = 100): Promise<VisitorLog[]> {
  return getMemoryLogs().filter(isLegitimateLog).slice(0, limit);
}
