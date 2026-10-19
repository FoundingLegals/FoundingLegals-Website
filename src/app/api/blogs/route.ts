import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getPublishedBlogs, getAllBlogs, createBlogPost, CreateBlogPostInput, clearMemoryBlogsCache } from "@/lib/db/blogs";
import { isSuperAdminAuthorized } from "@/lib/adminAuth";
import { handleCorsOptions, withCors } from "@/lib/cors";

export const dynamic = "force-dynamic";

export async function OPTIONS(req: NextRequest) {
  return handleCorsOptions(req);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search")?.toLowerCase().trim();
    const tag = searchParams.get("tag")?.toLowerCase().trim();
    const includeDrafts = searchParams.get("includeDrafts") === "true";
    const forceRevalidate = searchParams.get("revalidate") === "true" || searchParams.get("refresh") === "true";

    if (forceRevalidate) {
      clearMemoryBlogsCache();
      try {
        revalidatePath("/blogs");
      } catch {}
    }

    const isAuthorized = await isSuperAdminAuthorized(req);
    let blogs = (includeDrafts && isAuthorized) ? await getAllBlogs() : await getPublishedBlogs();

    // Distinct categories for filters
    const categories = Array.from(
      new Set(blogs.map((b) => b.category).filter(Boolean))
    );

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

    return withCors(
      req,
      NextResponse.json({
        success: true,
        blogs,
        categories,
        total: blogs.length,
      })
    );
  } catch (error: any) {
    console.error("Error in GET /api/blogs:", error);
    return withCors(
      req,
      NextResponse.json(
        { error: "Failed to fetch blogs" },
        { status: 500 }
      )
    );
  }
}

/**
 * Super Admin POST: Publish a new blog post
 */
export async function POST(req: NextRequest) {
  try {
    const isAuthorized = await isSuperAdminAuthorized(req);
    if (!isAuthorized) {
      return withCors(
        req,
        NextResponse.json(
          { error: "Unauthorized. Super Admin access required." },
          { status: 401 }
        )
      );
    }

    const body = (await req.json()) as CreateBlogPostInput;
    if (!body || !body.title || !body.content) {
      return withCors(
        req,
        NextResponse.json(
          { error: "Title and content are required fields." },
          { status: 400 }
        )
      );
    }

    const newBlog = await createBlogPost(body);

    // Instant real-time revalidation on public website
    try {
      revalidatePath("/blogs");
      if (newBlog.slug) {
        revalidatePath(`/blogs/${newBlog.slug}`);
      }
    } catch {}

    return withCors(
      req,
      NextResponse.json(
        {
          success: true,
          message: "Blog post published successfully.",
          blog: newBlog,
        },
        { status: 201 }
      )
    );
  } catch (error: any) {
    console.error("Error in POST /api/blogs:", error);
    return withCors(
      req,
      NextResponse.json(
        { error: error?.message || "Failed to create blog post" },
        { status: 500 }
      )
    );
  }
}

