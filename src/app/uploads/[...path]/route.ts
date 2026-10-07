import { NextRequest, NextResponse } from "next/server";
import os from "os";
import path from "path";

function getFs(): typeof import("fs/promises") | null {
  try {
    return eval("require")("fs/promises");
  } catch {
    return null;
  }
}

const MIME_MAP: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: segments } = await context.params;
    if (!segments || segments.length === 0) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const relPath = segments.join("/");
    // Prevent path traversal
    if (relPath.includes("..") || relPath.includes(":")) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const f = getFs();
    if (!f) {
      return new NextResponse("File system unavailable", { status: 500 });
    }

    // Try candidate 1: public/uploads/<relPath>
    const publicPath = path.join(process.cwd(), "public", "uploads", ...segments);
    try {
      const data = await f.readFile(publicPath);
      const ext = path.extname(publicPath).toLowerCase();
      const contentType = MIME_MAP[ext] || "application/octet-stream";
      return new NextResponse(data, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch {}

    // Try candidate 2: os.tmpdir()/fl_uploads/<relPath>
    const tmpPath = path.join(os.tmpdir(), "fl_uploads", ...segments);
    try {
      const data = await f.readFile(tmpPath);
      const ext = path.extname(tmpPath).toLowerCase();
      const contentType = MIME_MAP[ext] || "application/octet-stream";
      return new NextResponse(data, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch {}

    return new NextResponse("File Not Found", { status: 404 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
