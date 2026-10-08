import { NextRequest, NextResponse } from "next/server";
import { getPublishedBlogs, getAllBlogs } from "@/lib/db/blogs";
import { getAdminSession } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search")?.toLowerCase().trim();
    const tag = searchParams.get("tag")?.toLowerCase().trim();
    const includeDrafts = searchParams.get("includeDrafts") === "true";

    let blogs = await getPublishedBlogs();

    // If super admin requested includeDrafts
    if (includeDrafts) {
      const session = await getAdminSession();
      if (session) {
        blogs = await getAllBlogs();
      }
    }

    // Filter by category
    if (category && category !== "All") {
      blogs = blogs.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by tag
    if (tag) {
      blogs = blogs.filter((b) =>
        b.tags.some((t) => t.toLowerCase() === tag)
      );
    }

    // Filter by search query
    if (search) {
      blogs = blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(search) ||
          b.excerpt.toLowerCase().includes(search) ||
          b.content.toLowerCase().includes(search) ||
          b.tags.some((t) => t.toLowerCase().includes(search))
      );
    }

    // Get list of distinct categories for filters
    const allPublished = await getPublishedBlogs();
    const categories = Array.from(
      new Set(allPublished.map((b) => b.category).filter(Boolean))
    );

    return NextResponse.json({
      success: true,
      blogs,
      categories,
      total: blogs.length,
    });
  } catch (error: any) {
    console.error("Error in GET /api/blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
