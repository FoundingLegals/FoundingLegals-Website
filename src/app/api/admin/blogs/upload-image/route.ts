import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/adminAuth";
import os from "os";
import path from "path";
import crypto from "crypto";

function getFs(): typeof import("fs/promises") | null {
  try {
    return eval("require")("fs/promises");
  } catch {
    return null;
  }
}

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const EXT_MAP: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
};

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file || typeof file !== "object" || file.size === 0) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "Image size exceeds 5MB limit" },
        { status: 413 }
      );
    }

    const mime = file.type.toLowerCase();
    const ext = EXT_MAP[mime] || ".png";
    const filename = `blog_${Date.now()}_${crypto.randomBytes(4).toString("hex")}${ext}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const f = getFs();
    if (f) {
      // 1. Try writing directly to public/uploads/blogs/ if possible
      const publicUploadsDir = path.join(process.cwd(), "public", "uploads", "blogs");
      try {
        await f.mkdir(publicUploadsDir, { recursive: true });
        await f.writeFile(path.join(publicUploadsDir, filename), buffer);
      } catch {
        // Fall back to os.tmpdir
      }

      // 2. Also write to os.tmpdir/fl_uploads/blogs to be served by /uploads route fallback
      const tmpUploadsDir = path.join(os.tmpdir(), "fl_uploads", "blogs");
      try {
        await f.mkdir(tmpUploadsDir, { recursive: true });
        await f.writeFile(path.join(tmpUploadsDir, filename), buffer);
      } catch {}
    }

    const publicUrl = `/uploads/blogs/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename,
    });
  } catch (error: any) {
    console.error("Error uploading blog image:", error);
    return NextResponse.json(
      { error: "Image upload failed" },
      { status: 500 }
    );
  }
}
