// components/mastery-quiz/MasteryMetricStep.jsx
'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';

const MasteryMetricStep = ({ onNext, onBack, onComplete }) => {
  const { 
    adaptiveMasteryMetric, 
    setAdaptiveMasteryMetric,
    calculateMasteryResults 
  } = useQuiz();
  const [hoverOption, setHoverOption] = useState(null);

  // Mastery metric options with descriptions
  const metricOptions = [
    {
      id: 'Confidence in Decision-Making',
      title: 'Confidence in Decision-Making',
      description: 'You measure growth through reduced hesitation, quicker choices, and increased internal trust.',
      icon: '01'
    },
    {
      id: 'Creative Output Quality',
      title: 'Creative Output Quality',
      description: 'You measure growth through consistency of work, external recognition, and meeting high personal standards.',
      icon: '02'
    },
    {
      id: 'Reduced Stress / Increased Ease',
      title: 'Reduced Stress / Increased Ease',
      description: 'You measure growth through improved energy management, external productivity, and feedback quality.',
      icon: '03'
    },
    {
      id: 'Personal Satisfaction & Enjoyment',
      title: 'Personal Satisfaction & Enjoyment',
      description: 'You measure growth through intrinsic motivation, joy in the process, and alignment with personal values.',
      icon: '04'
    }
  ];

  // Handle selection (optimized to prevent unnecessary re-renders)
  const handleSelect = (metricId) => {
    if (adaptiveMasteryMetric !== metricId) {
      setAdaptiveMasteryMetric(metricId);
    }
  };

  // Handle navigation with delayed execution to ensure results process first
  const handleNext = () => {
    if (adaptiveMasteryMetric) {
      calculateMasteryResults();

      setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 300); // Delay ensures calculations complete before proceeding
    }
  };

  return (
    <div className="p-6 mb-8 rounded-xl overflow-hidden relative w-full max-w-2xl mx-auto" 
         style={{
           boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3)"
         }}>
      {/* Document ID Label */}
      <div className="absolute top-2 right-2 text-xs font-light tracking-widest" style={{ color: "#2359FF", fontSize: "8px" }}>
        FORM-MM-24
      </div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <h2 className="text-xl font-light mb-3 tracking-wide" style={{ color: "#2359FF", letterSpacing: "0.15em" }}>
            Mastery Metric Assessment
          </h2>
          <div className="w-16 h-px mx-auto my-2" style={{ background: "rgba(193,191,132,0.5)" }}></div>
          <p className="text-xs text-center mb-4" style={{ color: "#2359FF", letterSpacing: "0.05em" }}>
            Select your personal criteria for determining growth and success
          </p>
        </div>

        {/* Technical specifications line */}
        <div className="flex justify-between items-center py-2 mb-6 border-t border-b border-dashed" style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>PROFILE-C</span>
          <span className="text-xs tracking-widest font-extralight" style={{ color: "#2359FF", fontSize: "10px" }}>METRIC-MAP</span>
          <span className="text-xs font-mono" style={{ color: "#2359FF", fontSize: "8px" }}>FINAL STEP</span>
        </div>

        {/* Mastery metric options */}
        <div className="space-y-3 mb-8">
          {metricOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-md border border-solid cursor-pointer transition-all duration-300 relative ${
                adaptiveMasteryMetric === option.id
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
                {adaptiveMasteryMetric === option.id && (
                  <div className="ml-auto" style={{ color: "#2359FF" }}>
                    <div className="w-3 h-3 border-r border-b rotate-45 transform border-[#2359FF]" style={{ borderWidth: "1px" }}></div>
                  </div>
                )}
              </div>
              
              {/* Selection indicator */}
              {adaptiveMasteryMetric === option.id && (
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#2359FF]"></div>
              )}
              
              {/* Hover effect - subtle */}
              {hoverOption === option.id && adaptiveMasteryMetric !== option.id && (
                <div className="absolute inset-0 bg-[rgba(193,191,132,0.1)] pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="w-full mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-light" style={{ color: "#2359FF", fontSize: "8px" }}>PROGRESS</span>
            <span className="text-xs font-light" style={{ color: "#2359FF", fontSize: "8px" }}>3/3</span>
          </div>
          <div className="w-full h-1 rounded-none overflow-hidden"
               style={{ 
                background: "rgba(193,191,132,0.3)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)"
               }}>
            <div 
              className="h-1 rounded-none" 
              style={{ 
                width: "100%", 
                background: "rgba(193,191,132,0.6)" 
              }}
            ></div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onBack}
            className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide"
            role="button"
            tabIndex="0"
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
            {adaptiveMasteryMetric ? `SELECTED: ${adaptiveMasteryMetric.substring(0, 15)}...` : 'NO SELECTION'}
          </div>
          
          <button
            onClick={handleNext}
            className={`relative px-8 py-2 transition-all duration-300 text-xs tracking-wide ${!adaptiveMasteryMetric ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!adaptiveMasteryMetric}
            role="button"
            tabIndex="0"
            type="button"
            style={{
              borderRadius: "2px",
              color: "#2359FF",
              background: "transparent",
              border: "1px solid rgba(193,191,132,0.4)"
            }}
          >
            <span className="relative z-10 tracking-widest" style={{ letterSpacing: "0.2em", fontSize: "8px" }}>SEE RESULTS</span>
            
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
              {adaptiveMasteryMetric ? 'READY FOR ANALYSIS' : 'AWAITING SELECTION'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasteryMetricStep;
