// components/quiz/ProgressBar.jsx
'use client';

import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="progress-container">
      <div className="flex justify-between px-4 mb-1 text-xs" style={{ color: "#2359FF" }}>
        <span>{progress}%</span>
        <span>Step {currentStep}/{totalSteps}</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
