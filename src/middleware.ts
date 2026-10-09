import { NextResponse, type NextRequest } from "next/server";

import { SESSION_COOKIE, isValidSessionToken } from "@/lib/studio-session";

// Gate for the private studio: /studio pages redirect to the login page and
// /api/studio/* returns 401 unless the request carries a valid session cookie.
export const config = {
  matcher: ["/studio/:path*", "/api/studio/:path*"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/studio/login";
  const isSignedIn = await isValidSessionToken(
    request.cookies.get(SESSION_COOKIE)?.value
  );

  if (isSignedIn) {
    return isLoginPage
      ? NextResponse.redirect(new URL("/studio", request.url))
      : NextResponse.next();
  }

  if (isLoginPage) return NextResponse.next();

  if (pathname.startsWith("/api/studio")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.redirect(new URL("/studio/login", request.url));
}
