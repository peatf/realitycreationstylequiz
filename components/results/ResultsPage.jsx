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
        <div className="text-center mb-4">
          <h1 
            className="text-3xl tracking-widest font-extralight mb-6"
            style={{ 
              color: "#2359FF",
              background: "linear-gradient(90deg, #2359FF, #5283E8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
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
          <div className="w-full max-w-md mx-auto">
            <div
              className="h-2 mx-auto rounded-full"
              style={{
                background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                boxShadow: "0 0 10px rgba(193,191,132,0.3), inset 0 1px 3px rgba(0,0,0,0.1)"
              }}
            >
              <div 
                className="h-full rounded-full"
                style={{
                  width: '100%',
                  background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))"
                }}
              />
            </div>
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
                      width: `${dimensionPercentages[dimension.id] || 50}%`,
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
                    left: `${dimensionPercentages[dimension.id] || 50}%`,
                    transform: "translate(-50%, -50%)",
                    background: "rgba(255,255,255,0.2)",
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

{/* For ResultsPage.jsx - Update the trait description cards section */}
{/* Trait Description Cards - Always Two Columns */}
<div className="grid-container dimension-cards mb-8">
  {dimensions.map((dimension) => (
    <div 
      key={dimension.id}
      className="dimension-card p-4 rounded-[28px]"
      style={{
        background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
        borderRadius: "28px",
        position: "relative",
        boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
      }}
    >
      {/* Inset shadow for debossed effect */}
      <div 
        className="absolute inset-0 rounded-[28px]"
        style={{
          boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
          pointerEvents: "none",
          zIndex: 1
        }}
      ></div>
      
      {/* Depression edge highlights */}
      <div 
        className="absolute inset-1 rounded-[26px]"
        style={{
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
          pointerEvents: "none",
          zIndex: 2
        }}
      ></div>
      
      <h3 className="font-light text-base mb-2 relative z-10" style={{ color: "#2359FF" }}>
        {dimension.title}: <span className="font-normal">{dimension.states[dimensionStates[dimension.id]]?.name || 'Balanced'}</span>
      </h3>
      
      <p className="text-sm relative z-10 mb-3" style={{ color: "#2359FF" }}>
        {dimension.states[dimensionStates[dimension.id]]?.description || 'Your approach is balanced in this dimension.'}
      </p>
      
      {/* Only show these sections if they exist */}
      {dimension.states[dimensionStates[dimension.id]]?.frameworks && (
        <div className="mt-3 relative z-10">
          <h4 className="text-sm font-semibold" style={{ color: "#2359FF" }}>Frameworks you may be interested in:</h4>
          <p className="text-xs mt-1" style={{ color: "#2359FF" }}>
            {dimension.states[dimensionStates[dimension.id]].frameworks}
          </p>
        </div>
      )}
      
      {dimension.states[dimensionStates[dimension.id]]?.practices && (
        <div className="mt-3 relative z-10">
          <h4 className="text-sm font-semibold" style={{ color: "#2359FF" }}>Practices you may be interested in:</h4>
          <p className="text-xs mt-1" style={{ color: "#2359FF" }}>
            {dimension.states[dimensionStates[dimension.id]].practices}
          </p>
        </div>
      )}
      
      {dimension.states[dimensionStates[dimension.id]]?.tools && (
        <div className="mt-3 relative z-10">
          <h4 className="text-sm font-semibold" style={{ color: "#2359FF" }}>Tools you may be interested in:</h4>
          <p className="text-xs mt-1" style={{ color: "#2359FF" }}>
            {dimension.states[dimensionStates[dimension.id]].tools}
          </p>
        </div>
      )}
    </div>
  ))}
</div>

        {/* Summary Section */}
        {profileResult && (
          <div 
            className="p-6 rounded-[28px] mb-6 mx-auto w-full"
            style={{
              background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
              borderRadius: "28px",
              position: "relative",
              boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
            }}
          >
            {/* Inset shadow for debossed effect */}
            <div 
              className="absolute inset-0 rounded-[28px]"
              style={{
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
                pointerEvents: "none",
                zIndex: 1
              }}
            ></div>
            
            {/* Depression edge highlights */}
            <div 
              className="absolute inset-1 rounded-[26px]"
              style={{
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                pointerEvents: "none",
                zIndex: 2
              }}
            ></div>
            
            <h2 
              className="text-xl font-thin tracking-widest text-center mb-4 relative z-10"
              style={{ 
                color: "#2359FF",
                background: "linear-gradient(90deg, #2359FF, #5283E8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Your Overall Style: {profileResult.name}
            </h2>
            <p className="text-sm text-center relative z-10" style={{ color: "#2359FF" }}>
              {profileResult.description}
            </p>
          </div>
        )}

        {/* Share Buttons */}
        <ShareButtons 
          profileName={profileResult?.name}
          dimensionScores={dimensionScores}
          profileId={profileResult?.id}
        />

        {/* Restart button */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={restartQuiz}
            className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide overflow-hidden keyboard-button"
            style={{
              borderRadius: "76px",
              color: "#2359FF",
              background: "#DBDECE",
              border: "1px solid rgba(193,191,132,0.4)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.2)"
            }}
          >
            <span className="relative z-10 tracking-widest uppercase">Take Quiz Again</span>
            
            {/* Keyboard texture overlay */}
            <div 
              className="absolute inset-0 keyboard-texture"
              style={{
                borderRadius: "76px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(230,230,220,0.05) 100%)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.1)",
                pointerEvents: "none"
              }}
            ></div>
            
            {/* Button particles */}
            <div className="button-particles"></div>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
