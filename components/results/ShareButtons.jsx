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
      <h3 className="text-base font-light mb-4 text-center text-[#2359FF]">
        Share Your Results
      </h3>
      
      <div className="share-button-container">
        <FacebookShareButton
          url={shareUrl}
          quote={shareText}
          className="share-button"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={shareText}
          hashtags={["RealityCreation", "Manifestation"]}
          className="share-button"
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          title={profileName}
          summary={shareText}
          source="Reality Creation Assessment"
          className="share-button"
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </div>
      
      <div className="flex items-center mt-4">
        <button 
          onClick={handleCopy}
          className="keyboard-button"
        >
          <span className="relative z-10">
            {copied ? 'Link Copied!' : 'Copy Link'}
          </span>
          <div className="keyboard-texture"></div>
          <div className="button-particles"></div>
          <div className="button-shine"></div>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
