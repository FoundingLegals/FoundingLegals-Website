import crypto from "crypto";
import { cookies } from "next/headers";

const ADMIN_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  "fl_super_admin_secret_key_2026_foundinglegals_sec_hash";

export const SUPER_ADMIN_EMAIL =
  process.env.SUPER_ADMIN_EMAIL || "admin@foundinglegals.com";

export const SUPER_ADMIN_PASSWORD =
  process.env.SUPER_ADMIN_PASSWORD || "FoundingLegals@2026";

export const COOKIE_NAME = "fl_admin_token";

export interface AdminSession {
  email: string;
  role: "Super Admin";
  exp: number; // Unix timestamp ms
}

/**
 * Signs a session payload using HMAC-SHA256
 */
export function signSession(session: AdminSession): string {
  const data = Buffer.from(JSON.stringify(session)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(data)
    .digest("base64url");
  return `${data}.${signature}`;
}

/**
 * Verifies and parses a signed session token
 */
export function verifySession(token: string): AdminSession | null {
  try {
    const [data, signature] = token.split(".");
    if (!data || !signature) return null;

    const expectedSig = crypto
      .createHmac("sha256", ADMIN_SECRET)
      .update(data)
      .digest("base64url");

    if (
      !crypto.timingSafeEqual(
        Buffer.from(signature, "utf-8"),
        Buffer.from(expectedSig, "utf-8")
      )
    ) {
      return null;
    }

    const payload = JSON.parse(
      Buffer.from(data, "base64url").toString("utf-8")
    ) as AdminSession;

    // Check expiration
    if (Date.now() > payload.exp) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Checks current request session in Server Components / API Routes
 */
export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySession(token);
}
