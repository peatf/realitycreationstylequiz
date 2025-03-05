// components/quiz/QuizSlider.jsx
'use client';

import React from 'react';

const QuizSlider = ({ value, onChange, leftLabel, rightLabel }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };
  
  return (
    <div style={{
      position: 'relative',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      width: '100%',
      maxWidth: '20rem',
      margin: '0 auto'
    }}>
      {/* Slider track */}
      <div
        style={{
          height: '1.25rem',
          borderRadius: '9999px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
          boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
        }}
      >
        {/* Animated pulse effect */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            opacity: '0.2',
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            transform: "translateX(-100%)",
            animation: "pulse 3s infinite"
          }}
        />
        
        {/* Slider thumb - moved inside the track div */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            width: '1rem',
            height: '1rem',
            borderRadius: '9999px',
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
          {/* White dot in the center of the thumb */}
          <div 
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '0.25rem',
              height: '0.25rem',
              borderRadius: '9999px',
              background: 'white',
              opacity: '0.6',
              transform: "translate(-50%, -50%)"
            }}
          />
        </div>
      </div>
      
      {/* Hidden actual input slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        style={{
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          opacity: '0',
          cursor: 'pointer',
          zIndex: 10
        }}
      />
      
      {/* Answer labels */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}>
        <div style={{ textAlign: 'left', maxWidth: '45%' }}>
          <p style={{ 
            fontSize: '0.75rem', 
            whiteSpace: 'pre-line', 
            color: "#2359FF"
          }}>
            {leftLabel}
          </p>
        </div>
        <div style={{ textAlign: 'right', maxWidth: '45%' }}>
          <p style={{ 
            fontSize: '0.75rem', 
            whiteSpace: 'pre-line', 
            color: "#2359FF"
          }}>
            {rightLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
