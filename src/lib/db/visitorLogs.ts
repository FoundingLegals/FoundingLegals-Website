import fs from "fs/promises";
import path from "path";
import os from "os";

export interface VisitorLog {
  id: string;
  timestamp: string; // ISO format
  timestamp_ist: string; // Indian Standard Time format YYYY-MM-DD HH:mm:ss IST
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

// In-memory global store to guarantee instantaneous access in Vercel Serverless
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

export const CSV_HEADER = [
  "Timestamp (IST)",
  "Visitor UUID",
  "City",
  "State / Region",
  "Country",
  "Country Code",
  "Page Visited",
  "Page Title",
  "Device",
  "Browser",
  "OS",
  "Referrer",
  "Session ID",
  "IP Address",
].map(escapeCsv).join(",") + "\n";

let writeQueue = Promise.resolve();

function escapeCsv(val: string | null | undefined): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/\r\n|\r|\n/g, " ");
  return `"${str.replace(/"/g, '""')}"`;
}

function formatRowCsv(log: VisitorLog): string {
  return [
    escapeCsv(log.timestamp_ist),
    escapeCsv(log.visitor_id),
    escapeCsv(log.city),
    escapeCsv(log.region),
    escapeCsv(log.country),
    escapeCsv(log.country_code),
    escapeCsv(log.page),
    escapeCsv(log.page_title),
    escapeCsv(log.device),
    escapeCsv(log.browser),
    escapeCsv(log.os),
    escapeCsv(log.referrer),
    escapeCsv(log.session_id),
    escapeCsv(log.ip),
  ].join(",") + "\n";
}

/**
 * Validates that a log is a real genuine visitor and not internal localhost dev
 */
export function isLegitimateLog(log: VisitorLog): boolean {
  if (!log || !log.ip) return false;
  const ip = log.ip.trim();
  const city = (log.city || "").toLowerCase();
  const region = (log.region || "").toLowerCase();
  const ref = (log.referrer || "").toLowerCase();

  // Filter out internal localhost addresses
  if (ip === "::1" || ip === "127.0.0.1" || ip === "localhost") {
    return false;
  }
  if (city.includes("localhost") || region.includes("internal dev")) {
    return false;
  }
  if (ref.includes("localhost:") || ref.includes("127.0.0.1:")) {
    return false;
  }
  return true;
}

/**
 * Resolves storage path using os.tmpdir() to eliminate whole-project NFT tracing and ensure writable storage
 */
async function getStoragePaths() {
  const dataDir = path.join(os.tmpdir(), "foundinglegals_visitor_data");
  await fs.mkdir(dataDir, { recursive: true }).catch(() => {});
  return {
    csv: path.join(dataDir, "visitor_logs.csv"),
    json: path.join(dataDir, "visitor_logs.json"),
  };
}

/**
 * Ensures initial files exist
 */
export async function ensureVisitorLogsFiles(): Promise<void> {
  try {
    const { csv, json } = await getStoragePaths();

    try {
      await fs.access(csv);
    } catch {
      await fs.writeFile(csv, "\uFEFF" + CSV_HEADER, "utf-8");
    }

    try {
      await fs.access(json);
    } catch {
      await fs.writeFile(json, "[]", "utf-8");
    }
  } catch (err) {
    console.error("Failed to initialize visitor logs storage:", err);
  }
}

/**
 * Appends a genuine visitor entry to memory and persistent disk in real-time.
 */
export async function recordVisitorLog(log: VisitorLog): Promise<void> {
  // Update memory immediately (zero latency)
  const mem = getMemoryLogs();
  mem.unshift(log);
  if (mem.length > 3000) {
    mem.length = 3000;
  }
  setMemoryLogs(mem);

  // Queue write to storage file
  writeQueue = writeQueue.then(async () => {
    try {
      const { csv, json } = await getStoragePaths();

      // Append to CSV
      const row = formatRowCsv(log);
      await fs.appendFile(csv, row, "utf-8").catch(async () => {
        await fs.writeFile(csv, "\uFEFF" + CSV_HEADER + row, "utf-8");
      });

      // Update JSON
      let list: VisitorLog[] = [];
      try {
        const raw = await fs.readFile(json, "utf-8");
        list = JSON.parse(raw);
        if (!Array.isArray(list)) list = [];
      } catch {
        list = [];
      }

      list.unshift(log);
      if (list.length > 3000) list = list.slice(0, 3000);

      await fs.writeFile(json, JSON.stringify(list, null, 2), "utf-8");
    } catch (err) {
      console.error("Error writing visitor log:", err);
    }
  });

  await writeQueue;
}

/**
 * Reads all genuine logs for CSV streaming / download.
 */
export async function getLiveCsvContent(): Promise<string> {
  const logs = await getRecentVisitorLogs(5000);
  if (logs.length === 0) {
    return "\uFEFF" + CSV_HEADER;
  }

  const rows = logs.map(formatRowCsv).join("");
  return "\uFEFF" + CSV_HEADER + rows;
}

/**
 * Returns genuine visitor logs, filtering out any localhost development hits.
 */
export async function getRecentVisitorLogs(limit = 200): Promise<VisitorLog[]> {
  try {
    const { json } = await getStoragePaths();
    let fileLogs: VisitorLog[] = [];

    try {
      const raw = await fs.readFile(json, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) fileLogs = parsed;
    } catch {}

    // Combine memory and file logs, deduplicating by log.id
    const combined = [...getMemoryLogs(), ...fileLogs];
    const seenIds = new Set<string>();
    const uniqueLogs: VisitorLog[] = [];

    for (const item of combined) {
      if (!item || !item.id || seenIds.has(item.id)) continue;
      seenIds.add(item.id);
      if (isLegitimateLog(item)) {
        uniqueLogs.push(item);
      }
    }

    // Sort newest first
    uniqueLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return uniqueLogs.slice(0, limit);
  } catch {
    return getMemoryLogs().filter(isLegitimateLog).slice(0, limit);
  }
}

/**
 * Resets all logs (clears development and historical logs)
 */
export async function clearVisitorLogs(): Promise<void> {
  setMemoryLogs([]);
  try {
    const { csv, json } = await getStoragePaths();
    await fs.writeFile(csv, "\uFEFF" + CSV_HEADER, "utf-8");
    await fs.writeFile(json, "[]", "utf-8");
  } catch {}
}
