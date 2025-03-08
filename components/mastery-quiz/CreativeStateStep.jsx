// components/mastery-quiz/CreativeStateStep.jsx
'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';

const CreativeStateStep = ({ onNext, onBack }) => {
  const { idealCreativeState, setIdealCreativeState } = useQuiz();
  const [hoverOption, setHoverOption] = useState(null);

  // Creative state options with descriptions
  const creativeStateOptions = [
    {
      id: 'Effortless Flow',
      title: 'Effortless Flow',
      description: 'You thrive when creativity feels natural and unforced, with minimal resistance and intuitive progression.',
      icon: '01'
    },
    {
      id: 'Absolute Clarity',
      title: 'Absolute Clarity',
      description: 'You thrive with precise understanding, decisive action, and minimal ambiguity in your creative process.',
      icon: '02'
    },
    {
      id: 'Spacious Creativity',
      title: 'Spacious Creativity',
      description: 'You thrive with room for experimentation, open-ended exploration, and generous mental bandwidth.',
      icon: '03'
    },
    {
      id: 'Refined Impact',
      title: 'Refined Impact',
      description: 'You thrive with concentrated creative output, high-quality results, and minimal unnecessary effort.',
      icon: '04'
    }
  ];

  // Handle selection (optimized to prevent unnecessary re-renders)
  const handleSelect = (stateId) => {
    if (idealCreativeState !== stateId) {
      setIdealCreativeState(stateId);
    }
  };

  // Handle navigation
  const handleNext = () => {
    if (idealCreativeState && onNext) {
      onNext();
    }
  };

  return (
    <div className="p-6 mb-8 rounded-xl overflow-hidden relative w-full max-w-2xl mx-auto" 
         style={{
           boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3)"
         }}>
      {/* Document ID Label */}
      <div className="absolute top-2 right-2 text-xs font-light tracking-widest" style={{ color: "#2359FF", fontSize: "8px" }}>
        FORM-CS-24
      </div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <h2 className="text-xl font-light mb-3 tracking-wide" style={{ color: "#2359FF", letterSpacing: "0.15em" }}>
            Creative State Assessment
          </h2>
          <div className="w-16 h-px mx-auto my-2" style={{ background: "rgba(193,191,132,0.5)" }}></div>
          <p className="text-xs text-center mb-4" style={{ color: "#2359FF", letterSpacing: "0.05em" }}>
            Select the optimal experience in which your creativity thrives
          </p>
        </div>

        {/* Technical specifications line */}
        <div className="flex justify-between items-center py-2 mb-6 border-t border-b border-dashed" style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>PROFILE-B</span>
          <span className="text-xs tracking-widest font-extralight" style={{ color: "#2359FF", fontSize: "10px" }}>STATE-MAP</span>
          <span className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>4 OPTIONS</span>
        </div>

        {/* Creative state options */}
        <div className="space-y-3 mb-8">
          {creativeStateOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-md border border-solid cursor-pointer transition-all duration-300 relative ${
                idealCreativeState === option.id
                  ? 'border-[#2359FF]'
                  : 'border-[rgba(193,191,132,0.4)]'
              }`}
              onClick={() => handleSelect(option.id)}
              onMouseEnter={() => setHoverOption(option.id)}
              onMouseLeave={() => setHoverOption(null)}
              onTouchStart={() => {}} // Empty handler to enable active state on mobile
              style={{ borderWidth: "1px" }}
            >
              <div className="flex items-start">
                <div className="mr-3 font-mono text-xs flex items-center justify-center w-5 h-5 border border-solid rounded-sm" 
                     style={{ 
                       color: "#2359FF", 
                       borderColor: "rgba(193,191,132,0.6)",
                       fontSize: "8px"
                     }}>
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-wide mb-1" style={{ color: "#2359FF", letterSpacing: "0.1em" }}>
                    {option.title}
                  </h3>
                  <p className="text-xs" style={{ color: "#2359FF", lineHeight: "1.5" }}>
                    {option.description}
                  </p>
                </div>
                {idealCreativeState === option.id && (
                  <div className="ml-auto" style={{ color: "#2359FF" }}>
                    <div className="w-3 h-3 border-r border-b rotate-45 transform border-[#2359FF]" style={{ borderWidth: "1px" }}></div>
                  </div>
                )}
              </div>
              
              {/* Selection indicator */}
              {idealCreativeState === option.id && (
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#2359FF]"></div>
              )}
              
              {/* Hover effect - subtle */}
              {hoverOption === option.id && idealCreativeState !== option.id && (
                <div className="absolute inset-0 bg-[rgba(193,191,132,0.1)] pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onBack}
            className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide"
            type="button"
            style={{
              borderRadius: "2px",
              color: "#2359FF",
              background: "transparent",
              border: "1px solid rgba(193,191,132,0.4)"
            }}
          >
            <span className="relative z-10 tracking-widest" style={{ letterSpacing: "0.2em", fontSize: "8px" }}>BACK</span>
            
            {/* Subtle hover effect */}
            <div 
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "rgba(193,191,132,0.1)"
              }}
            ></div>
          </button>
          
          <div className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>
            {idealCreativeState ? `SELECTED: ${idealCreativeState}` : 'NO SELECTION'}
          </div>
          
          <button
            onClick={handleNext}
            className={`relative px-8 py-2 transition-all duration-300 text-xs tracking-wide ${!idealCreativeState ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!idealCreativeState}
            type="button"
            style={{
              borderRadius: "2px",
              color: "#2359FF",
              background: "transparent",
              border: "1px solid rgba(193,191,132,0.4)"
            }}
          >
            <span className="relative z-10 tracking-widest" style={{ letterSpacing: "0.2em", fontSize: "8px" }}>NEXT</span>
            
            {/* Subtle hover effect */}
            <div 
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "rgba(193,191,132,0.1)"
              }}
            ></div>
          </button>
        </div>
        
        {/* Footer with technical info */}
        <div className="mt-6 pt-2 border-t border-dashed flex justify-between items-center" 
            style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs font-mono" style={{ fontSize: "8px", color: "#2359FF" }}>REV 2024-03</span>
          <div className="flex items-center">
            <div className="w-1 h-1 bg-blue-600 rounded-full mr-1"></div>
            <span className="text-xs" style={{ fontSize: "8px", color: "#2359FF", letterSpacing: "0.1em" }}>
              {idealCreativeState ? 'READY TO PROCEED' : 'AWAITING SELECTION'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeStateStep;
