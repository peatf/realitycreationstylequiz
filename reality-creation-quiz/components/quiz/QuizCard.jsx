// components/quiz/QuizCard.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import QuizSlider from './QuizSlider';

const QuizCard = ({ question, onNext, onPrev, isLast, value }) => {
  const { updateAnswer } = useQuiz();
  
  // Handle slider change
  const handleSliderChange = (newValue) => {
    if (question) {
      updateAnswer(question.id, question.dimension, newValue);
    }
  };
  
  if (!question) return null;
  
  return (
    <div className="glassmorphic-card relative">
      {/* Texture overlay */}
      <div className="texture-overlay z-[1]" />
      
      <div className="relative z-10">
        {/* Question */}
        <div className="mb-6 text-center">
          <div className="question-box">
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
            value={value}
            onChange={handleSliderChange}
            leftLabel={question.leftLabel}
            rightLabel={question.rightLabel}
          />
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {onPrev ? (
            <button
              onClick={onPrev}
              className="button-glass relative z-10 tracking-widest uppercase"
            >
              <span className="relative z-10">Previous</span>
            </button>
          ) : (
            <div></div> // Empty div to maintain flex spacing
          )}
          
          <button
            onClick={onNext}
            className="button-glass relative z-10 tracking-widest uppercase"
          >
            <span className="relative z-10">{isLast ? 'See Results' : 'Next'}</span>
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                transform: "translateX(-100%)",
                animation: "buttonShine 4s infinite"
              }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
