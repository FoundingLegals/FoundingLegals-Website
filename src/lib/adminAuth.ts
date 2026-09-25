import crypto from "crypto";
import { cookies } from "next/headers";

const ADMIN_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  "fl_super_admin_secret_key_2026_foundinglegals_sec_hash";

export const COOKIE_NAME = "fl_admin_token";

export interface AdminSession {
  email: string;
  role: "Super Admin";
  exp: number; // Unix timestamp ms
}

/**
 * Validates admin credentials against environment variables and registered admin credentials
 */
export function verifyAdminCredentials(inputEmail: string, inputPass: string): { valid: boolean; email: string } {
  const cleanEmail = (inputEmail || "").trim().toLowerCase();
  const cleanPass = (inputPass || "").trim();

  if (!cleanEmail || !cleanPass) {
    return { valid: false, email: "" };
  }

  // 1. Check custom environment variables (trimmed)
  const envEmail = (process.env.SUPER_ADMIN_EMAIL || "").trim().toLowerCase();
  const envPass = (process.env.SUPER_ADMIN_PASSWORD || "").trim();

  if (envEmail && envPass && cleanEmail === envEmail && cleanPass === envPass) {
    return { valid: true, email: envEmail };
  }

  // 2. Primary Super Admin credentials
  if (cleanEmail === "info@foundinglegals.com" && cleanPass === "Arvya2025") {
    return { valid: true, email: "info@foundinglegals.com" };
  }

  // 3. Fallback admin credentials
  if (cleanEmail === "koppanapavansai@gmail.com" && cleanPass === "Arvya2025") {
    return { valid: true, email: "koppanapavansai@gmail.com" };
  }

  // 4. System backup
  if (cleanEmail === "admin@foundinglegals.com" && cleanPass === "FoundingLegals@2026") {
    return { valid: true, email: "admin@foundinglegals.com" };
  }

  return { valid: false, email: "" };
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
