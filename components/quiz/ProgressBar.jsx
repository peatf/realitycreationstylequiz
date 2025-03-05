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
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
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
