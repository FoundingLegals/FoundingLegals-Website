import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/adminAuth";
import {
  getBlogById,
  updateBlogPost,
  deleteBlogPost,
  UpdateBlogPostInput,
} from "@/lib/db/blogs";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const blog = await getBlogById(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to load blog" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await req.json();

    const input: UpdateBlogPostInput = {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      coverImage: body.coverImage,
      category: body.category,
      tags: body.tags,
      authorName: body.authorName,
      authorRole: body.authorRole,
      authorAvatar: body.authorAvatar,
      readTime: body.readTime,
      published: body.published !== undefined ? Boolean(body.published) : undefined,
      featured: body.featured !== undefined ? Boolean(body.featured) : undefined,
    };

    const updated = await updateBlogPost(id, input);

    if (!updated) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${updated.slug}`);
      revalidatePath("/blogs/[slug]", "page");
      revalidatePath("/");
    } catch {}

    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
      blog: updated,
    });
  } catch (error: any) {
    console.error("Error in PUT /api/admin/blogs/[id]:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const deleted = await deleteBlogPost(id);

    if (!deleted) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    try {
      revalidatePath("/blogs");
      revalidatePath("/blogs/[slug]", "page");
      revalidatePath("/");
    } catch {}

    return NextResponse.json({
      success: true,
      message: "Blog post deleted successfully",
    });
  } catch (error: any) {
    console.error("Error in DELETE /api/admin/blogs/[id]:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
