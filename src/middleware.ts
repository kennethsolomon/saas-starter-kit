import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, request) => {
  const protectedRoutes = ["/dashboard"];
  const { userId } = await auth();

  if (protectedRoutes.includes(request.nextUrl.pathname) && !userId) {
    const signInUrl = new URL("/", request.url);
    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname === "/" && userId) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
