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
  
  // Questions per page for navigation
  const questionsPerPage = 3;
  
  // Calculate progress
  const progress = useMemo(() => {
    if (currentStep === 'intro') return 0;
    if (currentStep === 'results') return 100;
    // Progress is based on group/page of questions, not individual question
    return Math.floor(((Math.floor(currentQuestionIndex / questionsPerPage) + 1) * questionsPerPage / questions.length) * 100);
  }, [currentStep, currentQuestionIndex, questions.length]);
  
  // Handle submit button click
  const handleSubmit = () => {
    calculateAndSetResults(questions);
  };
  
  // Handle next button click
  const handleNext = () => {
    // Check if we're at the last group of questions
    const currentGroup = Math.floor(currentQuestionIndex / questionsPerPage);
    const totalGroups = Math.ceil(questions.length / questionsPerPage);
    
    if (currentGroup >= totalGroups - 1) {
      handleSubmit();
      return;
    }
    
    // Move to the next group of questions
    const nextGroupStart = (currentGroup + 1) * questionsPerPage;
    const jumpTo = nextGroupStart;
    nextQuestion(jumpTo - currentQuestionIndex); // Jump to the next group
  };
  
  // Handle previous button click
  const handlePrev = () => {
    // Go back to previous group
    const currentGroup = Math.floor(currentQuestionIndex / questionsPerPage);
    if (currentGroup > 0) {
      const prevGroupStart = (currentGroup - 1) * questionsPerPage;
      prevQuestion(currentQuestionIndex - prevGroupStart); // Jump back to the previous group
    }
  };
  
  // Render correct step
  const renderStep = () => {
    switch (currentStep) {
      case 'intro':
        return <IntroPage />;
      case 'questions':
        // Calculate if we're on the last group of questions
        const currentGroup = Math.floor(currentQuestionIndex / questionsPerPage);
        const totalGroups = Math.ceil(questions.length / questionsPerPage);
        const isLastGroup = currentGroup >= totalGroups - 1;
        
        return (
          <div className="flex flex-col">
            <ProgressBar 
              progress={progress} 
              currentStep={currentGroup + 1} 
              totalSteps={totalGroups} 
            />
            
            <QuizCard 
              currentQuestionIndex={currentQuestionIndex}
              onNext={handleNext}
              onPrev={currentGroup > 0 ? handlePrev : null}
              isLast={isLastGroup}
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
    <div className="main-container">
      <div className="card-container">
        {/* Background glow */}
        <div className="bg-glow"></div>
        
        {renderStep()}
      </div>
    </div>
  );
};
