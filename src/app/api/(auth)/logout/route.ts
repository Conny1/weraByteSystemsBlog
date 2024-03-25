import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ status: 200 });
  response.cookies.set("user", "");

  return response;
}
