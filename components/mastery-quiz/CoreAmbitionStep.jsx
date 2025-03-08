// components/mastery-quiz/CoreAmbitionStep.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';

const CoreAmbitionStep = ({ onNext }) => {
  const { coreAmbition, setCoreAmbition } = useQuiz();

  // Ambition options with descriptions
  const ambitionOptions = [
    {
      id: 'Recognition',
      title: 'Recognition',
      description: 'You are driven by external validation and seek meaningful impact. Success feels like acknowledgment of your unique contributions.',
      icon: '🏆'
    },
    {
      id: 'Precision',
      title: 'Precision',
      description: 'You are focused on refinement and value depth over breadth. Success feels like achieving exceptional quality and mastery of details.',
      icon: '🎯'
    },
    {
      id: 'Movement',
      title: 'Movement',
      description: 'You prioritize personal agency and resist external constraints. Success feels like the freedom to navigate life on your own terms.',
      icon: '🚀'
    },
    {
      id: 'Innovation',
      title: 'Innovation',
      description: 'You seek to break new ground and value unique approaches. Success feels like creating something that didn\'t exist before.',
      icon: '💡'
    },
    {
      id: 'Sustainability',
      title: 'Sustainability',
      description: 'You focus on consistent performance and predictable growth. Success feels like building systems that remain resilient over time.',
      icon: '🌱'
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
    <div className="p-6 mb-8 rounded-3xl overflow-hidden relative" 
         style={{
           background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
           boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
         }}>
      {/* Inset shadow for debossed effect */}
      <div 
        className="absolute inset-0 rounded-3xl"
        style={{
          boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
          pointerEvents: "none",
          zIndex: 1
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-light mb-3 gradient-text">
            What is your core ambition?
          </h2>
          <p className="text-sm text-center mb-4 text-[#2359FF]">
            This represents your fundamental driving force - what genuinely motivates you and shapes how you approach growth and mastery.
          </p>
        </div>

        {/* Ambition options */}
        <div className="space-y-4 mb-8">
          {ambitionOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-[28px] cursor-pointer transition-all duration-300 ${
                coreAmbition === option.id
                  ? 'bg-[rgba(235,240,180,0.95)] shadow-md transform scale-[1.02]'
                  : 'bg-[rgba(235,240,180,0.6)] hover:bg-[rgba(235,240,180,0.8)]'
              }`}
              onClick={() => handleSelect(option.id)}
            >
              <div className="flex items-start">
                <div className="text-2xl mr-3">{option.icon}</div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-[#2359FF]">{option.title}</h3>
                  <p className="text-sm text-[#2359FF]">{option.description}</p>
                </div>
                {coreAmbition === option.id && (
                  <div className="ml-auto text-[#2359FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleNext}
            className={`keyboard-button ${!coreAmbition ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!coreAmbition}
            type="button"
          >
            <span className="relative z-10 tracking-widest">NEXT</span>
            <div className="keyboard-texture"></div>
            <div className="button-particles"></div>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoreAmbitionStep;
