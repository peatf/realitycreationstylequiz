'use client';

import React from 'react';

/**
 * A simpler, cleaner dimension chart with fewer
 * box-shadows & borders to avoid white lines.
 */
const DimensionChart = ({ dimension, value, state }) => {
  const stateObj = dimension.states[state] || {};
  const stateDescription = stateObj.description || '';
  const stateName = stateObj.name || '';
  
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {/* Dimension labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.875rem', color: '#2359FF' }}>{dimension.leftLabel}</span>
        <span style={{ fontSize: '0.875rem', color: '#2359FF', fontWeight: '300' }}>
          {dimension.title}
        </span>
        <span style={{ fontSize: '0.875rem', color: '#2359FF' }}>{dimension.rightLabel}</span>
      </div>

      {/* The bar container (no borders, minimal box-shadow) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '12px',
          borderRadius: '9999px',
          background: 'linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))'
        }}
      >
        {/* Filled portion */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: `${value}%`,
            borderRadius: '9999px',
            background: 'linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))'
          }}
        />

        {/* Optional pulse animation (remove if not needed) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: 'pulse 3s infinite'
          }}
        />
        
        {/* Slider thumb */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${value}%`,
            transform: 'translate(-50%, -50%)',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1), inset 0 0 3px rgba(255,255,255,0.6)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#fff',
              opacity: 0.7
            }}
          />
        </div>
      </div>

      {/* (Optional) Dimension “description card” beneath the bar */}
      <div
        style={{
          marginTop: '0.75rem',
          padding: '1rem',
          borderRadius: '18px',
          background: 'rgba(235,240,180,0.5)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)'
        }}
      >
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', color: '#2359FF', fontWeight: '300' }}>
          {dimension.title}: <span style={{ fontWeight: '400' }}>{stateName}</span>
        </h3>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#2359FF' }}>
          {stateDescription}
        </p>

        {stateObj.frameworks && (
          <div style={{ marginTop: '0.5rem' }}>
            <h4 style={{ fontSize: '0.875rem', color: '#2359FF', marginBottom: '0.25rem' }}>
              Frameworks you may be interested in:
            </h4>
            <p style={{ fontSize: '0.75rem', color: '#2359FF' }}>
              {stateObj.frameworks}
            </p>
          </div>
        )}

        {stateObj.practices && (
          <div style={{ marginTop: '0.5rem' }}>
            <h4 style={{ fontSize: '0.875rem', color: '#2359FF', marginBottom: '0.25rem' }}>
              Practices you may be interested in:
            </h4>
            <p style={{ fontSize: '0.75rem', color: '#2359FF' }}>
              {stateObj.practices}
            </p>
          </div>
        )}

        {stateObj.tools && (
          <div style={{ marginTop: '0.5rem' }}>
            <h4 style={{ fontSize: '0.875rem', color: '#2359FF', marginBottom: '0.25rem' }}>
              Tools you may be interested in:
            </h4>
            <p style={{ fontSize: '0.75rem', color: '#2359FF' }}>
              {stateObj.tools}
            </p>
          </div>
        )}
      </div>

      {/* Keyframe for pulse animation (if used) */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default DimensionChart;
