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
        <span className="text-sm" style={{ color: "#2359FF" }}>{dimension.leftLabel}</span>
        <span className="text-sm font-light" style={{ color: "#2359FF" }}>{dimension.title}</span>
        <span className="text-sm" style={{ color: "#2359FF" }}>{dimension.rightLabel}</span>
      </div>
      
      {/* Slider track */}
      <div className="relative h-5 w-full">
        <div
          className="h-5 rounded-full w-full relative overflow-hidden"
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
          className="absolute top-1/2 w-4 h-4 rounded-full"
          style={{
            left: `${value}%`,
            transform: "translate(-50%, -50%)",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
               style={{ transform: "translate(-50%, -50%)" }}></div>
        </div>
      </div>
      
      {/* Dimension description card */}
      <div 
        className="p-4 rounded-3xl mt-4"
        style={{
          background: "rgba(235,240,180,0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(220,255,200,0.6)",
          boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)",
        }}
      >
        <h3 className="text-base font-light mb-2" style={{ color: "#2359FF" }}>
          {dimension.title}: <span className="font-normal">{stateName}</span>
        </h3>
        <p className="text-sm" style={{ color: "#2359FF" }}>
          {stateDescription}
        </p>
        
        {/* Only show these sections if they exist */}
        {dimension.states[state]?.frameworks && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold" style={{ color: "#2359FF" }}>Frameworks you may be interested in:</h4>
            <p className="text-xs mt-1" style={{ color: "#2359FF" }}>
              {dimension.states[state].frameworks}
            </p>
          </div>
        )}
        
        {dimension.states[state]?.practices && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold" style={{ color: "#2359FF" }}>Practices you may be interested in:</h4>
            <p className="text-xs mt-1" style={{ color: "#2359FF" }}>
              {dimension.states[state].practices}
            </p>
          </div>
        )}
        
        {dimension.states[state]?.tools && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold" style={{ color: "#2359FF" }}>Tools you may be interested in:</h4>
            <p className="text-xs mt-1" style={{ color: "#2359FF" }}>
              {dimension.states[state].tools}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DimensionChart;
