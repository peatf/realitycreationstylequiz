// IFrameWrapper.js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function IFrameWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      // Add a class to body for iframe-specific styling if needed
      document.body.classList.add("in-iframe");

      const sendHeightToParent = () => {
        const height = document.body.scrollHeight;
        window.parent.postMessage(
          {
            type: "quiz-height",
            height: height,
          },
          "*" // In production, replace '*' with your Squarespace domain for security
        );
      };

      // Send height on load and when resizing
      window.addEventListener("resize", sendHeightToParent);
      window.addEventListener("load", sendHeightToParent);

      // Observe DOM changes to update height
      const observer = new MutationObserver(sendHeightToParent);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      // Periodic height check
      const heightInterval = setInterval(sendHeightToParent, 1000);

      // Check for a specific route to signal quiz completion
      if (pathname.includes("/results")) {
        window.parent.postMessage(
          {
            type: "quiz-completed",
            url: pathname,
          },
          "*" // In production, replace '*' with your Squarespace domain
        );
      }
      // Always update height on route change
      sendHeightToParent();

      // Cleanup listeners and observers on unmount
      return () => {
        window.removeEventListener("resize", sendHeightToParent);
        window.removeEventListener("load", sendHeightToParent);
        clearInterval(heightInterval);
        observer.disconnect();
      };
    }
  }, [pathname]);

  return children;
}
