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
    <div className="flex flex-col items-center mt-6 mb-4">
      <h3 
        className="text-base font-light mb-4 text-center"
        style={{ color: "#2359FF" }}
      >
        Share Your Results
      </h3>
      
      {/* Social share buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <FacebookShareButton
          url={shareUrl}
          quote={shareText}
          className="transition-transform hover:scale-110"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={shareText}
          hashtags={["RealityCreation", "Manifestation"]}
          className="transition-transform hover:scale-110"
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          title={profileName}
          summary={shareText}
          source="Reality Creation Assessment"
          className="transition-transform hover:scale-110"
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </div>
      
      {/* Copy link button */}
      <button 
        onClick={handleCopy}
        className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide overflow-hidden keyboard-button"
        style={{
          borderRadius: "76px",
          color: "#2359FF",
          background: "#DBDECE",
          border: "1px solid rgba(193,191,132,0.4)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.2)"
        }}
      >
        <span className="relative z-10 tracking-widest uppercase">
          {copied ? 'Link Copied!' : 'Copy Link'}
        </span>
        
        {/* Keyboard texture overlay */}
        <div 
          className="absolute inset-0 keyboard-texture"
          style={{
            borderRadius: "76px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(230,230,220,0.05) 100%)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.1)",
            pointerEvents: "none"
          }}
        ></div>
        
        {/* Button particles */}
        <div className="button-particles"></div>
        <div className="button-shine"></div>
      </button>
    </div>
  );
};

export default ShareButtons;
