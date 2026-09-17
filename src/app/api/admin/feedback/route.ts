import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/adminAuth";
import { getAllFeedback } from "@/lib/db/feedback";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const feedbacks = await getAllFeedback();
    return NextResponse.json({ success: true, feedbacks });
  } catch (error) {
    console.error("Error loading feedback in admin:", error);
    return NextResponse.json({ error: "Failed to load feedbacks" }, { status: 500 });
  }
}
