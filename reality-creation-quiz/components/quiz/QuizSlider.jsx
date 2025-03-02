// components/quiz/QuizSlider.jsx
'use client';

import React from 'react';

const QuizSlider = ({ value, onChange, leftLabel, rightLabel }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };
  
  return (
    <div className="relative py-2 w-full max-w-xs mx-auto">
      {/* Slider track */}
      <div className="slider-track">
        {/* Animated pulse effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            transform: "translateX(-100%)",
            animation: "pulse 3s infinite"
          }}
        ></div>
      </div>
      
      {/* Slider thumb */}
      <div
        className="slider-thumb"
        style={{
          left: `${value}%`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
             style={{ transform: "translate(-50%, -50%)" }}></div>
      </div>
      
      {/* Hidden actual input slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      {/* Answer labels */}
      <div className="flex justify-between mt-2 px-4">
        <div className="text-left">
          <p className="text-xs whitespace-pre-line" style={{ color: "#2359FF" }}>
            {leftLabel}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs whitespace-pre-line" style={{ color: "#2359FF" }}>
            {rightLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
