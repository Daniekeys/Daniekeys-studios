import { NextResponse, type NextRequest } from "next/server";

// Price currency from the visitor's country: naira in Nigeria, dollars
// elsewhere. Vercel adds x-vercel-ip-country; without it (local dev) nothing
// is set and prices show in naira. A choice made with the toggle wins.
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const country = req.headers.get("x-vercel-ip-country");
  if (country && !req.cookies.has("currency")) {
    res.cookies.set("currency", country === "NG" ? "NGN" : "USD", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/|sites/|brand/|.*\\..*).*)"],
};
