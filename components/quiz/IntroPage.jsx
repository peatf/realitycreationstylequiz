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
        
        {/* Summary Section */}
        {profileResult && (
          <div 
            className="profile-card mb-6"
          >
            <h2 
              className="text-xl font-thin tracking-widest text-center mb-4 gradient-text"
            >
              Your Overall Style: {profileResult.name}
            </h2>
            
            <p className="text-sm text-center mb-6" style={{ color: "#2359FF" }}>
              {profileResult.description}
            </p>
            
            {/* Things to Celebrate */}
            <div className="mb-6">
              <h3 
                className="text-base font-light mb-4 text-center"
                style={{ color: "#2359FF" }}
              >
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
            
            {/* What Will Support Your Process */}
            <div>
              <h3 
                className="text-base font-light mb-4 text-center"
                style={{ color: "#2359FF" }}
              >
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
          </div>
        )}
        
        {/* Share Buttons */}
        <ShareButtons url={shareableUrl} text={shareText} />
        
        {/* Restart button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={restartQuiz}
            className="button-glass"
          >
            <span className="relative z-10 tracking-widest uppercase">Take Quiz Again</span>
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

export default ResultsPage;
