import os from "os";
import path from "path";

// Runtime-safe filesystem access to prevent Next.js / Turbopack NFT build tracer
// from statically tracing the entire repository root into serverless function bundles.
function getFs(): typeof import("fs/promises") | null {
  try {
    return eval("require")("fs/promises");
  } catch {
    return null;
  }
}

export interface VisitorLog {
  id: string;
  timestamp: string; // ISO format (e.g. 2026-10-07T11:05:22.000Z)
  date?: string; // Standard YYYY-MM-DD date key
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
  "Date (YYYY-MM-DD)",
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
  const dateKey = log.date || (log.timestamp ? log.timestamp.split("T")[0] : "");
  return [
    escapeCsv(log.timestamp_ist),
    escapeCsv(dateKey),
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
 * Validates that a log is a genuine visitor entry.
 */
export function isLegitimateLog(log: VisitorLog): boolean {
  if (!log || !log.ip) return false;
  // Exclude automated bots and search engine crawler test probes
  const ua = (log.browser || "").toLowerCase();
  if (ua.includes("bot") || ua.includes("crawler") || ua.includes("spider")) {
    return false;
  }
  return true;
}

/**
 * Resolves persistent repository path and fallback OS tmp directory.
 */
function getStoragePaths() {
  const projectDir = path.join(process.cwd(), "src", "data");
  const tmpDir = path.join(os.tmpdir(), "foundinglegals_visitor_data");
  return {
    projectDir,
    projectCsv: path.join(projectDir, "visitor_logs.csv"),
    projectJson: path.join(projectDir, "visitor_logs.json"),
    tmpDir,
    tmpCsv: path.join(tmpDir, "visitor_logs.csv"),
    tmpJson: path.join(tmpDir, "visitor_logs.json"),
  };
}

/**
 * Ensures initial files exist across project data and tmp storage.
 */
export async function ensureVisitorLogsFiles(): Promise<void> {
  const f = getFs();
  if (!f) return;
  try {
    const { projectDir, projectCsv, projectJson, tmpDir, tmpCsv, tmpJson } = getStoragePaths();

    // Ensure directories exist
    await f.mkdir(projectDir, { recursive: true }).catch(() => {});
    await f.mkdir(tmpDir, { recursive: true }).catch(() => {});

    // Ensure CSV header exists if empty
    try {
      await f.access(projectCsv);
    } catch {
      await f.writeFile(projectCsv, "\uFEFF" + CSV_HEADER, "utf-8").catch(() => {});
    }

    try {
      await f.access(tmpCsv);
    } catch {
      await f.writeFile(tmpCsv, "\uFEFF" + CSV_HEADER, "utf-8").catch(() => {});
    }

    // Ensure JSON exists if empty
    try {
      await f.access(projectJson);
    } catch {
      await f.writeFile(projectJson, "[]", "utf-8").catch(() => {});
    }

    try {
      await f.access(tmpJson);
    } catch {
      await f.writeFile(tmpJson, "[]", "utf-8").catch(() => {});
    }
  } catch (err) {
    console.error("Failed to initialize visitor logs storage:", err);
  }
}

/**
 * Appends a genuine visitor entry to memory and persistent disk in real-time.
 */
export async function recordVisitorLog(log: VisitorLog): Promise<void> {
  // Ensure date field is populated
  if (!log.date) {
    log.date = log.timestamp ? log.timestamp.split("T")[0] : new Date().toISOString().split("T")[0];
  }

  // Update memory immediately (zero latency)
  const mem = getMemoryLogs();
  mem.unshift(log);
  if (mem.length > 50000) {
    mem.length = 50000;
  }
  setMemoryLogs(mem);

  // Queue write to persistent storage files
  writeQueue = writeQueue.then(async () => {
    const f = getFs();
    if (!f) return;
    try {
      const { projectDir, projectCsv, projectJson, tmpDir, tmpCsv, tmpJson } = getStoragePaths();

      await f.mkdir(projectDir, { recursive: true }).catch(() => {});
      await f.mkdir(tmpDir, { recursive: true }).catch(() => {});

      // 1. Append to CSV files
      const row = formatRowCsv(log);
      await f.appendFile(projectCsv, row, "utf-8").catch(async () => {
        await f.writeFile(projectCsv, "\uFEFF" + CSV_HEADER + row, "utf-8").catch(() => {});
      });
      await f.appendFile(tmpCsv, row, "utf-8").catch(async () => {
        await f.writeFile(tmpCsv, "\uFEFF" + CSV_HEADER + row, "utf-8").catch(() => {});
      });

      // 2. Read existing logs, unshift and write to JSON
      let list: VisitorLog[] = [];
      try {
        const raw = await f.readFile(projectJson, "utf-8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {
        try {
          const rawTmp = await f.readFile(tmpJson, "utf-8");
          const parsedTmp = JSON.parse(rawTmp);
          if (Array.isArray(parsedTmp)) list = parsedTmp;
        } catch {
          list = [];
        }
      }

      // Add to beginning and deduplicate
      list.unshift(log);
      const seen = new Set<string>();
      const deduped: VisitorLog[] = [];
      for (const item of list) {
        if (!item || !item.id || seen.has(item.id)) continue;
        seen.add(item.id);
        deduped.push(item);
      }

      // Keep full historical records up to 50,000 entries
      const finalJson = JSON.stringify(deduped.slice(0, 50000), null, 2);

      // Write to project storage
      try {
        const tempProject = `${projectJson}.${Date.now()}.tmp`;
        await f.writeFile(tempProject, finalJson, "utf-8");
        await f.rename(tempProject, projectJson);
      } catch {}

      // Write to tmp storage
      try {
        const tempTmp = `${tmpJson}.${Date.now()}.tmp`;
        await f.writeFile(tempTmp, finalJson, "utf-8");
        await f.rename(tempTmp, tmpJson);
      } catch {}
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
  const logs = await getRecentVisitorLogs(50000);
  if (logs.length === 0) {
    return "\uFEFF" + CSV_HEADER;
  }

  const rows = logs.map(formatRowCsv).join("");
  return "\uFEFF" + CSV_HEADER + rows;
}

/**
 * Returns genuine visitor logs, maintaining complete history with dates.
 */
export async function getRecentVisitorLogs(limit = 10000): Promise<VisitorLog[]> {
  try {
    const f = getFs();
    let fileLogs: VisitorLog[] = [];

    await ensureVisitorLogsFiles();

    if (f) {
      const { projectJson, tmpJson } = getStoragePaths();

      // 1. Try reading from project repo file first
      try {
        const raw = await f.readFile(projectJson, "utf-8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          fileLogs = parsed;
        }
      } catch {}

      // 2. Fall back / merge with tmp file if needed
      if (fileLogs.length === 0) {
        try {
          const rawTmp = await f.readFile(tmpJson, "utf-8");
          const parsedTmp = JSON.parse(rawTmp);
          if (Array.isArray(parsedTmp)) {
            fileLogs = parsedTmp;
          }
        } catch {}
      }
    }

    // Combine memory and file logs, deduplicating by log.id
    const combined = [...getMemoryLogs(), ...fileLogs];
    const seenIds = new Set<string>();
    const uniqueLogs: VisitorLog[] = [];

    for (const item of combined) {
      if (!item || !item.id || seenIds.has(item.id)) continue;
      seenIds.add(item.id);
      if (isLegitimateLog(item)) {
        // Guarantee date field
        if (!item.date) {
          item.date = item.timestamp ? item.timestamp.split("T")[0] : new Date().toISOString().split("T")[0];
        }
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
  const f = getFs();
  if (f) {
    try {
      const { projectCsv, projectJson, tmpCsv, tmpJson } = getStoragePaths();
      await f.writeFile(projectCsv, "\uFEFF" + CSV_HEADER, "utf-8").catch(() => {});
      await f.writeFile(projectJson, "[]", "utf-8").catch(() => {});
      await f.writeFile(tmpCsv, "\uFEFF" + CSV_HEADER, "utf-8").catch(() => {});
      await f.writeFile(tmpJson, "[]", "utf-8").catch(() => {});
    } catch {}
  }
}
