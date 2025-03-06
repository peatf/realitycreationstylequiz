'use client';

import React, { useState } from 'react';
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
  
  // Create shareable URL (used by ShareButtons)
  const shareableUrl = createShareableUrl(dimensionScores, profileResult?.name);
  
  // Generate share text
  const shareText = generateShareText(profileResult?.name);
  
  // State & handlers for dimension carousel (unchanged)
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % dimensions.length);
  };
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + dimensions.length) % dimensions.length);
  };

  return (
    <div className="bg-transparent p-6 rounded-3xl w-full">
      <div className="relative z-10">
        {/* Title (unchanged) */}
        <div className="text-center mb-6">
          <h1 className="results-title gradient-text">
            Your Reality Creation Profile
          </h1>
        </div>
        
        {/* Progress Bar (unchanged) */}
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
        
        {/* TRAIT SLIDERS/CHARTS (UPDATED to match your snippet) */}
        <div className="space-y-8 mb-8">
          {dimensions.map((dimension) => {
            const dimensionValue = dimensionPercentages[dimension.id] || 50;
            return (
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
                        width: `${dimensionValue}%`,
                        background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))",
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
                      left: `${dimensionValue}%`,
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255,255,255,0.2)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.2)"
                    }}
                  >
                    <div
                      className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
                      style={{ transform: "translate(-50%, -50%)" }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* DIMENSION CAROUSEL (unchanged from your updated code) */}
        <div className="mb-8" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {dimensions.map((dimension, index) => (
            <div
              key={dimension.id}
              style={{
                display: index === activeIndex ? 'block' : 'none',
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <div
                className="dimension-description"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '1rem',
                  borderRadius: '28px',
                  background: "rgba(235,240,180,0.5)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  border: "1px solid rgba(220,255,200,0.6)",
                  boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)",
                  marginBottom: '1rem'
                }}
              >
                <h3 className="dimension-title">
                  {dimension.title}:{" "}
                  <span className="dimension-value">
                    {dimension.states[dimensionStates[dimension.id]]?.name || 'Balanced'}
                  </span>
                </h3>
                <p className="dimension-text">
                  {dimension.states[dimensionStates[dimension.id]]?.description ||
                    'Your approach is balanced in this dimension.'}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  {/* Show frameworks, practices, and tools if they exist */}
                  {dimension.states[dimensionStates[dimension.id]]?.frameworks && (
                    <div className="mt-3">
                      <h4 className="section-title">Frameworks you may be interested in:</h4>
                      <p className="section-text">
                        {dimension.states[dimensionStates[dimension.id]].frameworks}
                      </p>
                    </div>
                  )}

                  {dimension.states[dimensionStates[dimension.id]]?.practices && (
                    <div className="mt-3">
                      <h4 className="section-title">Practices you may be interested in:</h4>
                      <p className="section-text">
                        {dimension.states[dimensionStates[dimension.id]].practices}
                      </p>
                    </div>
                  )}

                  {dimension.states[dimensionStates[dimension.id]]?.tools && (
                    <div className="mt-3">
                      <h4 className="section-title">Tools you may be interested in:</h4>
                      <p className="section-text">
                        {dimension.states[dimensionStates[dimension.id]].tools}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-3rem',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              fontSize: '1rem'
            }}
          >
            &lt; Prev
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-3rem',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              fontSize: '1rem'
            }}
          >
            Next &gt;
          </button>
        </div>

        {/* Summary Section (unchanged) */}
        {profileResult && (
          <div className="profile-card mb-8">
            <h2 className="results-subtitle gradient-text">
              Your Overall Style: {profileResult.name}
            </h2>
            <p className="results-text">
              {profileResult.description}
            </p>

            {/* Add celebrate and support lists if they exist */}
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
        
        {/* Share Buttons Section (unchanged) */}
        <ShareButtons 
          profileName={profileResult?.name}
          dimensionScores={dimensionScores}
          profileId={profileResult?.id}
        />
        
        {/* Restart button (unchanged) */}
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

      {/* If you do NOT already define this keyframe globally, include it here: */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;
