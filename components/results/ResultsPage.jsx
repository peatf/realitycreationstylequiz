// components/results/ResultsPage.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import { createShareableUrl, generateShareText } from '@/lib/utils';
import { scoreToPercentage } from '@/lib/scoring';
import ShareButtons from './ShareButtons';
import { getAllDimensions } from '@/data/dimensions';
import DimensionCarousel from './DimensionCarousel';

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
          <h1 className="results-title gradient-text">
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

        {/* Summary Section - Displayed first */}
        {profileResult && (
          <div className="profile-card mb-8">
            <h2 className="results-subtitle gradient-text">
              Your Overall Style: {profileResult.name}
            </h2>
            <p className="results-text">
              {profileResult.description}
            </p>
            
            {/* Add celebrate and support lists in columns if they exist */}
            {(profileResult.celebrate || profileResult.support) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {profileResult.celebrate && (
                  <div>
                    <h3 className="text-base font-light mb-3 text-center text-[#2359FF]">
                      Things to Celebrate
                    </h3>
                    <ul className="space-y-2">
                      {profileResult.celebrate.map((item, index) => (
                        <li 
                          key={index}
                          className="p-3 rounded-xl text-sm"
                          style={{
                            background: "rgba(235,240,180,0.3)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            border: "1px solid rgba(220,255,200,0.4)",
                            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(193,191,132,0.2)",
                            color: "#2359FF"
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {profileResult.support && (
                  <div>
                    <h3 className="text-base font-light mb-3 text-center text-[#2359FF]">
                      What Will Support Your Process
                    </h3>
                    <ul className="space-y-2">
                      {profileResult.support.map((item, index) => (
                        <li 
                          key={index}
                          className="p-3 rounded-xl text-sm"
                          style={{
                            background: "rgba(220,230,255,0.2)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(35,89,255,0.1)",
                            color: "#2359FF"
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        {/* Section title for dimension details */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-light text-[#2359FF]">
            Your Dimension Details
          </h2>
          <p className="text-sm text-[#2359FF] mt-1">
            Swipe or use arrows to navigate between dimensions
          </p>
        </div>
        
        {/* Dimension Carousel - replaces the stacked dimension charts */}
        <DimensionCarousel 
          dimensions={dimensions}
          dimensionStates={dimensionStates}
          dimensionPercentages={dimensionPercentages}
        />
        
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
