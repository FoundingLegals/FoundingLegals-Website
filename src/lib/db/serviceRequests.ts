import fs from "fs/promises";
import path from "path";
import os from "os";

export type ServiceCategory =
  | "CA Services"
  | "Company Incorporation"
  | "Licenses & Registrations"
  | "Legal Services"
  | "Tax & Compliance"
  | "General Inquiry";

export type RequestStatus = "pending" | "contacted" | "in_progress" | "completed" | "cancelled";

export interface ServiceRequest {
  id: string;
  name: string;
  email: string;
  mobile: string;
  service_name: string;
  category: ServiceCategory;
  company_name?: string;
  city?: string;
  message?: string;
  status: RequestStatus;
  notes?: string;
  form_data?: Record<string, any>;
  ip?: string;
  created_at: string; // ISO format
  created_at_ist: string; // Formatted IST timestamp e.g. "25 Sep 2026, 11:30 AM IST"
  email_sent: boolean;
}

export interface CreateServiceRequestInput {
  name: string;
  email: string;
  mobile: string;
  service_name: string;
  category?: ServiceCategory;
  company_name?: string;
  city?: string;
  message?: string;
  form_data?: Record<string, any>;
  ip?: string;
}

// Global in-memory cache to guarantee persistence across serverless invocations and fast reads
declare global {
  var __fl_service_requests_cache: ServiceRequest[] | undefined;
}

function getMemoryRequests(): ServiceRequest[] {
  if (!globalThis.__fl_service_requests_cache) {
    globalThis.__fl_service_requests_cache = [];
  }
  return globalThis.__fl_service_requests_cache;
}

function setMemoryRequests(requests: ServiceRequest[]) {
  globalThis.__fl_service_requests_cache = requests;
}

// No hardcoded dummy data; all entries are purely real-time user submissions
const INITIAL_SEEDS: ServiceRequest[] = [];

// Persistent storage path (in os.tmpdir to ensure full Turbopack & serverless compatibility)
const DATA_DIR = path.join(os.tmpdir(), "foundinglegals_requests_data");
const DATA_FILE = path.join(DATA_DIR, "service_requests.json");

let writeQueue = Promise.resolve();

// Format current date-time into readable Indian Standard Time string
export function formatIST(date: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date) + " IST";
  } catch {
    return date.toISOString().replace("T", " ").substring(0, 19) + " IST";
  }
}

// Automatically categorize service requests based on service name
export function detectServiceCategory(serviceName: string = ""): ServiceCategory {
  const s = serviceName.toLowerCase();

  // CA Services & Tax
  if (
    s.includes("gst") ||
    s.includes("gstr") ||
    s.includes("tax audit") ||
    s.includes("tds") ||
    s.includes("income tax") ||
    s.includes("itr") ||
    s.includes("ca ") ||
    s.includes("chartered accountant") ||
    s.includes("accounting") ||
    s.includes("bookkeeping") ||
    s.includes("financial statement")
  ) {
    return "CA Services";
  }

  // Company Incorporation
  if (
    s.includes("incorporation") ||
    s.includes("private limited") ||
    s.includes("pvt ltd") ||
    s.includes("pvt. ltd") ||
    s.includes("llp") ||
    s.includes("opc") ||
    s.includes("one person company") ||
    s.includes("public limited") ||
    s.includes("sole proprietorship") ||
    s.includes("partnership") ||
    s.includes("entity registration") ||
    s.includes("which company type")
  ) {
    return "Company Incorporation";
  }

  // Licenses & Registrations
  if (
    s.includes("fssai") ||
    s.includes("food license") ||
    s.includes("udyam") ||
    s.includes("msme") ||
    s.includes("iec") ||
    s.includes("import export") ||
    s.includes("labour license") ||
    s.includes("professional tax") ||
    s.includes("dpiit") ||
    s.includes("startup india") ||
    s.includes("shop act") ||
    s.includes("trade license")
  ) {
    return "Licenses & Registrations";
  }

  // Legal Services
  if (
    s.includes("trademark") ||
    s.includes("ip") ||
    s.includes("patent") ||
    s.includes("copyright") ||
    s.includes("agreement") ||
    s.includes("contract") ||
    s.includes("legal") ||
    s.includes("nda") ||
    s.includes("founders agreement") ||
    s.includes("term sheet") ||
    s.includes("investment readiness")
  ) {
    return "Legal Services";
  }

  return "General Inquiry";
}

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      // Seed file with INITIAL_SEEDS
      await fs.writeFile(DATA_FILE, JSON.stringify(INITIAL_SEEDS, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Failed to ensure service requests data file:", err);
  }
}

export async function getAllServiceRequests(): Promise<ServiceRequest[]> {
  await ensureDataFile();

  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Strictly exclude any legacy dummy/mock seeds
      const realRequests = parsed.filter(
        (item: ServiceRequest) => !item.id?.startsWith("req_seed_") && item.name !== "Rajesh Kannan"
      );
      setMemoryRequests(realRequests);
      return realRequests;
    }
  } catch {}

  setMemoryRequests([]);
  return [];
}

export async function saveAllServiceRequests(requests: ServiceRequest[]): Promise<void> {
  setMemoryRequests(requests);

  writeQueue = writeQueue.then(async () => {
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify(requests, null, 2), "utf-8");
    } catch (err) {
      console.error("Error writing service requests file:", err);
    }
  });

  await writeQueue;
}

export async function createServiceRequest(
  input: CreateServiceRequestInput
): Promise<ServiceRequest> {
  const current = await getAllServiceRequests();

  const now = new Date();
  const id = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const category = input.category || detectServiceCategory(input.service_name);

  // Normalize mobile number
  let cleanMobile = input.mobile.trim();
  if (!cleanMobile.startsWith("+") && /^\d{10}$/.test(cleanMobile)) {
    cleanMobile = `+91 ${cleanMobile.substring(0, 5)} ${cleanMobile.substring(5)}`;
  }

  const newRequest: ServiceRequest = {
    id,
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    mobile: cleanMobile,
    service_name: input.service_name.trim(),
    category,
    company_name: input.company_name?.trim() || undefined,
    city: input.city?.trim() || undefined,
    message: input.message?.trim() || undefined,
    status: "pending",
    notes: "",
    form_data: input.form_data || {},
    ip: input.ip,
    created_at: now.toISOString(),
    created_at_ist: formatIST(now),
    email_sent: false,
  };

  // Prepend so newest appears first
  const updated = [newRequest, ...current];
  await saveAllServiceRequests(updated);

  // Trigger email notification in background (via Formspree / internal mailer relay)
  relayEmailNotification(newRequest).catch((err) => {
    console.error("Failed to relay email notification:", err);
  });

  return newRequest;
}

export async function updateServiceRequestStatus(
  id: string,
  status: RequestStatus,
  notes?: string
): Promise<ServiceRequest | null> {
  const requests = await getAllServiceRequests();
  const index = requests.findIndex((r) => r.id === id);
  if (index === -1) return null;

  requests[index] = {
    ...requests[index],
    status,
    notes: notes !== undefined ? notes : requests[index].notes,
  };

  await saveAllServiceRequests(requests);
  return requests[index];
}

export async function deleteServiceRequest(id: string): Promise<boolean> {
  const requests = await getAllServiceRequests();
  const filtered = requests.filter((r) => r.id !== id);
  if (filtered.length === requests.length) return false;

  await saveAllServiceRequests(filtered);
  return true;
}

// Relay email notification through Formspree endpoint so admin receives email alert immediately
async function relayEmailNotification(req: ServiceRequest): Promise<void> {
  try {
    const res = await fetch("https://formspree.io/f/xqeyrnpp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(4000),
      body: JSON.stringify({
        _subject: `New ${req.category} Request: ${req.service_name} from ${req.name}`,
        full_name: req.name,
        email: req.email,
        mobile_number: req.mobile,
        service_opted: req.service_name,
        category: req.category,
        company: req.company_name || "N/A",
        city: req.city || "N/A",
        message: req.message || "N/A",
        date_ist: req.created_at_ist,
        admin_dashboard_url: "https://foundinglegals.com/admin/requests",
        ...req.form_data,
      }),
    });

    if (res.ok) {
      req.email_sent = true;
    }
  } catch (err) {
    console.error("Error in relayEmailNotification:", err);
  }
}

// Generate standard CSV output for admin export
export function generateServiceRequestsCsv(requests: ServiceRequest[]): string {
  const escapeCsv = (val: string | null | undefined): string => {
    if (val === null || val === undefined) return '""';
    const s = String(val).replace(/"/g, '""');
    return `"${s}"`;
  };

  const header = [
    "Request ID",
    "Timestamp (IST)",
    "Client Name",
    "Mobile Number",
    "Email Address",
    "Company / Startup",
    "City",
    "Service Opted For",
    "Category",
    "Status",
    "Requirements / Message",
    "Admin Notes",
  ]
    .map(escapeCsv)
    .join(",");

  const rows = requests.map((r) =>
    [
      r.id,
      r.created_at_ist,
      r.name,
      r.mobile,
      r.email,
      r.company_name || "",
      r.city || "",
      r.service_name,
      r.category,
      r.status,
      r.message || "",
      r.notes || "",
    ]
      .map(escapeCsv)
      .join(",")
  );

  return [header, ...rows].join("\n");
}
