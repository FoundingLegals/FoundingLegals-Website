import { NextResponse } from "next/server";

/**
 * Generates CORS headers for Cross-Origin API requests from Super Admin
 * applications (such as app.foundinglegals.com, localhost dev, etc.)
 */
export function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") || "";

  // Allow production app, website, subdomains, and local development ports
  const isAllowed =
    !origin ||
    origin.includes("foundinglegals.com") ||
    origin.includes("localhost") ||
    origin.includes("127.0.0.1");

  return {
    "Access-Control-Allow-Origin": isAllowed && origin ? origin : "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-admin-key, X-Requested-With, Cache-Control",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
  };
}

/**
 * Preflight OPTIONS request handler for CORS
 */
export function handleCorsOptions(req: Request): NextResponse {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(req),
  });
}

/**
 * Attaches CORS headers to any NextResponse
 */
export function withCors(req: Request, res: NextResponse): NextResponse {
  const headers = getCorsHeaders(req);
  Object.entries(headers).forEach(([k, v]) => {
    res.headers.set(k, v);
  });
  return res;
}
