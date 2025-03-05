// components/quiz/ProgressBar.jsx
'use client';

import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginBottom: '1rem' 
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        marginBottom: '0.25rem',
        fontSize: '0.75rem',
        color: "#2359FF"
      }}>
        <span>{progress}%</span>
        <span>Step {currentStep}/{totalSteps}</span>
      </div>
      <div style={{
        width: '60%',
        height: '0.5rem',
        margin: '0 auto',
        borderRadius: '9999px',
        background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
        boxShadow: "0 0 10px rgba(193,191,132,0.3), inset 0 1px 3px rgba(0,0,0,0.1)",
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          borderRadius: '9999px',
          background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
};

export default ProgressBar;
