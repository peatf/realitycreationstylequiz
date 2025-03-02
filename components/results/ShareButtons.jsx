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
          className="px-8 py-2 transition-all duration-300 text-xs tracking-wide relative overflow-hidden"
          style={{
            borderRadius: "76px",
            color: "#2359FF",
            background: "rgba(224,224,224,0)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "inset 19px 19px 38px rgba(190,190,190,0.3), inset -19px -19px 38px rgba(255,255,255,0.3)"
          }}
        >
          <span className="relative z-10">
            {copied ? 'Link Copied!' : 'Copy Link'}
          </span>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              transform: "translateX(-100%)",
              animation: "buttonShine 4s infinite"
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
