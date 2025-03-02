// components/quiz/IntroPage.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';

// Pressed Squares Preloader Component
const PressedSquaresPreloader = () => {
  return (
    <div className="ps-wrapper relative w-[250px] h-[250px] mx-auto my-10">
      {/* Custom shape SVG */}
      <svg className="absolute inset-0 z-[1]" viewBox="0 0 719.81 722.87" aria-hidden="true">
        <path 
          d="M719.81,218.2 C719.81,97.69,622.11,0,501.6,0c-54.77,0-104.83,20.19-143.15,53.52C320.53,21.66,271.61,2.46,218.2,2.46C97.69,2.46,0,100.16,0,220.67c0,54.23,19.79,103.83,52.53,142C19.79,400.83,0,450.44,0,504.67c0,120.51,97.69,218.2,218.2,218.2c54.77,0,104.83-20.19,143.15-53.52c37.93,31.86,86.84,51.06,140.25,51.06c120.51,0,218.2-97.69,218.2-218.2c0-54.23-19.79-103.83-52.53-142c32.74-38.17,52.53-87.77,52.53-142Z" 
          fill="rgba(220, 230, 255, 0.08)"
          filter="drop-shadow(-5px -5px 10px rgba(150, 159, 200, 0.3)) drop-shadow(5px 5px 10px rgba(150, 159, 200, 0.3))"
        />
      </svg>
      
      {/* Shape inner glow */}
      <div 
        className="absolute inset-0 z-[3] opacity-20 bg-white" 
        style={{
          maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 719.81 722.87"><path d="M719.81,218.2C719.81,97.69,622.11,0,501.6,0c-54.77,0-104.83,20.19-143.15,53.52C320.53,21.66,271.61,2.46,218.2,2.46C97.69,2.46,0,100.16,0,220.67c0,54.23,19.79,103.83,52.53,142C19.79,400.83,0,450.44,0,504.67c0,120.51,97.69,218.2,218.2,218.2c54.77,0,104.83-20.19,143.15-53.52c37.93,31.86,86.84,51.06,140.25,51.06c120.51,0,218.2-97.69,218.2-218.2c0-54.23-19.79-103.83-52.53-142c32.74-38.17,52.53-87.77,52.53-142Z"/></svg>')`,
          WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 719.81 722.87"><path d="M719.81,218.2C719.81,97.69,622.11,0,501.6,0c-54.77,0-104.83,20.19-143.15,53.52C320.53,21.66,271.61,2.46,218.2,2.46C97.69,2.46,0,100.16,0,220.67c0,54.23,19.79,103.83,52.53,142C19.79,400.83,0,450.44,0,504.67c0,120.51,97.69,218.2,218.2,218.2c54.77,0,104.83-20.19,143.15-53.52c37.93,31.86,86.84,51.06,140.25,51.06c120.51,0,218.2-97.69,218.2-218.2c0-54.23-19.79-103.83-52.53-142c32.74-38.17,52.53-87.77,52.53-142Z"/></svg>')`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%'
        }}
      />
      
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 z-[2] mix-blend-overlay opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Pressed squares */}
      <div 
        className="absolute top-[50px] left-[50px] w-[40px] h-[40px] rounded-xl z-[4] bg-[rgba(220,230,255,0.08)] border border-[rgba(255,255,255,0.1)]"
        style={{
          boxShadow: 'inset -4px -4px 7px rgba(255, 255, 255, 0.8), inset 4px 4px 8px rgba(150, 159, 200, 0.3)',
          animation: 'move1 15s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-[50px] right-[50px] w-[40px] h-[40px] rounded-xl z-[4] bg-[rgba(220,230,255,0.08)] border border-[rgba(255,255,255,0.1)]"
        style={{
          boxShadow: 'inset -4px -4px 7px rgba(255, 255, 255, 0.8), inset 4px 4px 8px rgba(150, 159, 200, 0.3)',
          animation: 'move2 15s ease-in-out infinite 3.75s'
        }}
      />
      <div 
        className="absolute bottom-[50px] left-[50px] w-[40px] h-[40px] rounded-xl z-[4] bg-[rgba(220,230,255,0.08)] border border-[rgba(255,255,255,0.1)]"
        style={{
          boxShadow: 'inset -4px -4px 7px rgba(255, 255, 255, 0.8), inset 4px 4px 8px rgba(150, 159, 200, 0.3)',
          animation: 'move3 15s ease-in-out infinite 7.5s'
        }}
      />
      <div 
        className="absolute bottom-[50px] right-[50px] w-[40px] h-[40px] rounded-xl z-[4] bg-[rgba(220,230,255,0.08)] border border-[rgba(255,255,255,0.1)]"
        style={{
          boxShadow: 'inset -4px -4px 7px rgba(255, 255, 255, 0.8), inset 4px 4px 8px rgba(150, 159, 200, 0.3)',
          animation: 'move4 15s ease-in-out infinite 11.25s'
        }}
      />
    </div>
  );
};

const IntroPage = () => {
  const { startQuiz } = useQuiz();
  
  return (
    <div className="glassmorphic-card relative">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-2xl blur-3xl opacity-50"
        style={{
          background: "rgba(255, 182, 193, 0.4)",
          zIndex: 0,
        }}
      />
      
      {/* Texture overlay */}
      <div className="texture-overlay z-[1]" />
      
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
        <div className="p-4 mb-6 rounded-3xl mx-auto text-[#2359FF] text-sm max-h-[250px] overflow-y-auto"
          style={{
            background: "rgba(235, 240, 180, 0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(220, 255, 200, 0.6)",
            boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(193, 191, 132, 0.3)",
          }}
        >
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
        <div 
          className="p-4 mb-6 rounded-3xl mx-auto text-[#2359FF] text-sm"
          style={{
            background: "rgba(235, 240, 180, 0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(220, 255, 200, 0.6)",
            boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(193, 191, 132, 0.3)",
          }}
        >
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
        <div className="flex justify-center mt-6">
          <button 
            onClick={startQuiz}
            className="button-glass relative z-10 tracking-widest uppercase"
          >
            <span className="relative z-10">Begin Assessment</span>
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

export default IntroPage;
