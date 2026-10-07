import { NextRequest, NextResponse } from "next/server";
import {
  getBlogBySlug,
  getBlogBySlugAny,
  incrementBlogViews,
  getPublishedBlogs,
} from "@/lib/db/blogs";
import { getAdminSession } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const { searchParams } = new URL(req.url);
    const isPreview = searchParams.get("preview") === "true";

    let blog = null;
    if (isPreview) {
      const session = await getAdminSession();
      if (session) {
        blog = await getBlogBySlugAny(slug);
      }
    }

    if (!blog) {
      blog = await getBlogBySlug(slug);
    }

    if (!blog) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // Get 3 related articles from same category or general
    const allPublished = await getPublishedBlogs();
    const related = allPublished
      .filter((b) => b.id !== blog.id)
      .slice(0, 3);

    return NextResponse.json({
      success: true,
      blog,
      related,
    });
  } catch (error: any) {
    console.error("Error in GET /api/blogs/[slug]:", error);
    return NextResponse.json(
      { error: "Failed to load blog post" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    if (slug) {
      await incrementBlogViews(slug);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
