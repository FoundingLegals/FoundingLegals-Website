import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/adminAuth";
import { getAllBlogs, createBlogPost, CreateBlogPostInput } from "@/lib/db/blogs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const blogs = await getAllBlogs();

    // Compute key metrics for admin dashboard
    const stats = {
      total: blogs.length,
      published: blogs.filter((b) => b.published).length,
      drafts: blogs.filter((b) => !b.published).length,
      totalViews: blogs.reduce((sum, b) => sum + (b.views || 0), 0),
    };

    return NextResponse.json(
      {
        success: true,
        stats,
        blogs,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error: any) {
    console.error("Error in GET /api/admin/blogs:", error);
    return NextResponse.json(
      { error: "Failed to load blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, content, excerpt, category } = body;

    if (!title || !title.trim()) {
      return NextResponse.json(
        { error: "Blog title is required" },
        { status: 400 }
      );
    }

    if (!content || !content.trim()) {
      return NextResponse.json(
        { error: "Blog content is required" },
        { status: 400 }
      );
    }

    const input: CreateBlogPostInput = {
      title: title.trim(),
      slug: body.slug?.trim() || undefined,
      excerpt: excerpt?.trim() || title.trim(),
      content: content.trim(),
      coverImage: body.coverImage?.trim() || undefined,
      category: category?.trim() || "Legal & Compliance",
      tags: body.tags || [],
      authorName: body.authorName?.trim() || "Founding Legals Legal Desk",
      authorRole: body.authorRole?.trim() || "Super Admin",
      authorAvatar: body.authorAvatar?.trim() || undefined,
      readTime: body.readTime?.trim() || undefined,
      published: body.published !== undefined ? Boolean(body.published) : true,
      featured: Boolean(body.featured),
    };

    const newBlog = await createBlogPost(input);

    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${newBlog.slug}`);
      revalidatePath("/blogs/[slug]", "page");
      revalidatePath("/");
    } catch {}

    return NextResponse.json({
      success: true,
      message: "Blog post created successfully",
      blog: newBlog,
    });
  } catch (error: any) {
    console.error("Error in POST /api/admin/blogs:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
