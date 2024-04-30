import { NextResponse } from "next/server";

export function middleware(request: Request) {
  console.log("Hello world");
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  //   matcher: "/about",
  matcher: ["/about/:path*", "/somewhere/:path*"],
};
