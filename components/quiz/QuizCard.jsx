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
    <div 
      className="relative z-10 w-full p-8"
      style={{
        borderRadius: "5rem",
        background: "rgba(220, 230, 255, 0.2)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 10px 40px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.2)",
        animation: "pulseGlow 8s infinite alternate ease-in-out",
      }}
    >
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 rounded-[5rem] mix-blend-overlay"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10">
        {/* Multiple Questions */}
        {currentQuestions.map((question, index) => (
          <React.Fragment key={question.id}>
            <div className="mb-6 text-center">
              <div
                className="p-4 mb-2 rounded-3xl mx-auto w-full max-w-md overflow-hidden"
                style={{
                  background: "rgba(235,240,180,0.95)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  border: "1px solid rgba(220,255,200,0.6)",
                  boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.5)",
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
            
            {/* Add divider between questions except for the last one */}
            {index < currentQuestions.length - 1 && (
              <div className="w-full h-px mx-auto my-3" style={{ background: "rgba(35,89,255,0.2)" }}></div>
            )}
          </React.Fragment>
        ))}
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-4">
          {onPrev && (
            <button
              onClick={onPrev}
              className="px-8 py-2 transition-all duration-300 text-xs tracking-wide relative overflow-hidden mr-4"
              style={{
                borderRadius: "76px",
                color: "#2359FF",
                background: "rgba(224,224,224,0)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "inset 19px 19px 38px rgba(190,190,190,0.3), inset -19px -19px 38px rgba(255,255,255,0.3)"
              }}
            >
              <span className="relative z-10">PREVIOUS</span>
            </button>
          )}
          
          <button
            onClick={onNext}
            className="px-8 py-2 transition-all duration-300 text-xs tracking-wide relative overflow-hidden"
            style={{
              borderRadius: "76px",
              color: "#2359FF",
              background: "rgba(224,224,224,0)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "inset 19px 19px 38px rgba(190,190,190,0.3), inset -19px -19px 38px rgba(255,255,255,0.3)"
            }}
          >
            <span className="relative z-10">{isLast ? 'SEE RESULTS' : 'NEXT'}</span>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transform: "translateX(-100%)",
                animation: "buttonShine 3s infinite"
              }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
