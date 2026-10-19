import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getBlogBySlug,
  getBlogBySlugAny,
  incrementBlogViews,
  getPublishedBlogs,
  updateBlogPost,
  deleteBlogPost,
  UpdateBlogPostInput,
} from "@/lib/db/blogs";
import { isSuperAdminAuthorized } from "@/lib/adminAuth";
import { handleCorsOptions, withCors } from "@/lib/cors";

export const dynamic = "force-dynamic";

export async function OPTIONS(req: NextRequest) {
  return handleCorsOptions(req);
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    if (!slug) {
      return withCors(req, NextResponse.json({ error: "Slug is required" }, { status: 400 }));
    }

    const { searchParams } = new URL(req.url);
    const isPreview = searchParams.get("preview") === "true";

    let blog = null;
    if (isPreview) {
      const isAuthorized = await isSuperAdminAuthorized(req);
      if (isAuthorized) {
        blog = await getBlogBySlugAny(slug);
      }
    }

    if (!blog) {
      blog = await getBlogBySlug(slug);
    }

    if (!blog) {
      return withCors(req, NextResponse.json({ error: "Blog post not found" }, { status: 404 }));
    }

    // Get 3 related articles from same category or general
    const allPublished = await getPublishedBlogs();
    const related = allPublished
      .filter((b) => b.id !== blog.id)
      .slice(0, 3);

    return withCors(
      req,
      NextResponse.json({
        success: true,
        blog,
        related,
      })
    );
  } catch (error: any) {
    console.error("Error in GET /api/blogs/[slug]:", error);
    return withCors(
      req,
      NextResponse.json(
        { error: "Failed to load blog post" },
        { status: 500 }
      )
    );
  }
}

/**
 * Public view counter increment
 */
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    if (slug) {
      await incrementBlogViews(slug);
    }
    return withCors(req, NextResponse.json({ success: true }));
  } catch {
    return withCors(req, NextResponse.json({ success: false }));
  }
}

/**
 * Super Admin PUT: Update an existing blog post
 */
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
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

    const { slug } = await context.params;
    const existing = (await getBlogBySlug(slug)) || (await getBlogBySlugAny(slug));
    if (!existing) {
      return withCors(req, NextResponse.json({ error: "Blog post not found." }, { status: 404 }));
    }

    const body = (await req.json()) as UpdateBlogPostInput;
    const updated = await updateBlogPost(existing.id, body);

    if (!updated) {
      return withCors(req, NextResponse.json({ error: "Failed to update blog." }, { status: 500 }));
    }

    // Instant real-time revalidation
    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${slug}`);
      if (updated.slug !== slug) {
        revalidatePath(`/blogs/${updated.slug}`);
      }
    } catch {}

    return withCors(
      req,
      NextResponse.json({
        success: true,
        message: "Blog post updated successfully.",
        blog: updated,
      })
    );
  } catch (error: any) {
    console.error("Error in PUT /api/blogs/[slug]:", error);
    return withCors(
      req,
      NextResponse.json(
        { error: error?.message || "Failed to update blog post" },
        { status: 500 }
      )
    );
  }
}

/**
 * Super Admin DELETE: Delete a blog post
 */
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
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

    const { slug } = await context.params;
    const existing = (await getBlogBySlug(slug)) || (await getBlogBySlugAny(slug));
    if (!existing) {
      return withCors(req, NextResponse.json({ error: "Blog post not found." }, { status: 404 }));
    }

    const deleted = await deleteBlogPost(existing.id);

    // Instant real-time revalidation
    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${slug}`);
    } catch {}

    return withCors(
      req,
      NextResponse.json({
        success: true,
        message: "Blog post deleted successfully.",
        deleted,
      })
    );
  } catch (error: any) {
    console.error("Error in DELETE /api/blogs/[slug]:", error);
    return withCors(
      req,
      NextResponse.json(
        { error: error?.message || "Failed to delete blog post" },
        { status: 500 }
      )
    );
  }
}

