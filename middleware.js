// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Temporarily return next() without any domain checks
  return NextResponse.next();
  
  // Original code commented out for debugging
  /*
  const referer = request.headers.get('referer');
  
  const allowedDomains = [
    'your-squarespace-domain.com',
    'localhost',
    '127.0.0.1',
  ];
  
  if (referer) {
    const refererUrl = new URL(referer);
    const isAllowedDomain = allowedDomains.some(domain => 
      refererUrl.hostname === domain || 
      refererUrl.hostname.endsWith(`.${domain}`)
    );
    
    if (!isAllowedDomain) {
      return NextResponse.redirect(new URL('https://your-squarespace-domain.com', request.url));
    }
  }
  
  return NextResponse.next();
  */
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
