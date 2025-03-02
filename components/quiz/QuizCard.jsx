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
    <div className="glassmorphic-card">
      {/* Texture overlay */}
      <div className="texture-overlay" />

      <div className="relative z-10">
        {/* Multiple Questions */}
        {currentQuestions.map((question, index) => (
          <React.Fragment key={question.id}>
            <div className="mb-6 text-center">
              {/* Question box with fixed styling */}
              <div
                style={{
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  borderRadius: '1.5rem',
                  background: "rgba(235,240,180,0.95)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  border: "1px solid rgba(220,255,200,0.6)",
                  boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.5)",
                  maxWidth: '28rem',
                  margin: '0 auto',
                  overflow: 'hidden'
                }}
              >
                <p 
                  className="text-center text-xs tracking-wide leading-tight" 
                  style={{
                    color: "#2359FF",
                    textShadow: "0 0 5px rgba(35,89,255,0.3)"
                  }}
                >
                  {question.text}
                </p>
              </div>
              
              {/* Slider */}
              <QuizSlider
                value={answers[question.id] || 50}
                onChange={(newValue) => handleSliderChange(question.id, question.dimension, newValue)}
                leftLabel={question.leftLabel}
                rightLabel={question.rightLabel}
              />
            </div>
            
            {/* Add divider between questions except for the last one - fixed width */}
            {index < currentQuestions.length - 1 && (
              <div 
                className="mx-auto my-3" 
                style={{ 
                  height: '1px', 
                  background: "rgba(35,89,255,0.2)",
                  width: '90%',
                  maxWidth: '28rem'
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
        
        {/* Navigation buttons */}
        <div className="button-container">
          {onPrev && (
            <button
              onClick={onPrev}
              className="button-glass"
            >
              <span className="relative z-10">PREVIOUS</span>
            </button>
          )}
          
          <button
            onClick={onNext}
            className="button-glass relative overflow-hidden"
          >
            <span className="relative z-10">{isLast ? 'SEE RESULTS' : 'NEXT'}</span>
            <div
              className="button-shine"
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
