import fs from "fs/promises";
import path from "path";

export interface VisitorLog {
  id: string;
  timestamp: string; // ISO format
  timestamp_ist: string; // Indian Standard Time format YYYY-MM-DD HH:mm:ss
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

const DATA_DIR = path.join(process.cwd(), "src", "data");
const CSV_FILE = path.join(DATA_DIR, "visitor_logs.csv");
const JSON_FILE = path.join(DATA_DIR, "visitor_logs.json");

const CSV_HEADER = [
  "Timestamp (IST)",
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
  "Visitor ID",
  "Session ID",
  "IP Address",
].map(escapeCsv).join(",") + "\n";

// Concurrency mutex to guarantee sequential real-time writes without corrupting files
let writeQueue = Promise.resolve();

function escapeCsv(val: string | null | undefined): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/\r\n|\r|\n/g, " ");
  // Escape double quotes by doubling them
  return `"${str.replace(/"/g, '""')}"`;
}

function formatRowCsv(log: VisitorLog): string {
  return [
    escapeCsv(log.timestamp_ist),
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
    escapeCsv(log.visitor_id),
    escapeCsv(log.session_id),
    escapeCsv(log.ip),
  ].join(",") + "\n";
}

/**
 * Initializes the data directory and the CSV header if the file does not exist yet.
 */
export async function ensureVisitorLogsFiles(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    // Check if CSV exists
    try {
      await fs.access(CSV_FILE);
    } catch {
      await fs.writeFile(CSV_FILE, "\uFEFF" + CSV_HEADER, "utf-8"); // Prepend UTF-8 BOM so Excel opens Hindi/Special chars cleanly
    }

    // Check if JSON exists
    try {
      await fs.access(JSON_FILE);
    } catch {
      await fs.writeFile(JSON_FILE, "[]", "utf-8");
    }
  } catch (err) {
    console.error("Failed to initialize visitor logs files:", err);
  }
}

/**
 * Appends a new visitor entry to both CSV and JSON in real-time.
 */
export async function recordVisitorLog(log: VisitorLog): Promise<void> {
  await ensureVisitorLogsFiles();

  // Queue write to prevent concurrency collisions
  writeQueue = writeQueue.then(async () => {
    try {
      // 1. Real-time append to CSV
      const row = formatRowCsv(log);
      await fs.appendFile(CSV_FILE, row, "utf-8");

      // 2. Rolling window update to JSON (keep last 2000 entries)
      let list: VisitorLog[] = [];
      try {
        const rawJson = await fs.readFile(JSON_FILE, "utf-8");
        list = JSON.parse(rawJson);
        if (!Array.isArray(list)) list = [];
      } catch {
        list = [];
      }

      list.unshift(log); // newest first
      if (list.length > 2000) {
        list = list.slice(0, 2000);
      }

      const tmpJson = `${JSON_FILE}.${Date.now()}.tmp`;
      await fs.writeFile(tmpJson, JSON.stringify(list, null, 2), "utf-8");
      await fs.rename(tmpJson, JSON_FILE);
    } catch (err) {
      console.error("Error writing visitor log:", err);
    }
  });

  await writeQueue;
}

/**
 * Reads the current CSV file buffer for live streaming / downloading.
 */
export async function getLiveCsvContent(): Promise<string> {
  await ensureVisitorLogsFiles();
  try {
    return await fs.readFile(CSV_FILE, "utf-8");
  } catch {
    return CSV_HEADER;
  }
}

/**
 * Returns recent logs for JSON inspection.
 */
export async function getRecentVisitorLogs(limit = 100): Promise<VisitorLog[]> {
  await ensureVisitorLogsFiles();
  try {
    const raw = await fs.readFile(JSON_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, limit) : [];
  } catch {
    return [];
  }
}
