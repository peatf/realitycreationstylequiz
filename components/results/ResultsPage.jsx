// components/results/ResultsPage.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import { createShareableUrl, generateShareText } from '@/lib/utils';
import { scoreToPercentage } from '@/lib/scoring';
import { getAllDimensions } from '@/data/dimensions';
import ShareButtons from './ShareButtons';

const ResultsPage = () => {
  const { dimensionScores, dimensionStates, profileResult, restartQuiz } = useQuiz();
  
  // Get all dimensions
  const dimensions = getAllDimensions();
  
  // Convert dimension scores to percentages for display
  const dimensionPercentages = Object.entries(dimensionScores).reduce((acc, [key, value]) => {
    acc[key] = scoreToPercentage(value);
    return acc;
  }, {});
  
  // Create shareable URL
  const shareableUrl = createShareableUrl(dimensionScores, profileResult?.name);
  
  // Generate share text
  const shareText = generateShareText(profileResult?.name);
  
  return (
    <div className="glassmorphic-card">
      {/* Texture overlay */}
      <div className="texture-overlay"></div>
      
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 
            className="text-3xl tracking-widest font-extralight mb-6 gradient-text"
          >
            Your Reality Creation Profile
          </h1>
        </div>
        
        {/* Progress indicator (completed) */}
        <div className="w-full text-center mb-6">
          <div className="flex justify-center mb-1">
            <span className="text-sm" style={{ color: "#2359FF" }}>
              Step 10/10 - Complete!
            </span>
          </div>
          <div className="progress-bar w-full max-w-md mx-auto">
            <div className="progress-fill" style={{ width: '100%' }}></div>
          </div>
        </div>
        
        {/* Trait Sliders */}
        <div className="space-y-8 mb-8">
          {dimensions.map((dimension) => (
            <div key={dimension.id} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm" style={{ color: "#2359FF" }}>{dimension.leftLabel}</span>
                <span className="text-sm font-light" style={{ color: "#2359FF" }}>{dimension.title}</span>
                <span className="text-sm" style={{ color: "#2359FF" }}>{dimension.rightLabel}</span>
              </div>
              
              {/* Slider track */}
              <div className="relative h-5 w-full">
                <div
                  className="h-5 rounded-full w-full relative overflow-hidden"
                  style={{
                    background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                    boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
                  }}
                >
                  {/* Filled portion */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${dimensionPercentages[dimension.id]}%`,
                      background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
                    }}
                  ></div>
                  
                  {/* Pulse animation */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      animation: "pulse 3s infinite"
                    }}
                  ></div>
                </div>
                
                {/* Slider thumb */}
                <div
                  className="absolute top-1/2 w-4 h-4 rounded-full"
                  style={{
                    left: `${dimensionPercentages[dimension.id]}%`,
                    transform: "translate(-50%, -50%)",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
                       style={{ transform: "translate(-50%, -50%)" }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trait Description Cards */}
        <div className="space-y-4 mb-8">
          {dimensions.slice(0, 3).map((dimension) => (
            <div 
              key={dimension.id}
              className="p-4 rounded-3xl"
              style={{
                background: "rgba(235,240,180,0.5)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(220,255,200,0.6)",
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)",
              }}
            >
              <h3 className="text-base font-light mb-2" style={{ color: "#2359FF" }}>
                {dimension.title}: <span className="font-normal">
                  {dimension.states[dimensionStates[dimension.id]]?.name || "Balanced"}
                </span>
              </h3>
              <p className="text-sm" style={{ color: "#2359FF" }}>
                {dimension.states[dimensionStates[dimension.id]]?.description || ""}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        {profileResult && (
          <div 
            className="p-6 rounded-3xl mb-6"
            style={{
              background: "rgba(224,224,224,0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "inset 0 2px 5px rgba(0,0,0,0.05), 0 0 10px rgba(255,255,255,0.3)",
            }}
          >
            <h2 
              className="text-xl font-thin tracking-widest text-center mb-4 gradient-text"
            >
              Your Overall Style: {profileResult.name}
            </h2>
            <p className="text-sm text-center" style={{ color: "#2359FF" }}>
              {profileResult.description}
            </p>
          </div>
        )}
        
        {/* Share Buttons */}
        <ShareButtons url={shareableUrl} text={shareText} />
        
        {/* Restart button */}
        <div className="button-container mt-4">
          <button 
            onClick={restartQuiz}
            className="button-glass relative overflow-hidden"
          >
            <span className="relative z-10 tracking-widest">TAKE QUIZ AGAIN</span>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
