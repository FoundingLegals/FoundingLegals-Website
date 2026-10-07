import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/adminAuth";
import { deleteFeedback, togglePublishConsent } from "@/lib/db/feedback";

export const dynamic = "force-dynamic";

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
    const deleted = await deleteFeedback(id);

    if (!deleted) {
      return NextResponse.json({ error: "Feedback not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Feedback deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to delete feedback" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const updated = await togglePublishConsent(id);

    if (!updated) {
      return NextResponse.json({ error: "Feedback not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: updated.permission_to_publish
        ? "Review approved for public display."
        : "Review marked private.",
      item: updated,
    });
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to update feedback" }, { status: 500 });
  }
}
