// components/results/DimensionChart.jsx
'use client';

import React from 'react';

const DimensionChart = ({ dimension, value, state }) => {
  // Get dimension state description
  const stateDescription = dimension.states[state]?.description || '';
  const stateName = dimension.states[state]?.name || '';
  
  return (
    <div className="mb-4">
      {/* Dimension labels */}
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[#2359FF]">{dimension.leftLabel}</span>
        <span className="text-sm font-light text-[#2359FF]">{dimension.title}</span>
        <span className="text-sm text-[#2359FF]">{dimension.rightLabel}</span>
      </div>
      
      {/* Slider track */}
      <div className="relative h-5 w-full">
        <div className="slider-track">
          {/* Filled portion */}
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${value}%`,
              background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
            }}
          ></div>
          
          {/* Pulse animation */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              animation: "pulse 3s infinite"
            }}
          ></div>
        </div>
        
        {/* Slider thumb */}
        <div
          className="slider-thumb"
          style={{ left: `${value}%` }}
        >
          <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Dimension description card */}
      <div className="dimension-description mt-4">
        <h3 className="text-base font-light mb-2 text-[#2359FF]">
          {dimension.title}: <span className="font-normal">{stateName}</span>
        </h3>
        <p className="text-sm text-[#2359FF]">
          {stateDescription}
        </p>
        
        {/* Only show these sections if they exist */}
        {dimension.states[state]?.frameworks && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-[#2359FF]">Frameworks you may be interested in:</h4>
            <p className="text-xs mt-1 text-[#2359FF]">
              {dimension.states[state].frameworks}
            </p>
          </div>
        )}
        
        {dimension.states[state]?.practices && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-[#2359FF]">Practices you may be interested in:</h4>
            <p className="text-xs mt-1 text-[#2359FF]">
              {dimension.states[state].practices}
            </p>
          </div>
        )}
        
        {dimension.states[state]?.tools && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-[#2359FF]">Tools you may be interested in:</h4>
            <p className="text-xs mt-1 text-[#2359FF]">
              {dimension.states[state].tools}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DimensionChart;
