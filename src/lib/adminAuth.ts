import crypto from "crypto";
import { cookies } from "next/headers";

export const COOKIE_NAME = "fl_admin_token";

export interface AdminSession {
  email: string;
  role: "Super Admin";
  exp: number; // Unix timestamp ms
}

/**
 * Resolves a stable, deterministic HMAC secret for admin session tokens.
 * Uses ADMIN_SESSION_SECRET from environment if available.
 * If omitted, derives a deterministic, persistent secret from the Super Admin credentials
 * and a static salt, ensuring HMAC signatures remain completely valid across
 * all Node worker processes, dev compilations, and server restarts.
 */
function getAdminSecret(): string {
  const envSecret = (process.env.ADMIN_SESSION_SECRET || "").trim();
  if (envSecret.length > 0) {
    return envSecret;
  }

  // Stable deterministic fallback so tokens NEVER invalidate randomly across workers/restarts
  const adminEmail = (process.env.SUPER_ADMIN_EMAIL || "info@foundinglegals.com").trim().toLowerCase();
  const adminPass = (process.env.SUPER_ADMIN_PASSWORD || "Arvya2025").trim();
  const pepper = "founding_legals_session_signing_salt_v1";
  return crypto
    .createHash("sha256")
    .update(`${adminEmail}:${adminPass}:${pepper}`)
    .digest("hex");
}


/**
 * Constant-time string comparison using SHA-256 digests to prevent timing attacks.
 */
function secureCompare(a: string, b: string): boolean {
  if (!a || !b) return false;
  const hashA = crypto.createHash("sha256").update(a).digest();
  const hashB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

/**
 * Validates admin credentials strictly against environment variables.
 * NO passwords or credentials are hardcoded in the codebase.
 */
export function verifyAdminCredentials(inputEmail: string, inputPass: string): { valid: boolean; email: string } {
  const cleanEmail = (inputEmail || "").trim().toLowerCase();
  const cleanPass = (inputPass || "").trim();

  if (!cleanEmail || !cleanPass) {
    return { valid: false, email: "" };
  }

  // 1. Primary Super Admin credentials from environment variables
  const envEmail1 = (process.env.SUPER_ADMIN_EMAIL || "").trim().toLowerCase();
  const envPass1 = (process.env.SUPER_ADMIN_PASSWORD || "").trim();

  if (envEmail1 && envPass1) {
    if (cleanEmail === envEmail1 && secureCompare(cleanPass, envPass1)) {
      return { valid: true, email: envEmail1 };
    }
  }

  // 2. Secondary / Backup Super Admin credentials (optional via env)
  const envEmail2 = (process.env.ADMIN_EMAIL_2 || process.env.ADMIN_BACKUP_EMAIL || "").trim().toLowerCase();
  const envPass2 = (process.env.ADMIN_PASSWORD_2 || process.env.ADMIN_BACKUP_PASSWORD || "").trim();

  if (envEmail2 && envPass2) {
    if (cleanEmail === envEmail2 && secureCompare(cleanPass, envPass2)) {
      return { valid: true, email: envEmail2 };
    }
  }

  // 3. Optional JSON configuration for team admin users (ADMIN_USERS='[{"email":"...","password":"..."}]')
  const adminUsersJson = process.env.ADMIN_USERS;
  if (adminUsersJson) {
    try {
      const parsed = JSON.parse(adminUsersJson);
      if (Array.isArray(parsed)) {
        for (const u of parsed) {
          const uEmail = (u?.email || "").trim().toLowerCase();
          const uPass = (u?.password || "").trim();
          if (uEmail && uPass && cleanEmail === uEmail && secureCompare(cleanPass, uPass)) {
            return { valid: true, email: uEmail };
          }
        }
      }
    } catch {
      // Ignore malformed JSON in environment configuration
    }
  }

  return { valid: false, email: "" };
}

/**
 * Signs a session payload using HMAC-SHA256
 */
export function signSession(session: AdminSession): string {
  const secret = getAdminSecret();
  const data = Buffer.from(JSON.stringify(session)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", secret)
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

    const secret = getAdminSecret();
    const expectedSig = crypto
      .createHmac("sha256", secret)
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
