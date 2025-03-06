// components/results/DimensionChart.jsx
'use client';

import React from 'react';

const DimensionChart = ({ dimension, value, state }) => {
  // Get dimension state description
  const stateDescription = dimension.states[state]?.description || '';
  const stateName = dimension.states[state]?.name || '';
  
  return (
    <div className="mb-4">
      {/* Dimension labels with left/right labels and title in center */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[#2359FF] w-1/3 text-left">{dimension.leftLabel}</span>
        <span className="text-sm font-light text-[#2359FF] w-1/3 text-center">{dimension.title}</span>
        <span className="text-sm text-[#2359FF] w-1/3 text-right">{dimension.rightLabel}</span>
      </div>
      
      {/* Slider track - inset styling with explicit inline styles */}
      <div className="relative h-5 w-full">
        <div
          style={{
            height: '20px',
            borderRadius: '9999px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
            boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
          }}
        >
          {/* Filled portion */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              borderRadius: '9999px',
              width: `${value}%`,
              background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))"
            }}
          ></div>
          
          {/* Pulse animation */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.2,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              animation: "pulse 3s infinite"
            }}
          ></div>
          
          {/* Slider thumb with forced display */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${value}%`,
              width: '16px',
              height: '16px',
              borderRadius: '9999px',
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              zIndex: 20,
              display: 'block !important'
            }}
          >
            {/* Inner dot with forced display */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '4px',
                height: '4px',
                borderRadius: '9999px',
                background: 'white',
                opacity: 0.6,
                transform: "translate(-50%, -50%)",
                display: 'block !important'
              }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Dimension description card with fixed styling */}
      <div 
        style={{
          padding: '1rem',
          borderRadius: '28px',
          marginTop: '1rem',
          background: "rgba(235,240,180,0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(220,255,200,0.6)",
          boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)"
        }}
      >
        <h3 className="text-base font-light mb-2 text-[#2359FF]">
          {dimension.title}: <span className="font-normal">{stateName}</span>
        </h3>
        <p className="text-sm text-[#2359FF] mb-3">
          {stateDescription}
        </p>
        
        {/* Only show these sections if they exist */}
        {dimension.states[state]?.frameworks && (
          <div style={{ marginTop: '0.75rem' }}>
            <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Frameworks you may be interested in:</h4>
            <p className="text-xs text-[#2359FF]">
              {dimension.states[state].frameworks}
            </p>
          </div>
        )}
        
        {dimension.states[state]?.practices && (
          <div style={{ marginTop: '0.75rem' }}>
            <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Practices you may be interested in:</h4>
            <p className="text-xs text-[#2359FF]">
              {dimension.states[state].practices}
            </p>
          </div>
        )}
        
        {dimension.states[state]?.tools && (
          <div style={{ marginTop: '0.75rem' }}>
            <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Tools you may be interested in:</h4>
            <p className="text-xs text-[#2359FF]">
              {dimension.states[state].tools}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DimensionChart;
