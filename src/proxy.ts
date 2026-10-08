import { NextResponse } from "next/server";
import { auth } from "@/auth";

// Every page requires an Ashoka sign-in, except the login page and the
// sign-in endpoints themselves.
export default auth((req) => {
  if (req.auth) return NextResponse.next();
  const loginUrl = new URL("/login", req.nextUrl.origin);
  if (req.nextUrl.pathname !== "/") {
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
  }
  return NextResponse.redirect(loginUrl);
});

export const config = {
  matcher: ["/((?!login|api/auth|_next/static|_next/image|favicon.ico|logo.png).*)"],
};
