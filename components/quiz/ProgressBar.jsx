// components/quiz/ProgressBar.jsx
'use client';

import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="progress-container">
      <div className="flex justify-between px-4 mb-1 text-xs text-[#2359FF]">
        <span>{progress}%</span>
        <span>Step {currentStep}/{totalSteps}</span>
      </div>
      <div className="progress-bar">
        <div 
          className="h-full rounded-full"
          style={{ 
            width: `${progress}%`,
            background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))"
          }}
        />
        
        {/* Animated pulse effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            animation: "pulse 3s infinite"
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
