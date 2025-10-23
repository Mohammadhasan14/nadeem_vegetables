import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;
  console.log("token======>", token);

  // public routes: /login, /signup
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
    return NextResponse.next();
  }

  // protected routes: /dashboard
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token!, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.set("token", "", { maxAge: 0, path: "/" });
    return res;
  }
}

export const config = {
  matcher: ["/login", "/signup","/admin/:path*"],
};

// export const config = {
//   matcher: ["/login", "/signup", "/dashboard/:path*"],
// };
