// components/quiz/ProgressBar.jsx
'use client';

import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="w-full text-center mb-4">
      {/* Text showing percentage and step count */}
      <div className="flex justify-between px-4 mb-1 text-xs" style={{ color: "#2359FF" }}>
        <span>{progress}%</span>
        <span>Step {currentStep}/{totalSteps}</span>
      </div>
      
      {/* Progress bar with inset styling */}
      <div
        className="w-[60%] h-2 mx-auto rounded-full relative"
        style={{
          background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
          boxShadow: "0 0 10px rgba(193,191,132,0.3), inset 0 1px 3px rgba(0,0,0,0.1)"
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
        
        {/* Animated glow effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            transform: "translateX(-100%)",
            animation: "pulse 3s infinite"
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
