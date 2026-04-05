import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const res = NextResponse.next();

  // --- CORS for API routes ---
  if (pathname.startsWith("/api/")) {
    const origin = req.headers.get("origin") || "";
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL || "",
      "https://beta.proxima.health",
      "https://proxima.health",
    ].filter(Boolean);

    if (req.method === "OPTIONS") {
      return new NextResponse(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (allowedOrigins.includes(origin)) {
      res.headers.set("Access-Control-Allow-Origin", origin);
    }
    return res;
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
