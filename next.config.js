/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  // Optimize for production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  
  // Configure Content Security Policy
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' cdn.tailwindcss.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              font-src 'self';
              connect-src 'self';
              frame-ancestors 'self' https://*.squarespace.com;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  
  // Add any other custom configurations here
};

module.exports = nextConfig;
