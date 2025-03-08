// components/mastery-quiz/MasteryMetricStep.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';

const MasteryMetricStep = ({ onNext, onBack, onComplete }) => {
  const { 
    adaptiveMasteryMetric, 
    setAdaptiveMasteryMetric,
    calculateMasteryResults 
  } = useQuiz();

  // Mastery metric options with descriptions
  const metricOptions = [
    {
      id: 'Confidence in Decision-Making',
      title: 'Confidence in Decision-Making',
      description: 'You measure growth through reduced hesitation, quicker choices, and increased internal trust.',
      icon: '🔍'
    },
    {
      id: 'Creative Output Quality',
      title: 'Creative Output Quality',
      description: 'You measure growth through consistency of work, external recognition, and meeting high personal standards.',
      icon: '✨'
    },
    {
      id: 'Reduced Stress / Increased Ease',
      title: 'Reduced Stress / Increased Ease',
      description: 'You measure growth through improved energy management, external productivity, and feedback quality.',
      icon: '🌿'
    },
    {
      id: 'Personal Satisfaction & Enjoyment',
      title: 'Personal Satisfaction & Enjoyment',
      description: 'You measure growth through intrinsic motivation, joy in the process, and alignment with personal values.',
      icon: '🌟'
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
    <div className="bg-transparent rounded-3xl w-full max-w-2xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-light mb-3 gradient-text">
          How do you measure mastery?
        </h2>
        <p className="text-sm text-center mb-4 text-[#2359FF]">
          This represents your personal criteria for determining growth and success in your creative journey.
        </p>
      </div>

      {/* Mastery metric options */}
      <div className="space-y-4 mb-8">
        {metricOptions.map((option) => (
          <div
            key={option.id}
            className={`p-4 rounded-[28px] cursor-pointer transition-all duration-300 ${
              adaptiveMasteryMetric === option.id
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
              {adaptiveMasteryMetric === option.id && (
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
          role="button"
          tabIndex="0"
          className="keyboard-button"
        >
          <span className="relative z-10 tracking-widest">BACK</span>
          <div className="keyboard-texture"></div>
          <div className="button-particles"></div>
        </button>
        
        <button
          onClick={handleNext}
          role="button"
          tabIndex="0"
          className={`keyboard-button ${!adaptiveMasteryMetric ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!adaptiveMasteryMetric}
        >
          <span className="relative z-10 tracking-widest">SEE RESULTS</span>
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

export default MasteryMetricStep;
