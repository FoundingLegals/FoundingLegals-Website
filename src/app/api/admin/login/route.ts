import { NextRequest, NextResponse } from "next/server";
import {
  SUPER_ADMIN_EMAIL,
  SUPER_ADMIN_PASSWORD,
  signSession,
  COOKIE_NAME,
  AdminSession,
} from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "").trim();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please enter both Super Admin email and password." },
        { status: 400 }
      );
    }

    if (
      email !== SUPER_ADMIN_EMAIL.toLowerCase() ||
      password !== SUPER_ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { error: "Invalid Super Admin email or password." },
        { status: 401 }
      );
    }

    // 7 Days Session Expiry
    const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
    const sessionPayload: AdminSession = {
      email: SUPER_ADMIN_EMAIL,
      role: "Super Admin",
      exp,
    };

    const token = signSession(sessionPayload);

    const response = NextResponse.json(
      {
        success: true,
        message: "Super Admin authenticated successfully.",
        user: { email: SUPER_ADMIN_EMAIL, role: "Super Admin" },
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
