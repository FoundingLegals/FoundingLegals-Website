import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdminCredentials,
  signSession,
  COOKIE_NAME,
  AdminSession,
} from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body.email || "").trim();
    const password = String(body.password || "").trim();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please enter both Super Admin email and password." },
        { status: 400 }
      );
    }

    const verification = verifyAdminCredentials(email, password);

    if (!verification.valid) {
      return NextResponse.json(
        { error: "Invalid Super Admin email or password." },
        { status: 401 }
      );
    }

    // 7 Days Session Expiry
    const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
    const sessionPayload: AdminSession = {
      email: verification.email,
      role: "Super Admin",
      exp,
    };

    const token = signSession(sessionPayload);

    const response = NextResponse.json(
      {
        success: true,
        message: "Super Admin authenticated successfully.",
        user: { email: verification.email, role: "Super Admin" },
      },
      { status: 200 }
    );

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return response;
  } catch (error) {
    console.error("Error in POST /api/admin/login:", error);
    return NextResponse.json(
      { error: "Internal server error during authentication." },
      { status: 500 }
    );
  }
}
