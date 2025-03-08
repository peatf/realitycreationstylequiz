// components/results/ShareButtons.jsx
'use client';

import React, { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import { generateShareText } from '@/lib/utils';

const ShareButtons = ({ profileName, dimensionScores, profileId }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = generateShareText(profileName);

  // Handle copy link
  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Social share buttons with improved styling */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex flex-col items-center">
          <FacebookShareButton
            url={shareUrl}
            quote={shareText}
            className="transition-all duration-300 hover:scale-110 mb-2 shadow-lg hover:shadow-xl rounded-full"
            style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
          >
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <span className="text-xs text-[#2359FF]">Facebook</span>
        </div>

        <div className="flex flex-col items-center">
          <TwitterShareButton
            url={shareUrl}
            title={shareText}
            hashtags={["RealityCreation", "Manifestation"]}
            className="transition-all duration-300 hover:scale-110 mb-2 shadow-lg hover:shadow-xl rounded-full"
            style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
          >
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <span className="text-xs text-[#2359FF]">Twitter</span>
        </div>

        <div className="flex flex-col items-center">
          <LinkedinShareButton
            url={shareUrl}
            title={profileName}
            summary={shareText}
            source="Reality Creation Assessment"
            className="transition-all duration-300 hover:scale-110 mb-2 shadow-lg hover:shadow-xl rounded-full"
            style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
          >
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>
          <span className="text-xs text-[#2359FF]">LinkedIn</span>
        </div>
      </div>
      
      {/* Copy link button with enhanced feedback */}
      <div className="flex justify-center">
        <button 
          onClick={handleCopy}
          className="keyboard-button min-w-[180px] group"
          style={{
            transition: "all 0.3s ease",
            transform: copied ? "translateY(2px)" : "translateY(0)",
          }}
          type="button"
        >
          <span className="relative z-10 tracking-widest flex items-center gap-2">
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>COPY LINK</span>
              </>
            )}
          </span>
          <div className="keyboard-texture"></div>
          <div className="button-particles"></div>
          <div className="button-shine"></div>
        </button>
      </div>
    </>
  );
};

export default ShareButtons;
