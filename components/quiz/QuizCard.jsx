// components/quiz/QuizCard.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import QuizSlider from './QuizSlider';
import { getAllQuestions } from '@/data/questions';

const QuizCard = ({ currentQuestionIndex, onNext, onPrev, isLast }) => {
  const { updateAnswer, answers } = useQuiz();
  const allQuestions = getAllQuestions();
  
  // Get the current group of 3 questions (or fewer if at the end)
  const questionsPerPage = 3;
  const startIdx = Math.floor(currentQuestionIndex / questionsPerPage) * questionsPerPage;
  const currentQuestions = allQuestions.slice(startIdx, startIdx + questionsPerPage);
  
  // Handle slider change for a specific question
  const handleSliderChange = (questionId, dimensionKey, newValue) => {
    updateAnswer(questionId, dimensionKey, newValue);
  };
  
  return (
    <div className="bg-transparent p-6 rounded-3xl w-full mt-12">
      <div className="relative z-10 pt-4">
        {/* Multiple Questions */}
        {currentQuestions.map((question, index) => (
          <React.Fragment key={question.id}>
            <div className="mb-10"> {/* Increased spacing between questions */}
              {/* Question box with glassmorphism styling */}
              <div className="question-box">
                {/* Glassmorphism layers */}
                <div className="glass-layer layer-1"></div>
                <div className="glass-layer layer-2"></div>
                <div className="glass-layer layer-3"></div>
                <div className="edge-highlight"></div>
                
                <p className="question-text">
                  {question.text}
                </p>
                
                {/* Slider */}
                <div className="mt-8 relative z-10"> {/* Ensure slider is above glassmorphism layers */}
                  <QuizSlider
                    value={answers[question.id] || 50}
                    onChange={(newValue) => handleSliderChange(question.id, question.dimension, newValue)}
                    leftLabel={question.leftLabel}
                    rightLabel={question.rightLabel}
                  />
                </div>
              </div>
            </div>
            
            {/* Add divider between questions except for the last one */}
            {index < currentQuestions.length - 1 && (
              <div className="h-px bg-[rgba(35,89,255,0.2)] w-4/5 max-w-md mx-auto mb-4" />
            )}
          </React.Fragment>
        ))}
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-10 gap-4"> {/* Increased top margin */}
          {onPrev && (
            <button onClick={onPrev} className="keyboard-button">
              <span className="relative z-10 tracking-widest">PREVIOUS</span>
              <div className="keyboard-texture"></div>
              <div className="button-particles"></div>
            </button>
          )}
          
          <button onClick={onNext} className="keyboard-button">
            <span className="relative z-10 tracking-widest">{isLast ? 'SEE RESULTS' : 'NEXT'}</span>
            <div className="keyboard-texture"></div>
            <div className="button-particles"></div>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
