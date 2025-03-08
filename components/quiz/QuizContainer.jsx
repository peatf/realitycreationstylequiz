// components/quiz/QuizSlider.jsx
'use client';

import React from 'react';

const QuizSlider = ({ value, onChange, leftLabel, rightLabel }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };
  
  return (
    <div className="relative w-full py-4">
      {/* Slider track */}
      <div 
        className="h-5 rounded-full w-full relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
          boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
        }}
      >
        {/* Fill portion */}
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${value}%`,
            background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))"
          }}
        ></div>
        
        {/* Animated pulse */}
        <div
          className="absolute inset-0 opacity-20 anim-pulse"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
          }}
        ></div>
        
        {/* Thumb */}
        <div
          className="absolute top-1/2 w-6 h-6 rounded-full transform -translate-y-1/2 transition-all duration-300"
          style={{
            left: `${value}%`,
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
            transform: "translate(-50%, -50%)"
          }}
        >
          {/* White dot in center */}
          <div 
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
            style={{
              transform: "translate(-50%, -50%)"
            }}
          ></div>
        </div>
      </div>
      
      {/* Hidden range input */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      
      {/* Answer labels - fixed to be side by side */}
      <div className="flex justify-between mt-4">
        <div className="w-[45%] text-left">
          <p className="text-sm text-[#2359FF]">{leftLabel}</p>
        </div>
        <div className="w-[45%] text-right">
          <p className="text-sm text-[#2359FF]">{rightLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
