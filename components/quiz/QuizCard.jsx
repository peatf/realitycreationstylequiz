// components/quiz/QuizCard.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
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
    <div className="bg-transparent p-6 rounded-3xl w-full">
      <div className="relative z-10 pt-12 mt-8">
        {/* Multiple Questions */}
        {currentQuestions.map((question, index) => (
          <React.Fragment key={question.id}>
            <div className="mb-12 text-center">
              {/* Question card using styling from example */}
              <div className="question-card w-full max-w-3xl mx-auto mb-6">
                {/* Glassmorphic layers */}
                <div className="glass-layer layer-1"></div>
                <div className="glass-layer layer-2"></div>
                <div className="glass-layer layer-3"></div>
                <div className="edge-highlight"></div>
                
                {/* Question content */}
                <div className="relative z-10 p-6">
                  <p className="question-text text-lg md:text-xl text-center">
                    {question.text}
                  </p>
                </div>
              </div>
              
              {/* Slider - styled according to the provided example */}
              <div className="w-full max-w-3xl mx-auto">
                <div className="relative py-2 w-full max-w-md mx-auto">
                  <div
                    className="h-5 rounded-full w-full relative overflow-hidden"
                    style={{
                      background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                      boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
                    }}
                  >
                    {/* Energy flow effect */}
                    <div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        width: `${answers[question.id] || 50}%`,
                        background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))",
                        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                    ></div>
                    
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        transform: "translateX(-100%)",
                        animation: "pulse 3s infinite"
                      }}
                    ></div>
                  </div>
                  
                  {/* Slider thumb */}
                  <div
                    className="absolute top-1/2 w-6 h-6 rounded-full thumb-glow"
                    style={{
                      left: `${answers[question.id] || 50}%`,
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255,255,255,0.2)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.2)"
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60" style={{ transform: "translate(-50%, -50%)" }}></div>
                  </div>
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={answers[question.id] || 50}
                    onChange={(e) => handleSliderChange(question.id, question.dimension, parseInt(e.target.value, 10))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                </div>

                {/* Answer Options */}
                <div className="flex justify-between mt-2">
                  <div className="text-left w-[45%]">
                    <p className="text-xs whitespace-pre-line text-[#2359FF]">
                      {question.leftLabel}
                    </p>
                  </div>
                  <div className="text-right w-[45%]">
                    <p className="text-xs whitespace-pre-line text-[#2359FF]">
                      {question.rightLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add divider between questions except for the last one */}
            {index < currentQuestions.length - 1 && (
              <div className="h-px bg-[rgba(35,89,255,0.2)] w-4/5 max-w-3xl mx-auto mb-8" />
            )}
          </React.Fragment>
        ))}
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-10 gap-4">
          {onPrev && (
            <button 
              onClick={onPrev} 
              className="keyboard-button"
              type="button"
            >
              <span className="relative z-10 tracking-widest">PREVIOUS</span>
              <div className="keyboard-texture"></div>
              <div className="button-particles"></div>
            </button>
          )}
          
          <button 
            onClick={onNext} 
            className="keyboard-button"
            type="button"
          >
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
