import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuth = req.cookies.get("auth");

  if (!isAuth && req.nextUrl.pathname.startsWith("/items")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/items/:path*"],
};
