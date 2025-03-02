// components/quiz/QuizContainer.jsx
'use client';

import React, { useMemo } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { getAllQuestions } from '@/data/questions';
import IntroPage from './IntroPage';
import QuizCard from './QuizCard';
import ResultsPage from '../results/ResultsPage';
import ProgressBar from './ProgressBar';

const QuizContainer = () => {
  const { 
    currentStep, 
    currentQuestionIndex, 
    nextQuestion, 
    prevQuestion, 
    answers,
    calculateAndSetResults
  } = useQuiz();
  
  // Get all questions
  const questions = useMemo(() => getAllQuestions(), []);
  
  // Current question
  const currentQuestion = questions[currentQuestionIndex];
  
  // Calculate progress
  const progress = useMemo(() => {
    if (currentStep === 'intro') return 0;
    if (currentStep === 'results') return 100;
    return Math.floor((currentQuestionIndex / questions.length) * 100);
  }, [currentStep, currentQuestionIndex, questions.length]);
  
  // Handle submit button click
  const handleSubmit = () => {
    calculateAndSetResults(questions);
  };
  
  // Handle next button click
  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      handleSubmit();
      return;
    }
    nextQuestion();
  };
  
  // Render correct step
  const renderStep = () => {
    switch (currentStep) {
      case 'intro':
        return <IntroPage />;
      case 'questions':
        return (
          <div className="flex flex-col">
            <ProgressBar 
              progress={progress} 
              currentStep={currentQuestionIndex + 1} 
              totalSteps={questions.length} 
            />
            
            <QuizCard 
              question={currentQuestion}
              onNext={handleNext}
              onPrev={currentQuestionIndex > 0 ? prevQuestion : null}
              isLast={currentQuestionIndex === questions.length - 1}
              value={answers[currentQuestion?.id] || 50} // Default to 50 (middle) if no answer yet
            />
          </div>
        );
      case 'results':
        return <ResultsPage />;
      default:
        return <IntroPage />;
    }
  };
  
  return (
    <div className="flex items-start justify-center w-full min-h-screen">
      <div className="relative w-full max-w-2xl mx-auto mt-10 mb-10 p-8">
        {/* Background glow */}
        <div
          className="absolute inset-0 rounded-2xl blur-3xl opacity-50"
          style={{
            background: "rgba(255, 182, 193, 0.4)",
            zIndex: 0,
          }}
        />
        
        {renderStep()}
      </div>
    </div>
  );
};

export default QuizContainer;
