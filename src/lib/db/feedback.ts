import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

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

// Initial pre-seeded verified testimonial from existing website
const INITIAL_SEEDS: ClientFeedback[] = [
  {
    id: "seed-dhaval-trivedi",
    full_name: "Dhaval Trivedi",
    company_name: "TBS Magazine",
    designation: "Founder",
    email: "dhaval@tbsmagazine.com",
    service_id: "company-incorporation",
    service_name: "Company Incorporation",
    rating: 5,
    feedback:
      "We would recommend Founding Legals incorporation services to any founder without a second doubt. The process was beyond efficient and show's Founding Legals founder's commitment and vision to truly help entrepreneur's and early stage startups to get them incorporated with ease. If you wanna get incorporated, pick them. Thanks for the help Founding Legals.",
    photo_url: null,
    company_logo_url: null,
    permission_to_publish: true,
    created_at: "2025-10-15T10:00:00.000Z",
    updated_at: "2025-10-15T10:00:00.000Z",
  },
];

const DATA_DIR = path.join(process.cwd(), "src", "data");
const DATA_FILE = path.join(DATA_DIR, "feedback.json");

// Simple write queue to serialize file writes and prevent race conditions
let writeQueue = Promise.resolve();

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      // File doesn't exist yet, seed it with INITIAL_SEEDS
      await fs.writeFile(DATA_FILE, JSON.stringify(INITIAL_SEEDS, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Failed to initialize feedback data file:", err);
  }
}

export async function getAllFeedback(): Promise<ClientFeedback[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      return data;
    }
    return INITIAL_SEEDS;
  } catch (err) {
    console.error("Error reading feedback data:", err);
    return INITIAL_SEEDS;
  }
}

/**
 * Returns ONLY feedback that has explicit publication consent.
 * Strips emails, internal IDs, and sensitive metadata.
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
      testimonial: item.feedback, // original verbatim text
      photoUrl: item.photo_url,
      companyLogoUrl: item.company_logo_url,
    }));
}

/**
 * Checks for accidental duplicate submission within the last 24 hours
 */
export async function isDuplicateSubmission(
  email: string,
  serviceId: string
): Promise<boolean> {
  const all = await getAllFeedback();
  const normalizedEmail = email.trim().toLowerCase();
  const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;

  return all.some((item) => {
    if (
      item.email.trim().toLowerCase() === normalizedEmail &&
      item.service_id === serviceId
    ) {
      const submissionTime = new Date(item.created_at).getTime();
      return submissionTime > oneDayAgo;
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
  await ensureDataFile();

  const now = new Date().toISOString();
  const record: ClientFeedback = {
    ...input,
    id: crypto.randomUUID(),
    created_at: now,
    updated_at: now,
  };

  // Queue write to prevent concurrency issues
  writeQueue = writeQueue.then(async () => {
    const all = await getAllFeedback();
    all.unshift(record); // Prepend new submission so newest appears first
    const tempFile = `${DATA_FILE}.${crypto.randomUUID()}.tmp`;
    await fs.writeFile(tempFile, JSON.stringify(all, null, 2), "utf-8");
    await fs.rename(tempFile, DATA_FILE);
  });

  await writeQueue;
  return record;
}
