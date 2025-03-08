// components/mastery-quiz/MasteryQuizContainer.jsx
'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';
import CoreAmbitionStep from './CoreAmbitionStep';
import CreativeStateStep from './CreativeStateStep';
import MasteryMetricStep from './MasteryMetricStep';
import ProgressBar from '../quiz/ProgressBar';

const MasteryQuizContainer = () => {
  const { skipMasteryQuiz, calculateMasteryResults } = useQuiz();
  const [currentStep, setCurrentStep] = useState(0);

  // Step components
  const steps = [
    CoreAmbitionStep,
    CreativeStateStep,
    MasteryMetricStep
  ];

  // Progress calculation (0 to 100)
  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  // Navigation handlers
  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      // Ensure mastery results are calculated in the final step
      calculateMasteryResults();
    } else {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  // Get current step component
  const CurrentStepComponent = steps[currentStep];

  return (
    <div className="bg-transparent p-6 rounded-3xl w-full">
      <div className="relative z-10 pt-4">
        {/* Progress indicator */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-4 gradient-text">
            Dynamic Mastery Quiz
          </h1>
          <ProgressBar 
            progress={progress} 
            currentStep={currentStep + 1} 
            totalSteps={steps.length} 
          />
        </div>

        {/* Current step */}
        <div className="fade-in">
          <CurrentStepComponent 
            onNext={handleNext} 
            onBack={currentStep > 0 ? handleBack : null}
            onComplete={() => {}} 
          />
        </div>

        {/* Skip option (hidden in production, useful for debugging) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-center">
            <button 
              onClick={skipMasteryQuiz}
              role="button"
              tabIndex="0"
              className="text-sm text-[#2359FF] opacity-50 hover:opacity-100 focus:ring focus:ring-blue-300"
            >
              Skip mastery quiz
            </button>
          </div>
        )}
      </div>

      {/* Fade-in animation for smoother step transitions */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MasteryQuizContainer;
