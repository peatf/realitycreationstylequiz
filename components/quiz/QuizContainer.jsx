// components/quiz/QuizContainer.jsx
'use client';

import React, { useMemo } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { getAllQuestions } from '@/data/questions';
import IntroPage from './IntroPage';
import QuizCard from './QuizCard';
import ResultsPage from '../results/ResultsPage';
import ProgressBar from './ProgressBar';
import MasteryQuizContainer from '../mastery-quiz/MasteryQuizContainer';

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
    const currentGroup = Math.floor(currentQuestionIndex / questionsPerPage);
    const totalGroups = Math.ceil(questions.length / questionsPerPage);
    return Math.floor(((currentGroup + 1) / totalGroups) * 100);
  }, [currentStep, currentQuestionIndex, questions.length, questionsPerPage]);
  
  // Handle submit button click
  const handleSubmit = () => {
    calculateAndSetResults(questions);
  };
  
  // Handle next button click
  const handleNext = () => {
    console.log("Next button clicked"); // Debug logging
    
    // Check if we're at the last group of questions
    const currentGroup = Math.floor(currentQuestionIndex / questionsPerPage);
    const totalGroups = Math.ceil(questions.length / questionsPerPage);
    
    if (currentGroup >= totalGroups - 1) {
      console.log("Submitting results"); // Debug logging
      handleSubmit();
      return;
    }
    
    // Move to the next group of questions
    const nextGroupStart = (currentGroup + 1) * questionsPerPage;
    const jumpTo = nextGroupStart;
    console.log(`Jumping from ${currentQuestionIndex} to ${jumpTo}`); // Debug logging
    nextQuestion(jumpTo - currentQuestionIndex); // Jump to the next group
  };
  
  // Handle previous button click
  const handlePrev = () => {
    console.log("Previous button clicked"); // Debug logging
    
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
          <div className="flex flex-col space-y-4 pt-2">
            {/* Document ID Label */}
            <div className="doc-id-label">
              QUESTION_RCP-24
            </div>
            
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
      case 'masteryQuiz':
        return <MasteryQuizContainer />;
      case 'results':
        return <ResultsPage />;
      default:
        return <IntroPage />;
    }
  };
  
  return (
    <div className="main-container">
      <div className="card-container">
        {/* Grid background */}
        <div className="grid-bg"></div>
        
        {renderStep()}
      </div>
    </div>
  );
};

export default QuizContainer;
