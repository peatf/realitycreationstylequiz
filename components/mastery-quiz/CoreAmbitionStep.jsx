// components/mastery-quiz/CoreAmbitionStep.jsx
'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';

const CoreAmbitionStep = ({ onNext }) => {
  const { coreAmbition, setCoreAmbition } = useQuiz();
  const [hoverOption, setHoverOption] = useState(null);

  // Ambition options with descriptions
  const ambitionOptions = [
    {
      id: 'Recognition',
      title: 'Recognition',
      description: 'You are driven by external validation and seek meaningful impact. Success feels like acknowledgment of your unique contributions.',
      icon: '01'
    },
    {
      id: 'Precision',
      title: 'Precision',
      description: 'You are focused on refinement and value depth over breadth. Success feels like achieving exceptional quality and mastery of details.',
      icon: '02'
    },
    {
      id: 'Movement',
      title: 'Movement',
      description: 'You prioritize personal agency and resist external constraints. Success feels like the freedom to navigate life on your own terms.',
      icon: '03'
    },
    {
      id: 'Innovation',
      title: 'Innovation',
      description: 'You seek to break new ground and value unique approaches. Success feels like creating something that didn\'t exist before.',
      icon: '04'
    },
    {
      id: 'Sustainability',
      title: 'Sustainability',
      description: 'You focus on consistent performance and predictable growth. Success feels like building systems that remain resilient over time.',
      icon: '05'
    }
  ];

  // Handle selection
  const handleSelect = (ambitionId) => {
    setCoreAmbition(ambitionId);
  };

  // Handle next button click with debugging
  const handleNext = () => {
    if (coreAmbition) {
      console.log('CoreAmbitionStep: Calling onNext handler with selection:', coreAmbition);
      onNext();
    } else {
      console.log('CoreAmbitionStep: Cannot proceed - no selection made');
    }
  };

  return (
    <div className="p-6 mb-8 relative">
      {/* Document ID Label */}
      <div className="absolute top-2 right-0 text-xs font-light tracking-widest" style={{ color: "#2359FF", fontSize: "8px" }}>
        FORM-AM-24
      </div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <h2 className="text-xl font-light mb-3 tracking-wide text-center" style={{ color: "#2359FF", letterSpacing: "0.15em", fontFamily: "sans-serif" }}>
            Core Ambition Assessment
          </h2>
          <div className="w-16 h-px mx-auto my-2" style={{ background: "rgba(193,191,132,0.5)" }}></div>
          <p className="text-xs text-center mb-4" style={{ color: "#2359FF", letterSpacing: "0.05em", fontFamily: "sans-serif" }}>
            Select the fundamental driving force that shapes your approach to mastery
          </p>
        </div>

        {/* Technical specifications line */}
        <div className="flex justify-between items-center py-2 mb-6 border-t border-b border-dashed" style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>PROFILE-A</span>
          <span className="text-xs tracking-widest font-extralight" style={{ color: "#2359FF", fontSize: "10px" }}>AMBITION-MAP</span>
          <span className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>5 OPTIONS</span>
        </div>

        {/* Ambition options */}
        <div className="space-y-3 mb-8">
          {ambitionOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-md border border-solid cursor-pointer transition-all duration-300 relative`}
              onClick={() => handleSelect(option.id)}
              onMouseEnter={() => setHoverOption(option.id)}
              onMouseLeave={() => setHoverOption(null)}
              style={{ 
                borderWidth: "1px",
                borderColor: coreAmbition === option.id ? "#2359FF" : "rgba(193,191,132,0.4)",
                background: coreAmbition === option.id ? "rgba(235,240,180,0.95)" : "rgba(235,240,180,0.6)"
              }}
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
                  <h3 className="text-sm font-medium tracking-wide mb-1" style={{ color: "#2359FF", letterSpacing: "0.1em", fontFamily: "sans-serif" }}>
                    {option.title}
                  </h3>
                  <p className="text-xs" style={{ color: "#2359FF", lineHeight: "1.5", fontFamily: "sans-serif" }}>
                    {option.description}
                  </p>
                </div>
                {coreAmbition === option.id && (
                  <div className="ml-auto" style={{ color: "#2359FF" }}>
                    <div className="w-3 h-3 border-r border-b rotate-45 transform border-[#2359FF]" style={{ borderWidth: "1px" }}></div>
                  </div>
                )}
              </div>
              
              {/* Selection indicator */}
              {coreAmbition === option.id && (
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#2359FF]"></div>
              )}
              
              {/* Hover effect - subtle */}
              {hoverOption === option.id && coreAmbition !== option.id && (
                <div className="absolute inset-0 bg-[rgba(193,191,132,0.1)] pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>
            {coreAmbition ? `SELECTED: ${coreAmbition}` : 'NO SELECTION'}
          </div>
          
          <button
            onClick={handleNext}
            className={`relative px-8 py-2 transition-all duration-300 text-xs tracking-wide ${!coreAmbition ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!coreAmbition}
            type="button"
            style={{
              borderRadius: "2px",
              color: "#2359FF",
              background: "transparent",
              border: "1px solid rgba(193,191,132,0.4)",
              fontFamily: "sans-serif"
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
            <span className="text-xs" style={{ fontSize: "8px", color: "#2359FF", letterSpacing: "0.1em", fontFamily: "sans-serif" }}>
              {coreAmbition ? 'READY TO PROCEED' : 'AWAITING SELECTION'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreAmbitionStep;
