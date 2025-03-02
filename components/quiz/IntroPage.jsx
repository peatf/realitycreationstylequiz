// components/quiz/IntroPage.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';

// Pressed Squares Preloader Component
const PressedSquaresPreloader = () => {
  return (
    <div className="ps-wrapper">
      {/* Custom shape SVG */}
      <svg className="ps-custom-shape" viewBox="0 0 719.81 722.87" aria-hidden="true">
        <path 
          d="M719.81,218.2 C719.81,97.69,622.11,0,501.6,0c-54.77,0-104.83,20.19-143.15,53.52C320.53,21.66,271.61,2.46,218.2,2.46C97.69,2.46,0,100.16,0,220.67c0,54.23,19.79,103.83,52.53,142C19.79,400.83,0,450.44,0,504.67c0,120.51,97.69,218.2,218.2,218.2c54.77,0,104.83-20.19,143.15-53.52c37.93,31.86,86.84,51.06,140.25,51.06c120.51,0,218.2-97.69,218.2-218.2c0-54.23-19.79-103.83-52.53-142c32.74-38.17,52.53-87.77,52.53-142Z" 
        />
      </svg>
      
      {/* Shape inner glow */}
      <div className="ps-shape-inner-glow"></div>
      <div className="ps-texture-overlay"></div>
      
      {/* Pressed squares */}
      <div className="ps-pressed-square ps-square1"></div>
      <div className="ps-pressed-square ps-square2"></div>
      <div className="ps-pressed-square ps-square3"></div>
      <div className="ps-pressed-square ps-square4"></div>
    </div>
  );
};

const IntroPage = () => {
  const { startQuiz } = useQuiz();
  
  return (
    <div className="glassmorphic-card">
      {/* Texture overlay */}
      <div className="texture-overlay" />
      
      <div className="relative z-10">
        {/* Preloader graphic */}
        <PressedSquaresPreloader />
        
        {/* Title */}
        <h1 
          className="text-3xl md:text-5xl font-light text-center mb-8 gradient-text"
          style={{ fontFamily: "'DotGothic16', monospace" }}
        >
          Reality Creation Style Assessment
        </h1>
        
        {/* Description box */}
        <div className="text-box scrollable">
          <p className="mb-4">
            We know that manifestation or reality creation at its core is simple. You desire something, and you're drawn to the reality where it exists. That's it.
          </p>
          <p className="mb-4">
            Humans, however, the flesh avatar mixed with immaterial spirit, are complex. When it comes to playing the game of life, learning to harmonize the simplicity of the realization process with our human complexity makes the experience that much more enjoyable and fulfilling.
          </p>
          <p className="mb-4">
            I'm assuming that if you're here, you're beyond the point of trying to "use" manifestation as a means to an end or to save you from your life. You know that creating your reality is an ongoing experience, one that never stops as long as you're in the game, and you just want to get better at it.
          </p>
          <p className="mb-4">
            Part of getting better at playing the game is knowing the innate attributes of your character. If you incarnated as a mage but are trying to play as a knight, you're going to have a tough time, especially if everybody and their mother is telling you that you should be a knight and is offering advice on playing the game the way a knight does. The game is more fun when you know the character you're playing.
          </p>
          <p className="mb-4">
            The process of taking this assessment will reveal your current attributes, you don't even need to reach the results page to start noticing them. These attributes naturally evolve and refine over time (as is the beauty of human complexity), but they don't change drastically. They shape how you're designed to play the game.
          </p>
          <p>
            Take this assessment to discover how you are designed to interface with creating your reality.
          </p>
        </div>
        
        {/* Assessment Process & Participation Box */}
        <div className="text-box">
          <h2 className="text-lg font-semibold mb-4">Assessment Process</h2>
          <p className="mb-4">
            This assessment consists of 30 questions across five key dimensions of reality creation. Each question presents a spectrum between two natural tendencies, there are no right or wrong answers, only what feels most like you.
          </p>
          <p className="mb-4">
            For each question, use the slider to indicate where you naturally lean.
          </p>
          <p className="mb-4">
            Once you've completed all questions, your results will be displayed immediately, providing insights into your reality creation style.
          </p>
          
          <h2 className="text-lg font-semibold mb-4">Participation</h2>
          <p className="mb-4">
            This assessment is for self-reflection and exploration. There is no guarantee of accuracy. Your responses will be recorded anonymously, without any personally identifying information.
          </p>
          <p>
            No email sign-up is required.
          </p>
        </div>
        
        {/* Begin button */}
        <div className="button-container">
          <button 
            onClick={startQuiz}
            className="button-glass relative overflow-hidden"
          >
            <span className="relative z-10 tracking-widest uppercase">Begin Assessment</span>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
