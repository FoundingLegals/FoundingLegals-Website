import { NextResponse } from "next/server";
import { getPublicTestimonials } from "@/lib/db/feedback";

// Opt out of static caching so newly submitted testimonials reflect immediately
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const testimonials = await getPublicTestimonials();

    return NextResponse.json(testimonials, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error: any) {
    console.error("Error in GET /api/testimonials:", error);
    return NextResponse.json(
      { error: "Failed to load testimonials" },
      { status: 500 }
    );
  }
}
