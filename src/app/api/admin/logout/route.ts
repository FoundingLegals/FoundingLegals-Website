import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  const response = NextResponse.json(
    { success: true, message: "Logged out successfully." },
    { status: 200 }
  );

  response.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0, // Invalidate immediately
  });

  return response;
}
