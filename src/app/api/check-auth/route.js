import { NextResponse } from "next/server";

export async function GET(req) {
  const authCookie = req.cookies.get("auth");

  if (authCookie && authCookie.value === "true") {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
