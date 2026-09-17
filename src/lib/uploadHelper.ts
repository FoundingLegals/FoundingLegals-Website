import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

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

  // Directory resolution
  const uploadDir = path.join(process.cwd(), "public", "uploads", "testimonials");
  await fs.mkdir(uploadDir, { recursive: true });

  const ext = EXTENSION_MAP[normalizedMime] || ".png";
  const uniqueName = `${crypto.randomUUID()}${ext}`;
  const filePath = path.join(uploadDir, uniqueName);

  if (normalizedMime === "image/svg+xml") {
    const rawSvg = buffer.toString("utf-8");
    const sanitized = sanitizeSvg(rawSvg);
    await fs.writeFile(filePath, sanitized, "utf-8");
  } else {
    await fs.writeFile(filePath, buffer);
  }

  return {
    url: `/uploads/testimonials/${uniqueName}`,
    filename: uniqueName,
  };
}
