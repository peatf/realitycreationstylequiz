// components/results/DimensionChart.jsx
'use client';

import React from 'react';

const DimensionChart = ({ dimension, value, state }) => {
  // Get dimension state description
  const stateDescription = dimension.states[state]?.description || '';
  const stateName = dimension.states[state]?.name || '';
  
  return (
    <div className="mb-8 transition-all duration-300 hover:shadow-lg">
      {/* Card Container with improved styling */}
      <div className="rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(220, 255, 200, 0.6)",
          boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 10px rgba(193, 191, 132, 0.3)"
        }}
      >
        {/* Header Section */}
        <div className="px-6 py-4 border-b border-[rgba(220,255,200,0.6)]">
          <h3 className="text-lg font-light mb-1 text-[#2359FF]">
            {dimension.title}: <span className="font-normal">{stateName}</span>
          </h3>
        </div>
        
        {/* Dimension Slider Section */}
        <div className="px-6 py-4">
          {/* Labels with better spacing */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-[#2359FF]">{dimension.leftLabel}</span>
            <span className="text-sm text-[#2359FF]">{dimension.rightLabel}</span>
          </div>
          
          {/* Slider track with improved styling */}
          <div className="relative h-5 w-full mb-4">
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
              
              {/* Slider thumb with enhanced visibility */}
              <div
                className="thumb-glow"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: `${value}%`,
                  width: '18px',
                  height: '18px',
                  borderRadius: '9999px',
                  transform: "translate(-50%, -50%)",
                  background: "rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  boxShadow: "0 0 10px rgba(120, 200, 255, 0.5), 0 0 20px rgba(120, 200, 255, 0.3)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  zIndex: 20
                }}
              >
                {/* Inner dot */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '5px',
                    height: '5px',
                    borderRadius: '9999px',
                    background: 'white',
                    opacity: 0.7,
                    transform: "translate(-50%, -50%)"
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Description Section */}
          <div className="mt-4">
            <p className="text-sm text-[#2359FF] mb-6 leading-relaxed">
              {stateDescription}
            </p>
          </div>
        </div>
        
        {/* Recommendations Section (if any exist) */}
        {(dimension.states[state]?.frameworks || 
          dimension.states[state]?.practices || 
          dimension.states[state]?.tools) && (
          <div className="px-6 py-4 bg-white/10 border-t border-[rgba(220,255,200,0.6)]">
            <h4 className="text-base font-medium text-[#2359FF] mb-3">
              Recommendations
            </h4>
            
            <div className="space-y-4">
              {dimension.states[state]?.frameworks && (
                <div className="bg-white/20 p-3 rounded-xl mb-3">
                  <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Frameworks you may be interested in:</h4>
                  <p className="text-xs text-[#2359FF]">
                    {dimension.states[state].frameworks}
                  </p>
                </div>
              )}
              
              {dimension.states[state]?.practices && (
                <div className="bg-white/20 p-3 rounded-xl mb-3">
                  <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Practices you may be interested in:</h4>
                  <p className="text-xs text-[#2359FF]">
                    {dimension.states[state].practices}
                  </p>
                </div>
              )}
              
              {dimension.states[state]?.tools && (
                <div className="bg-white/20 p-3 rounded-xl">
                  <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Tools you may be interested in:</h4>
                  <p className="text-xs text-[#2359FF]">
                    {dimension.states[state].tools}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Subtle indicator for the dimension state position */}
      <div className="mt-3 flex justify-center">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${state === 'left' ? 'bg-[#2359FF]' : 'bg-[rgba(35,89,255,0.2)]'}`}></span>
          <span className={`w-2 h-2 rounded-full ${state === 'balanced' ? 'bg-[#2359FF]' : 'bg-[rgba(35,89,255,0.2)]'}`}></span>
          <span className={`w-2 h-2 rounded-full ${state === 'right' ? 'bg-[#2359FF]' : 'bg-[rgba(35,89,255,0.2)]'}`}></span>
        </div>
      </div>
    </div>
  );
};

export default DimensionChart;
