import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the referer from the request headers
  const referer = request.headers.get('referer');
  
  // Define allowed domains (add your actual Squarespace domain)
  const allowedDomains = [
    'your-squarespace-domain.com', // Replace with your actual domain
    'localhost',                   // Allow localhost for development
    '127.0.0.1',                   // Allow local IP for development
  ];
  
  // Check if referer exists and is from an allowed domain
  if (referer) {
    const refererUrl = new URL(referer);
    const isAllowedDomain = allowedDomains.some(domain => 
      refererUrl.hostname === domain || 
      refererUrl.hostname.endsWith(`.${domain}`)
    );
    
    if (!isAllowedDomain) {
      // If not from allowed domain, redirect to an error page or your main site
      return NextResponse.redirect(new URL('https://your-squarespace-domain.com', request.url));
    }
  }
  
  // Continue with the request if all checks pass
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
