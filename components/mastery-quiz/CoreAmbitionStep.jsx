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

  // Handle next button click
  const handleNext = () => {
    if (coreAmbition && onNext) {
      onNext();
    }
  };

  return (
    <div className="bg-transparent rounded-3xl w-full max-w-2xl mx-auto">
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
        >
          <span className="relative z-10 tracking-widest">NEXT</span>
          <div className="keyboard-texture"></div>
          <div className="button-particles"></div>
          <div className="button-shine"></div>
        </button>
      </div>
    </div>
  );
};

export default CoreAmbitionStep;
