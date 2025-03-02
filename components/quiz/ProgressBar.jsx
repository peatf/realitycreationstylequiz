// components/quiz/ProgressBar.jsx
'use client';

import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="w-full text-center mb-4">
      <div className="flex justify-between px-4 mb-1 text-xs" style={{ color: "#2359FF" }}>
        <span>{progress}%</span>
        <span>Step {currentStep}/{totalSteps}</span>
      </div>
      <div
        className="w-[60%] h-2 mx-auto rounded-full"
        style={{
          background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
          boxShadow: "0 0 10px rgba(193,191,132,0.3), inset 0 1px 3px rgba(0,0,0,0.1)"
        }}
      >
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
