// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Reality Creation Style Assessment',
  description: 'Discover your unique reality creation style and how you naturally manifest your desires.',
};

// ----- Client Component for Iframe Handling -----
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function IFrameWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      // Add a class to body for iframe-specific styling if needed
      document.body.classList.add('in-iframe');

      const sendHeightToParent = () => {
        const height = document.body.scrollHeight;
        window.parent.postMessage(
          {
            type: 'quiz-height',
            height: height,
          },
          '*' // In production, replace '*' with your Squarespace domain
        );
      };

      // Send height on load and when resizing
      window.addEventListener('resize', sendHeightToParent);
      window.addEventListener('load', sendHeightToParent);

      // Observe DOM changes to update height
      const observer = new MutationObserver(sendHeightToParent);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      // Also, update height periodically
      const heightInterval = setInterval(sendHeightToParent, 1000);

      // Check for a specific route to signal quiz completion
      if (pathname.includes('/results')) {
        window.parent.postMessage(
          {
            type: 'quiz-completed',
            url: pathname,
          },
          '*'
        );
      }
      // Always update height on route change
      sendHeightToParent();

      return () => {
        window.removeEventListener('resize', sendHeightToParent);
        window.removeEventListener('load', sendHeightToParent);
        clearInterval(heightInterval);
        observer.disconnect();
      };
    }
  }, [pathname]);

  return children;
}

// ----- Root Layout -----
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Font for the title */}
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'transparent' }}>
        <IFrameWrapper>{children}</IFrameWrapper>
      </body>
    </html>
  );
}
