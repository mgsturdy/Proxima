import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATHS = ["/", "/about", "/science", "/diagnostics", "/interventions", "/waitlist", "/practitioners", "/blog"];
const AUTH_COOKIE = "proxima-auth";
const LOGIN_PATH = "/login";

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
}

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

  // --- Password gate (server-side) ---
  if (pathname === LOGIN_PATH || pathname.startsWith("/_next") || pathname.startsWith("/assets") || pathname.startsWith("/fonts") || pathname === "/favicon.ico" || pathname === "/icon.svg" || pathname === "/apple-icon.svg" || pathname === "/robots.txt") {
    return res;
  }

  if (isProtectedPath(pathname)) {
    const authCookie = req.cookies.get(AUTH_COOKIE);
    if (authCookie?.value !== "authenticated") {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = LOGIN_PATH;
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
