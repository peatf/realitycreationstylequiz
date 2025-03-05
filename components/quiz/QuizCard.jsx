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
    <div className="bg-transparent w-full">
      <div className="relative z-10">
        {/* Multiple Questions */}
        {currentQuestions.map((question, index) => (
          <React.Fragment key={question.id}>
            <div className="mb-6 text-center">
              {/* Question box with inset styling */}
              <div
                className="p-4 mb-2 mx-auto w-full max-w-md overflow-hidden relative inset-question-card"
                style={{
                  background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
                  borderRadius: "28px",
                  position: "relative",
                  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
                }}
              >
                {/* Inset shadow for debossed effect */}
                <div 
                  className="absolute inset-0 rounded-[28px]"
                  style={{
                    boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
                    pointerEvents: "none",
                    zIndex: 1
                  }}
                ></div>
                
                {/* Depression edge highlights */}
                <div 
                  className="absolute inset-1 rounded-[26px]"
                  style={{
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                    pointerEvents: "none",
                    zIndex: 2
                  }}
                ></div>
                
                <p className="text-center text-xs tracking-wide leading-tight relative z-10" style={{
                  color: "#2359FF"
                }}>
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
            
            {/* Add divider between questions except for the last one */}
            {index < currentQuestions.length - 1 && (
              <div className="h-px bg-[rgba(35,89,255,0.1)] w-4/5 max-w-md mx-auto mb-4" />
            )}
          </React.Fragment>
        ))}
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-4">
          {onPrev && (
            <button 
              onClick={onPrev} 
              className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide overflow-hidden keyboard-button mr-4"
              style={{
                borderRadius: "76px",
                color: "#2359FF",
                background: "#DBDECE",
                border: "1px solid rgba(193,191,132,0.4)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.2)"
              }}
            >
              <span className="relative z-10 tracking-widest">PREVIOUS</span>
              
              {/* Keyboard texture overlay */}
              <div 
                className="absolute inset-0 keyboard-texture"
                style={{
                  borderRadius: "76px",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(230,230,220,0.05) 100%)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.1)",
                  pointerEvents: "none"
                }}
              ></div>
              
              {/* Button particles */}
              <div className="button-particles"></div>
            </button>
          )}
          
          <button 
            onClick={onNext} 
            className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide overflow-hidden keyboard-button"
            style={{
              borderRadius: "76px",
              color: "#2359FF",
              background: "#DBDECE",
              border: "1px solid rgba(193,191,132,0.4)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.2)"
            }}
          >
            <span className="relative z-10 tracking-widest">{isLast ? 'SEE RESULTS' : 'NEXT'}</span>
            
            {/* Keyboard texture overlay */}
            <div 
              className="absolute inset-0 keyboard-texture"
              style={{
                borderRadius: "76px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(230,230,220,0.05) 100%)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.1)",
                pointerEvents: "none"
              }}
            ></div>
            
            {/* Button particles */}
            <div className="button-particles"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
