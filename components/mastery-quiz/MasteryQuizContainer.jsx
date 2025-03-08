// components/mastery-quiz/MasteryQuizContainer.jsx
'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';
import CoreAmbitionStep from './CoreAmbitionStep';
import CreativeStateStep from './CreativeStateStep';
import MasteryMetricStep from './MasteryMetricStep';
import ProgressBar from '../quiz/ProgressBar';

const MasteryQuizContainer = () => {
  const { skipMasteryQuiz } = useQuiz();
  const [currentStep, setCurrentStep] = useState(0);

  // Step components with proper rendering
  const steps = [
    { Component: CoreAmbitionStep, title: "Core Ambition" },
    { Component: CreativeStateStep, title: "Ideal Creative State" },
    { Component: MasteryMetricStep, title: "Adaptive Mastery Metric" }
  ];

  // Progress calculation (0 to 100)
  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  // Navigation handlers
  const handleNext = () => {
    console.log(`Moving from step ${currentStep} to ${Math.min(currentStep + 1, steps.length - 1)}`);
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    console.log(`Moving back from step ${currentStep} to ${Math.max(currentStep - 1, 0)}`);
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  // Get current step info
  const { Component: CurrentStepComponent, title: currentTitle } = steps[currentStep];

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
        <CurrentStepComponent 
          onNext={handleNext} 
          onBack={currentStep > 0 ? handleBack : null}
          onComplete={currentStep === steps.length - 1 ? () => {} : null}
        />

        {/* Skip option */}
        <div className="mt-8 text-center">
          <button 
            onClick={skipMasteryQuiz}
            className="text-sm text-[#2359FF] opacity-50 hover:opacity-100 underline"
          >
            Skip to results
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasteryQuizContainer;
