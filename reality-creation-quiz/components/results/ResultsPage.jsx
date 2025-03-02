// components/results/ResultsPage.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import { createShareableUrl, generateShareText } from '@/lib/utils';
import { scoreToPercentage } from '@/lib/scoring';
import DimensionChart from './DimensionChart';
import ProfileCard from './ProfileCard';
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
    <div className="glassmorphic-card relative">
      {/* Texture overlay */}
      <div className="texture-overlay z-[1]" />
      
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
              Complete!
            </span>
          </div>
          <div className="w-full max-w-md mx-auto">
            <div
              className="h-2 mx-auto rounded-full"
              style={{
                background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
                boxShadow: "0 0 10px rgba(193,191,132,0.3), inset 0 1px 3px rgba(0,0,0,0.1)"
              }}
            ></div>
          </div>
        </div>
        
        {/* Dimension Charts */}
        <div className="space-y-8 mb-8">
          {dimensions.map((dimension) => (
            <DimensionChart
              key={dimension.id}
              dimension={dimension}
              value={dimensionPercentages[dimension.id] || 50}
              state={dimensionStates[dimension.id] || 'balanced'}
            />
          ))}
        </div>
        
        {/* Profile Card */}
        {profileResult && (
          <ProfileCard profile={profileResult} />
        )}
        
        {/* Share Buttons */}
        <ShareButtons url={shareableUrl} text={shareText} />
        
        {/* Restart button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={restartQuiz}
            className="button-glass relative z-10 tracking-widest uppercase"
          >
            <span className="relative z-10">Take Quiz Again</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
