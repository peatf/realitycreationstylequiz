// components/results/ResultsPage.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import { createShareableUrl, generateShareText } from '@/lib/utils';
import { scoreToPercentage } from '@/lib/scoring';
import ShareButtons from './ShareButtons';
import { getAllDimensions } from '@/data/dimensions';

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
    <div className="bg-transparent p-6 rounded-3xl w-full">
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-thin tracking-widest mb-6 gradient-text">
            Your Reality Creation Profile
          </h1>
        </div>
        
        {/* Progress indicator (completed) */}
        <div className="text-center mb-8">
          <span className="text-sm text-[#2359FF] mb-1 block">
            Step 10/10 - Complete!
          </span>
          <div className="w-full max-w-md mx-auto relative h-2">
            <div className="h-full rounded-full"
              style={{
                background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                boxShadow: "0 0 10px rgba(193, 191, 132, 0.3), inset 0 1px 3px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div 
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ 
                  width: '100%',
                  background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Trait Sliders/Charts */}
        <div className="mb-8">
          {dimensions.map((dimension) => (
            <div key={dimension.id} className="mb-6">
              {/* Dimension labels with left/right labels and title in center */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#2359FF] w-1/3 text-left">{dimension.leftLabel}</span>
                <span className="text-sm font-light text-[#2359FF] w-1/3 text-center">{dimension.title}</span>
                <span className="text-sm text-[#2359FF] w-1/3 text-right">{dimension.rightLabel}</span>
              </div>
              
              {/* Slider track - inset styling */}
              <div className="relative h-5 w-full">
                <div className="h-5 rounded-full w-full relative overflow-hidden"
                  style={{
                    background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                    boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
                  }}
                >
                  {/* Filled portion */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${dimensionPercentages[dimension.id] || 50}%`,
                      background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))"
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
                  
                  {/* Slider thumb */}
                  <div
                    className="absolute top-1/2 w-4 h-4 rounded-full"
                    style={{
                      left: `${dimensionPercentages[dimension.id] || 50}%`,
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      zIndex: 2
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60" 
                       style={{transform: "translate(-50%, -50%)"}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dimension Description Cards */}
        <div className="mb-8">
          {dimensions.map((dimension) => (
            <div 
              key={dimension.id}
              className="p-4 rounded-[28px] mb-6"
              style={{
                background: "rgba(235,240,180,0.5)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(220,255,200,0.6)",
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)"
              }}
            >
              <h3 className="text-base font-light mb-2 text-[#2359FF]">
                {dimension.title}: <span className="font-normal">
                  {dimension.states[dimensionStates[dimension.id]]?.name || 'Balanced'}
                </span>
              </h3>
              <p className="text-sm text-[#2359FF] mb-3">
                {dimension.states[dimensionStates[dimension.id]]?.description || 'Your approach is balanced in this dimension.'}
              </p>
              
              {/* Show frameworks, practices, and tools if they exist - with proper spacing */}
              {dimension.states[dimensionStates[dimension.id]]?.frameworks && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Frameworks you may be interested in:</h4>
                  <p className="text-xs text-[#2359FF]">
                    {dimension.states[dimensionStates[dimension.id]].frameworks}
                  </p>
                </div>
              )}
              
              {dimension.states[dimensionStates[dimension.id]]?.practices && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Practices you may be interested in:</h4>
                  <p className="text-xs text-[#2359FF]">
                    {dimension.states[dimensionStates[dimension.id]].practices}
                  </p>
                </div>
              )}
              
              {dimension.states[dimensionStates[dimension.id]]?.tools && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Tools you may be interested in:</h4>
                  <p className="text-xs text-[#2359FF]">
                    {dimension.states[dimensionStates[dimension.id]].tools}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        {profileResult && (
          <div className="p-6 rounded-[28px] mb-6"
            style={{
              background: "rgba(235,240,180,0.5)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "1px solid rgba(220,255,200,0.6)",
              boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)"
            }}
          >
            <h2 className="text-xl font-thin tracking-widest text-center mb-4 gradient-text">
              Your Overall Style: {profileResult.name}
            </h2>
            <p className="text-sm text-center text-[#2359FF]">
              {profileResult.description}
            </p>
          </div>
        )}
        
        {/* Share Buttons Section */}
        <ShareButtons 
          profileName={profileResult?.name}
          dimensionScores={dimensionScores}
          profileId={profileResult?.id}
        />
        
        {/* Restart button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={restartQuiz}
            className="keyboard-button"
          >
            <span className="relative z-10 tracking-widest">TAKE QUIZ AGAIN</span>
            <div className="keyboard-texture"></div>
            <div className="button-particles"></div>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
