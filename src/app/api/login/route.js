import { NextResponse } from "next/server";

const MOCK_USER = {
  email: "admin@example.com",
  password: "123456",
};

export async function POST(req) {
  const { email, password } = await req.json();
  console.log("form api", email, password)

  // validate credentials
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const response = NextResponse.json({
      success: true,
    });

    // set cookie (AUTH STATE)
    response.cookies.set("auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
