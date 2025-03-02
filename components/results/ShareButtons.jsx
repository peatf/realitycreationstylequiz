// components/results/ShareButtons.jsx
'use client';

import React, { useState } from 'react';

const ShareButtons = ({ url, text }) => {
  const [copied, setCopied] = useState(false);
  
  // Placeholder for actual social sharing functionality
  // In a real implementation, you would use proper share libraries
  
  // Handle copy link
  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // Fallback for browsers without clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = url;
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
        {/* Placeholder social buttons - replace with actual social share buttons in production */}
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          backgroundColor: '#3b5998',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          opacity: '0.9',
          transition: 'opacity 0.2s'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold' }}>f</span>
        </div>
        
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          backgroundColor: '#1DA1F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          opacity: '0.9',
          transition: 'opacity 0.2s'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold' }}>t</span>
        </div>
        
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          backgroundColor: '#0077b5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          opacity: '0.9',
          transition: 'opacity 0.2s'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold' }}>in</span>
        </div>
        
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          opacity: '0.9',
          transition: 'opacity 0.2s'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold' }}>w</span>
        </div>
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
