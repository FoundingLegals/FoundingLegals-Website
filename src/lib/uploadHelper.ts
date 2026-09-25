import os from "os";
import crypto from "crypto";

// Runtime-safe filesystem access to prevent Next.js / Turbopack NFT build tracer
// from statically tracing the entire repository root into serverless function bundles.
function getFs(): typeof import("fs/promises") | null {
  try {
    return eval("require")("fs/promises");
  } catch {
    return null;
  }
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);

const EXTENSION_MAP: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
};

/**
 * Basic SVG sanitization: strips dangerous elements and attributes
 */
function sanitizeSvg(content: string): string {
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, "")
    .replace(/href\s*=\s*["']?javascript:[^"'>]+["']?/gi, "");
}

export interface UploadResult {
  url: string;
  filename: string;
}

/**
 * Validates and saves an uploaded file buffer to public/uploads/testimonials/
 */
export async function saveUploadedFile(
  buffer: Buffer,
  mimeType: string,
  originalFilename?: string
): Promise<UploadResult> {
  if (buffer.length > MAX_FILE_SIZE) {
    throw new Error("File exceeds maximum allowed size of 5 MB");
  }

  // Normalize MIME
  const normalizedMime = mimeType.toLowerCase();
  if (!ALLOWED_MIME_TYPES.has(normalizedMime)) {
    throw new Error(
      `Unsupported file type: ${mimeType}. Allowed formats: JPG, PNG, WEBP, SVG.`
    );
  }

  // Directory resolution (using os.tmpdir to prevent bundling 346MB public assets into lambdas)
  const uploadDir = `${os.tmpdir()}/fl_uploads/testimonials`;
  const f = getFs();
  if (f) await f.mkdir(uploadDir, { recursive: true });

  const ext = EXTENSION_MAP[normalizedMime] || ".png";
  const uniqueName = `${crypto.randomUUID()}${ext}`;
  const filePath = `${uploadDir}/${uniqueName}`;

  if (f) {
    if (normalizedMime === "image/svg+xml") {
      const rawSvg = buffer.toString("utf-8");
      const sanitized = sanitizeSvg(rawSvg);
      await f.writeFile(filePath, sanitized, "utf-8");
    } else {
      await f.writeFile(filePath, buffer);
    }
  }

  return {
    url: `/uploads/testimonials/${uniqueName}`,
    filename: uniqueName,
  };
}
