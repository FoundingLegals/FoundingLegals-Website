import os from "os";
import path from "path";
import crypto from "crypto";

// Runtime-safe filesystem access to prevent Next.js build tracer from statically tracing root
function getFs(): typeof import("fs/promises") | null {
  try {
    return eval("require")("fs/promises");
  } catch {
    return null;
  }
}

export interface ClientFeedback {
  id: string;
  full_name: string;
  company_name: string;
  designation: string;
  email: string;
  service_id: string;
  service_name: string;
  rating: number; // 1-5
  feedback: string; // original verbatim text
  photo_url: string | null;
  company_logo_url: string | null;
  permission_to_publish: boolean;
  created_at: string;
  updated_at: string;
}

export interface PublicTestimonial {
  id: string;
  name: string;
  companyName: string;
  designation: string;
  rating: number;
  testimonial: string;
  photoUrl: string | null;
  companyLogoUrl: string | null;
}

// In-memory global store to guarantee instantaneous access & real-time sync across invocations
declare global {
  var __fl_feedback_cache: ClientFeedback[] | undefined;
}

function getMemoryFeedback(): ClientFeedback[] | null {
  return globalThis.__fl_feedback_cache || null;
}

function setMemoryFeedback(feedbacks: ClientFeedback[]) {
  globalThis.__fl_feedback_cache = feedbacks;
}

const DATA_DIR = `${os.tmpdir()}/foundinglegals_feedback_data`;
const DATA_FILE = `${DATA_DIR}/feedback.json`;

function getStoragePaths() {
  const projectFile = path.join(process.cwd(), "src", "data", "feedback.json");
  return {
    projectFile,
    tmpDir: DATA_DIR,
    tmpFile: DATA_FILE,
  };
}

let writeQueue = Promise.resolve();

async function ensureDataFile(): Promise<void> {
  const f = getFs();
  if (!f) return;

  const { projectFile, tmpDir, tmpFile } = getStoragePaths();

  try {
    await f.mkdir(tmpDir, { recursive: true });

    // Check if tmpFile exists; if not, populate from projectFile
    try {
      await f.access(tmpFile);
    } catch {
      let initial: ClientFeedback[] = [];
      try {
        const raw = await f.readFile(projectFile, "utf-8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) initial = parsed;
      } catch {}

      await f.writeFile(tmpFile, JSON.stringify(initial, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Failed to initialize feedback storage:", err);
  }
}

export async function getAllFeedback(): Promise<ClientFeedback[]> {
  const mem = getMemoryFeedback();
  if (mem && mem.length > 0) {
    return mem;
  }

  await ensureDataFile();
  const f = getFs();
  const { projectFile, tmpFile } = getStoragePaths();

  let results: ClientFeedback[] = [];

  if (f) {
    // 1. Try tmpFile first (most up-to-date with recent live submissions)
    try {
      const raw = await f.readFile(tmpFile, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        results = parsed;
      }
    } catch {}

    // 2. If tmp was empty or had fewer entries, merge with projectFile
    try {
      const rawProject = await f.readFile(projectFile, "utf-8");
      const parsedProject = JSON.parse(rawProject);
      if (Array.isArray(parsedProject) && parsedProject.length > 0) {
        // Merge without duplicates by id or (email + created_at)
        const existingIds = new Set(results.map((r) => r.id));
        for (const item of parsedProject) {
          if (!existingIds.has(item.id)) {
            results.push(item);
            existingIds.add(item.id);
          }
        }
      }
    } catch {}
  }

  // Sort descending by created_at (newest first)
  results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  setMemoryFeedback(results);
  return results;
}

export async function saveAllFeedback(feedbacks: ClientFeedback[]): Promise<void> {
  // Sort descending by created_at
  feedbacks.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  setMemoryFeedback(feedbacks);

  writeQueue = writeQueue.then(async () => {
    const f = getFs();
    if (!f) return;

    const { projectFile, tmpDir, tmpFile } = getStoragePaths();
    const jsonStr = JSON.stringify(feedbacks, null, 2);

    // Write to projectFile if writable (local dev and server)
    try {
      const tmpP = `${projectFile}.${crypto.randomUUID()}.tmp`;
      await f.writeFile(tmpP, jsonStr, "utf-8");
      await f.rename(tmpP, projectFile);
    } catch {}

    // Write to tmpFile (works everywhere including serverless)
    try {
      await f.mkdir(tmpDir, { recursive: true });
      const tmpT = `${tmpFile}.${crypto.randomUUID()}.tmp`;
      await f.writeFile(tmpT, jsonStr, "utf-8");
      await f.rename(tmpT, tmpFile);
    } catch (err) {
      console.error("Error writing feedback to tmp:", err);
    }
  });

  await writeQueue;
}

/**
 * Returns ONLY feedback that has explicit publication consent.
 */
export async function getPublicTestimonials(): Promise<PublicTestimonial[]> {
  const all = await getAllFeedback();
  return all
    .filter((item) => item.permission_to_publish === true)
    .map((item) => ({
      id: item.id,
      name: item.full_name,
      companyName: item.company_name,
      designation: item.designation,
      rating: item.rating,
      testimonial: item.feedback,
      photoUrl: item.photo_url,
      companyLogoUrl: item.company_logo_url,
    }));
}

/**
 * Checks for duplicate submissions within a short window (60s) to prevent double clicks,
 * but allows intentional repeat testing.
 */
export async function isDuplicateSubmission(
  email: string,
  serviceId: string,
  feedbackText: string = ""
): Promise<boolean> {
  const all = await getAllFeedback();
  const normalizedEmail = email.trim().toLowerCase();
  const sixtySecondsAgo = Date.now() - 60 * 1000;

  return all.some((item) => {
    if (
      item.email.trim().toLowerCase() === normalizedEmail &&
      (item.service_id === serviceId || !serviceId)
    ) {
      const submissionTime = new Date(item.created_at).getTime();
      if (submissionTime > sixtySecondsAgo) {
        if (!feedbackText || item.feedback === feedbackText) {
          return true;
        }
      }
    }
    return false;
  });
}

export type CreateFeedbackInput = Omit<
  ClientFeedback,
  "id" | "created_at" | "updated_at"
>;

/**
 * Creates a new feedback record and saves it atomically.
 */
export async function createFeedback(
  input: CreateFeedbackInput
): Promise<ClientFeedback> {
  const all = await getAllFeedback();

  const now = new Date().toISOString();
  const record: ClientFeedback = {
    ...input,
    id: crypto.randomUUID(),
    created_at: now,
    updated_at: now,
  };

  all.unshift(record); // Prepend so newest is at the top immediately
  await saveAllFeedback(all);

  return record;
}

/**
 * Deletes a feedback item by ID
 */
export async function deleteFeedback(id: string): Promise<boolean> {
  const all = await getAllFeedback();
  const filtered = all.filter((item) => item.id !== id);

  if (filtered.length === all.length) {
    return false;
  }

  await saveAllFeedback(filtered);
  return true;
}

/**
 * Toggles publication consent status for an existing review
 */
export async function togglePublishConsent(id: string): Promise<ClientFeedback | null> {
  const all = await getAllFeedback();
  const item = all.find((f) => f.id === id);
  if (!item) return null;

  item.permission_to_publish = !item.permission_to_publish;
  item.updated_at = new Date().toISOString();

  await saveAllFeedback(all);
  return item;
}
