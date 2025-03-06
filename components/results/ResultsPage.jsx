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
        
        {/* Trait Sliders/Charts */}
        <div className="mb-8 space-y-4">
          {dimensions.map((dimension) => (
            <div key={dimension.id} className="mb-6">
              {/* Dimension labels */}
              <div className="flex justify-between mb-2 px-2">
                <span className="text-sm text-[#2359FF]">{dimension.leftLabel}</span>
                <span className="text-sm font-light text-[#2359FF]">{dimension.title}</span>
                <span className="text-sm text-[#2359FF]">{dimension.rightLabel}</span>
              </div>
              
              {/* Slider track - Fixed with inline styles to ensure it works */}
              <div className="relative h-5 w-full">
                <div 
                  style={{
                    height: '20px',
                    borderRadius: '9999px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                    boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
                  }}
                >
                  {/* Filled portion */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      borderRadius: '9999px',
                      width: `${dimensionPercentages[dimension.id] || 50}%`,
                      background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))"
                    }}
                  ></div>
                  
                  {/* Pulse animation */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.2,
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      animation: "pulse 3s infinite"
                    }}
                  ></div>
                </div>
                
                {/* Slider thumb - Forced to display with !important inline styles */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: `${dimensionPercentages[dimension.id] || 50}%`,
                    width: '16px',
                    height: '16px',
                    borderRadius: '9999px',
                    transform: "translate(-50%, -50%)",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    zIndex: 20,
                    display: 'block !important'
                  }}
                >
                  {/* Visible inner dot */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '4px',
                      height: '4px',
                      borderRadius: '9999px',
                      background: 'white',
                      opacity: 0.6,
                      transform: "translate(-50%, -50%)",
                      display: 'block !important'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary Section */}
        {profileResult && (
          <div className="profile-card mb-8">
            <h2 className="results-subtitle gradient-text">
              Your Overall Style: {profileResult.name}
            </h2>
            <p className="results-text">
              {profileResult.description}
            </p>
          </div>
        )}
        
        {/* NEW: Dimension Carousel (replacing the stacked columns) */}
        <div className="mb-8">
          <DimensionCarousel 
            dimensions={dimensions}
            dimensionStates={dimensionStates}
            dimensionPercentages={dimensionPercentages}
          />
        </div>
        
        {/* Summary Section Part 2 (celebrate and support lists) */}
        {profileResult && (profileResult.celebrate || profileResult.support) && (
          <div className="profile-card mb-8">
            {/* Add celebrate and support lists in columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
