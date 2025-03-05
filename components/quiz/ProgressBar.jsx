// components/quiz/ProgressBar.jsx
'use client';

import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="progress-container">
      {/* Progress bar with percentage on left and step count on right */}
      <div className="w-full relative px-4">
        <div className="h-2 rounded-full"
          style={{
            background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
            boxShadow: "0 0 10px rgba(193, 191, 132, 0.3), inset 0 1px 3px rgba(0, 0, 0, 0.1)"
          }}
        >
          {/* Filled portion */}
          <div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
              transition: "width 0.3s ease"
            }}
          ></div>
          
          {/* Animated pulse effect */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              animation: "pulse 3s infinite"
            }}
          ></div>
        </div>
        
        {/* Text positioned on either side of the bar */}
        <div className="flex justify-between text-xs text-[#2359FF] mt-1">
          <span>{progress}%</span>
          <span>Step {currentStep}/{totalSteps}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
