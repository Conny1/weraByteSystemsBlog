import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const urlPath = req.nextUrl.pathname;
  const token = req.cookies.get("user")?.value;
  const isprivate = urlPath === "/admin/create";

  if (isprivate && !token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/admin/create", "/", "/blogs/:path*", "/about", "/login"],
};
