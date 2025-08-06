import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default async function auth(request) {
    // 1. Specify protected and public routes
const protectedRoutes = ['/api-examples'];
const publicRoutes = ['/', '/api/auth', '/reservoir', ];
 
    const publicUrl = new URL("/api/auth/signin", request.nextUrl.origin)

    const { origin } = new URL(request.url);
    const authUrl = new URL("/api/auth", request.nextUrl.origin);

      // 2. Check if the current route is protected or public
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
 //   const session = await auth.getSession();
//console.log('***>>>session be here<<<<***', session);
//console.log('***>>>',request,'<<<<***');
//console.log('***>>>',request.nextUrl,'<<<<***');
    // authentication routes — let the middleware handle it
/*    if (request.nextUrl.pathname.startsWith("/api/auth")) {

        return NextResponse.next();
    }*/
    // public routes — no need to check for session
/*    if ((request.nextUrl.pathname === ("/reservoir")) ||(request.nextUrl.pathname === ("/"))) {

  console.log('***>>>middleware<<<<***reservoirand ', );
    // Respond with JSON indicating an error message
    return NextResponse.next();
  
    }*/

/*  if (!request.auth && request.nextUrl.pathname !== "/api/auth/signin") {
    const newUrl = new URL("/api/auth/signin", request.nextUrl.origin)
    console.log('y r we here',request.nextUrl.pathname);
    return NextResponse.redirect(authUrl)
  }*/
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !request?.userId) {
    console.log('No userid found in request Object');
    return NextResponse.redirect(new URL('/api/ath/login', req.nextUrl))
  }
  if (isPublicRoute ) {
    console.log('No userid found in request Object');
    return NextResponse.next();
  }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - api (API routes)
         */
       '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}