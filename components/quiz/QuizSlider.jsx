'use client';

import React from 'react';

const QuizSlider = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="relative w-full py-4 max-w-md mx-auto">
      {/* Track */}
      <div className="h-2 rounded-full bg-gray-200 relative overflow-hidden">
        {/* Fill */}
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
      
      {/* Thumb */}
      <div
        className="absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-lg border border-gray-300"
        style={{
          left: `${value}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Hidden Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default QuizSlider;
