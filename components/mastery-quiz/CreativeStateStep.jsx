// components/mastery-quiz/CreativeStateStep.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';

const CreativeStateStep = ({ onNext, onBack }) => {
  const { idealCreativeState, setIdealCreativeState } = useQuiz();

  // Creative state options with descriptions
  const creativeStateOptions = [
    {
      id: 'Effortless Flow',
      title: 'Effortless Flow',
      description: 'You thrive when creativity feels natural and unforced, with minimal resistance and intuitive progression.',
      icon: '🌊'
    },
    {
      id: 'Absolute Clarity',
      title: 'Absolute Clarity',
      description: 'You thrive with precise understanding, decisive action, and minimal ambiguity in your creative process.',
      icon: '✨'
    },
    {
      id: 'Spacious Creativity',
      title: 'Spacious Creativity',
      description: 'You thrive with room for experimentation, open-ended exploration, and generous mental bandwidth.',
      icon: '🌌'
    },
    {
      id: 'Refined Impact',
      title: 'Refined Impact',
      description: 'You thrive with concentrated creative output, high-quality results, and minimal unnecessary effort.',
      icon: '💎'
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
    <div className="bg-transparent rounded-3xl w-full max-w-2xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-light mb-3 gradient-text">
          What is your ideal creative state?
        </h2>
        <p className="text-sm text-center mb-4 text-[#2359FF]">
          This represents the optimal experience and emotional landscape in which your creativity thrives.
        </p>
      </div>

      {/* Creative state options */}
      <div className="space-y-4 mb-8">
        {creativeStateOptions.map((option) => (
          <div
            key={option.id}
            className={`p-4 rounded-[28px] cursor-pointer transition-all duration-300 ${
              idealCreativeState === option.id
                ? 'bg-[rgba(235,240,180,0.95)] shadow-md transform scale-[1.02]'
                : 'bg-[rgba(235,240,180,0.6)] hover:bg-[rgba(235,240,180,0.8)] touch-active'
            }`}
            onClick={() => handleSelect(option.id)}
            onTouchStart={() => {}} // Empty handler to enable active state on mobile
          >
            <div className="flex items-start">
              <div className="text-2xl mr-3">{option.icon}</div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-[#2359FF]">{option.title}</h3>
                <p className="text-sm text-[#2359FF]">{option.description}</p>
              </div>
              {idealCreativeState === option.id && (
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
      <div className="flex justify-center gap-4 mt-6">
        <button 
          onClick={onBack} 
          className="keyboard-button"
        >
          <span className="relative z-10 tracking-widest">BACK</span>
          <div className="keyboard-texture"></div>
          <div className="button-particles"></div>
        </button>
        
        <button
          onClick={handleNext}
          className={`keyboard-button ${!idealCreativeState ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!idealCreativeState}
        >
          <span className="relative z-10 tracking-widest">NEXT</span>
          <div className="keyboard-texture"></div>
          <div className="button-particles"></div>
          <div className="button-shine"></div>
        </button>
      </div>

      {/* Touch feedback styles for mobile */}
      <style jsx>{`
        .touch-active {
          transform: scale(0.98);
          transition: transform 0.1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CreativeStateStep;
