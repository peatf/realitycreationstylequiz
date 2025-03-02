// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Simple middleware that just continues the request
  return NextResponse.next();
}

// Apply this middleware only to specific paths if needed
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
