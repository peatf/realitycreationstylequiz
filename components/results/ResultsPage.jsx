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
          <div className="flex justify-center mb-1">
            <span className="text-sm text-[#2359FF]">
              Step 10/10 - Complete!
            </span>
          </div>
          <div className="w-full max-w-md mx-auto">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Trait Sliders/Charts */}
        <div className="mb-8">
          {dimensions.map((dimension) => (
            <div key={dimension.id} className="mb-4">
              {/* Dimension labels */}
              <div className="flex justify-between mb-1 px-2">
                <span className="text-sm text-[#2359FF]">{dimension.leftLabel}</span>
                <span className="text-sm font-light text-[#2359FF]">{dimension.title}</span>
                <span className="text-sm text-[#2359FF]">{dimension.rightLabel}</span>
              </div>
              
              {/* Slider track */}
              <div className="relative h-5 w-full">
                <div className="slider-track">
                  {/* Filled portion */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${dimensionPercentages[dimension.id] || 50}%`,
                      background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))"
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
                    className="slider-thumb"
                    style={{ left: `${dimensionPercentages[dimension.id] || 50}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
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
              className="dimension-description"
            >
              <h3 className="text-base font-light mb-2 text-[#2359FF]">
                {dimension.title}: <span className="font-normal">
                  {dimension.states[dimensionStates[dimension.id]]?.name || 'Balanced'}
                </span>
              </h3>
              <p className="text-sm text-[#2359FF]">
                {dimension.states[dimensionStates[dimension.id]]?.description || 'Your approach is balanced in this dimension.'}
              </p>
              
              {/* Show frameworks, practices, and tools if they exist */}
              {dimension.states[dimensionStates[dimension.id]]?.frameworks && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[#2359FF]">Frameworks you may be interested in:</h4>
                  <p className="text-xs mt-1 text-[#2359FF]">
                    {dimension.states[dimensionStates[dimension.id]].frameworks}
                  </p>
                </div>
              )}
              
              {dimension.states[dimensionStates[dimension.id]]?.practices && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[#2359FF]">Practices you may be interested in:</h4>
                  <p className="text-xs mt-1 text-[#2359FF]">
                    {dimension.states[dimensionStates[dimension.id]].practices}
                  </p>
                </div>
              )}
              
              {dimension.states[dimensionStates[dimension.id]]?.tools && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[#2359FF]">Tools you may be interested in:</h4>
                  <p className="text-xs mt-1 text-[#2359FF]">
                    {dimension.states[dimensionStates[dimension.id]].tools}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        {profileResult && (
          <div className="profile-card mb-6">
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
        <div className="flex justify-center mt-6">
          <button 
            onClick={restartQuiz}
            className="keyboard-button"
          >
            <span className="relative z-10">TAKE QUIZ AGAIN</span>
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
