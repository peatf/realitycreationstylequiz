// components/results/ShareButtons.jsx
'use client';

import React, { useState } from 'react';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinShareButton, 
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

const ShareButtons = ({ url, text }) => {
  const [copied, setCopied] = useState(false);
  
  // Handle copy link
  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
    <div className="flex flex-col items-center mt-6">
      <h3 
        className="text-base font-light mb-4 text-center"
        style={{ color: "#2359FF" }}
      >
        Share Your Results
      </h3>
      
      <div className="flex space-x-4 mb-4">
        <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
          <FacebookShareButton url={url} quote={text}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
        </div>
        
        <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
          <TwitterShareButton url={url} title={text}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
        </div>
        
        <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
          <LinkedinShareButton url={url} title="My Reality Creation Style" summary={text}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>
        
        <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
          <WhatsappShareButton url={url} title={text}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
      </div>
      
      <div className="flex items-center mt-2">
        <button 
          onClick={handleCopy}
          className="button-glass relative z-10 tracking-wide text-xs"
        >
          <span className="relative z-10">
            {copied ? 'Link Copied!' : 'Copy Link'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
