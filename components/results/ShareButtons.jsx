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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '1.5rem',
      marginBottom: '1rem'
    }}>
      <h3 
        style={{ 
          fontSize: '1rem', 
          fontWeight: '300', 
          marginBottom: '1rem',
          textAlign: 'center',
          color: "#2359FF"
        }}
      >
        Share Your Results
      </h3>
      
      <div style={{
        display: 'flex',
        marginBottom: '1rem',
        gap: '1rem'
      }}>
        <FacebookShareButton
          url={shareUrl}
          quote={shareText}
          className="hover:opacity-80 transition-opacity"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={shareText}
          hashtags={["RealityCreation", "Manifestation"]}
          className="hover:opacity-80 transition-opacity"
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          title={profileName}
          summary={shareText}
          source="Reality Creation Assessment"
          className="hover:opacity-80 transition-opacity"
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
        <button 
          onClick={handleCopy}
          style={{
            padding: '0.5rem 2rem',
            borderRadius: '76px',
            color: "#2359FF",
            background: "rgba(224,224,224,0)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "inset 19px 19px 38px rgba(190,190,190,0.3), inset -19px -19px 38px rgba(255,255,255,0.3)",
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
        >
          <span style={{ position: 'relative', zIndex: '10' }}>
            {copied ? 'Link Copied!' : 'Copy Link'}
          </span>
          <div 
            style={{
              position: 'absolute',
              inset: '0',
              opacity: '0.2',
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
