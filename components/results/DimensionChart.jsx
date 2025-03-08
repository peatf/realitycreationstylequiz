'use client';

import React from 'react';

const DimensionChart = ({ dimension, value, state }) => {
  const stateObj = dimension.states[state] || {};
  const stateDescription = stateObj.description || '';
  const stateName = stateObj.name || '';

  return (
    <div className="mb-6">
      {/* Dimension Labels */}
      <div className="flex justify-between mb-2">
        <span className="text-xs text-[#2359FF]">{dimension.leftLabel}</span>
        <span className="text-xs text-[#2359FF] font-light">{dimension.title}</span>
        <span className="text-xs text-[#2359FF]">{dimension.rightLabel}</span>
      </div>

      {/* Progress Bar Container */}
      <div className="relative w-full h-3 rounded-full overflow-hidden bg-slider-track">
        {/* Filled Portion */}
        <div
          className="h-full rounded-full bg-slider-fill"
          style={{ width: `${value}%` }}
        />
        {/* Pulse Overlay (optional) */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
        {/* Slider Thumb */}
        <div
          className="absolute top-1/2 rounded-full bg-slider-thumb"
          style={{
            left: `${value}%`,
            transform: 'translate(-50%, -50%)',
            width: '16px',
            height: '16px'
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-70"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>

      {/* Description Card */}
      <div
        className="mt-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm"
        style={{ border: '1px solid rgba(220,255,200,0.6)' }}
      >
        <h3 className="mb-2 text-base text-[#2359FF] font-light">
          {dimension.title}: <span className="font-normal">{stateName}</span>
        </h3>
        <p className="mb-2 text-sm text-[#2359FF]">{stateDescription}</p>

        {stateObj.frameworks && (
          <div className="mt-2">
            <h4 className="text-sm text-[#2359FF] mb-1 font-medium">
              Frameworks you may be interested in:
            </h4>
            <p className="text-xs text-[#2359FF]">{stateObj.frameworks}</p>
          </div>
        )}

        {stateObj.practices && (
          <div className="mt-2">
            <h4 className="text-sm text-[#2359FF] mb-1 font-medium">
              Practices you may be interested in:
            </h4>
            <p className="text-xs text-[#2359FF]">{stateObj.practices}</p>
          </div>
        )}

        {stateObj.tools && (
          <div className="mt-2">
            <h4 className="text-sm text-[#2359FF] mb-1 font-medium">
              Tools you may be interested in:
            </h4>
            <p className="text-xs text-[#2359FF]">{stateObj.tools}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DimensionChart;
