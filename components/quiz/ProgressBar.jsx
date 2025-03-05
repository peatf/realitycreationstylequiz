// components/quiz/ProgressBar.jsx
'use client';

import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="w-full px-4 mb-4">
      {/* Progress bar */}
      <div className="h-2 rounded-full relative"
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
      </div>
      
      {/* Text on either side of the bar */}
      <div className="flex justify-between text-xs text-[#2359FF] mt-1">
        <span>{progress}%</span>
        <span>Step {currentStep}/{totalSteps}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
