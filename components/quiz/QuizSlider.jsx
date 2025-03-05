// components/quiz/QuizSlider.jsx
'use client';

import React from 'react';

const QuizSlider = ({ value, onChange, leftLabel, rightLabel }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };
  
  return (
    <div className="relative py-4 w-full max-w-xs mx-auto">
      {/* Labels above slider */}
      <div className="flex justify-between mb-2">
        <div className="text-left">
          <p className="text-xs text-[#2359FF]">
            {leftLabel}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#2359FF]">
            {rightLabel}
          </p>
        </div>
      </div>
      
      {/* Slider track with inset effect */}
      <div className="h-5 rounded-full relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
          boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
        }}
      >
        {/* Filled portion */}
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${value}%`,
            background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))"
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
        
        {/* Slider thumb */}
        <div
          className="absolute top-1/2 w-4 h-4 rounded-full"
          style={{
            left: `${value}%`,
            transform: "translate(-50%, -50%)",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
            zIndex: 2
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60" 
               style={{ transform: "translate(-50%, -50%)" }}></div>
        </div>
        
        {/* Position input directly over the track */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
      </div>
    </div>
  );
};

export default QuizSlider;
