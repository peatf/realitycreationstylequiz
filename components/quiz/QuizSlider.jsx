// components/quiz/QuizSlider.jsx
'use client';

import React from 'react';

const QuizSlider = ({ value, onChange, leftLabel, rightLabel }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };
  
  return (
    <div className="jp-slider-container">
      {/* Slider track */}
      <div className="jp-slider-track">
        {/* Slider fill */}
        <div
          className="jp-slider-fill"
          style={{ width: `${value}%` }}
        ></div>
        
        {/* Animated pulse effect */}
        <div className="anim-pulse"></div>
        
        {/* Slider thumb */}
        <div
          className="jp-slider-thumb"
          style={{ left: `${value}%` }}
        >
          {/* White dot in the center of the thumb */}
          <div 
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '4px',
              height: '4px',
              borderRadius: '9999px',
              background: 'white',
              opacity: '0.6',
              transform: "translate(-50%, -50%)"
            }}
          />
        </div>
      </div>
      
      {/* Hidden actual input slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        style={{
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          opacity: '0',
          cursor: 'pointer',
          zIndex: 10
        }}
      />
      
      {/* Answer labels */}
      <div className="flex justify-between mt-2 px-4">
        <div className="text-left max-w-[45%]">
          <p className="text-xs text-[#2359FF] whitespace-pre-line">
            {leftLabel}
          </p>
        </div>
        <div className="text-right max-w-[45%]">
          <p className="text-xs text-[#2359FF] whitespace-pre-line">
            {rightLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
