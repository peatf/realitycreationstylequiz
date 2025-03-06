// components/results/ResultsPage.jsx
'use client';

import React from 'react';
import { useQuiz } from '@/context/QuizContext';
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

  return (
    <div className="bg-transparent px-4 py-6 rounded-3xl w-full">
      <div className="relative z-10">
        {/* Header with completion status */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-center gradient-text mb-2">
            Your Reality Creation Profile
          </h1>
          <div className="flex items-center gap-2 text-sm text-[#2359FF] mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(35,89,255,0.1)] text-xs">
              ✓
            </span>
            <span>Assessment Complete</span>
          </div>
          <div className="w-full max-w-md mx-auto">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Profile Summary Section */}
        {profileResult && (
          <div className="profile-card mb-10 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-light gradient-text mb-2">
                Your Style: {profileResult.name}
              </h2>
              <p className="text-sm md:text-base text-[#2359FF] max-w-2xl mx-auto">
                {profileResult.description}
              </p>
            </div>
            
            {/* Celebrate and Support Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {profileResult.celebrate && (
                <div className="dimension-description p-5">
                  <h3 className="text-lg font-light mb-4 text-center text-[#2359FF]">
                    Things to Celebrate
                  </h3>
                  <ul className="space-y-3">
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
                <div className="dimension-description p-5">
                  <h3 className="text-lg font-light mb-4 text-center text-[#2359FF]">
                    What Will Support Your Process
                  </h3>
                  <ul className="space-y-3">
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
        
        {/* Dimension Details Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-xl font-light text-[#2359FF] mb-2">
              Your Dimension Details
            </h2>
            <p className="text-sm text-[#2359FF]">
              Explore each dimension of your reality creation style
            </p>
          </div>
          
          {/* The enhanced dimension carousel */}
          <DimensionCarousel 
            dimensions={dimensions}
            dimensionStates={dimensionStates}
            dimensionPercentages={dimensionPercentages}
          />
        </div>
        
        {/* Share Buttons Section */}
        <div className="profile-card py-6 px-4 mb-10">
          <ShareButtons 
            profileName={profileResult?.name}
            dimensionScores={dimensionScores}
            profileId={profileResult?.id}
          />
        </div>
        
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
