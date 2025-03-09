'use client';

import React, { useState, useMemo } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { generateShareText } from '@/lib/utils';
import { scoreToPercentage } from '@/lib/scoring';
import ShareButtons from './ShareButtons';
import { getAllDimensions, getDimensionState } from '@/data/dimensions';
import MasteryInsights from '../mastery-dashboard/MasteryInsights';
import DynamicMasteryDiagram from '../mastery-dashboard/DynamicMasteryDiagram';

const ResultsPage = () => {
  const { 
    dimensionScores, 
    profileResult, 
    restartQuiz, 
    masteryQuizCompleted 
  } = useQuiz();

  // Get dimensions from data/dimensions.js
  const dimensions = getAllDimensions();

  // Convert each dimension's score (1–5) into a percentage (0–100)
  const dimensionPercentages = Object.entries(dimensionScores).reduce((acc, [key, value]) => {
    acc[key] = scoreToPercentage(value);
    return acc;
  }, {});

  // Generate share URL and share text
  const shareUrl = useMemo(
    () => (typeof window !== 'undefined' ? window.location.href : 'https://www.peathefeary.com/realitycreationstyle'),
    []
  );
  const shareText = useMemo(() => generateShareText(profileResult?.name), [profileResult]);

  // Carousel state for Analysis Results section
  const [currentTraitIndex, setCurrentTraitIndex] = useState(0);
  
  // Helper to get trait classification
  const getTraitClassification = (dimension) => {
    const { id } = dimension;
    const value = dimensionPercentages[id] || 50;
    const stateKey = getDimensionState(id, dimensionScores[id]);
    
    if (value < 30) {
      return `You are a ${dimension.leftLabel}, preferring to ${
        id === 'beliefMindset' ? 'critically question new ideas' : 
        id === 'clarityVision' ? 'keep your options open and fluid' :
        id === 'actionOrientation' ? 'contemplate before taking action' :
        id === 'intuitionStrategy' ? 'follow your instincts' :
        'express your emotions dynamically'
      }.`;
    } else if (value > 70) {
      return `You are a ${dimension.rightLabel}, preferring to ${
        id === 'beliefMindset' ? 'embrace possibilities with optimism' : 
        id === 'clarityVision' ? 'maintain clear focus on your vision' :
        id === 'actionOrientation' ? 'take decisive action quickly' :
        id === 'intuitionStrategy' ? 'plan methodically' :
        'maintain consistent emotional calibration'
      }.`;
    } else {
      return dimension.states[stateKey]?.description.split(".")[0] || "Your approach is balanced in this dimension.";
    }
  };

  // Get trait classification name
  const getTraitClassificationName = (dimension) => {
    const value = dimensionPercentages[dimension.id] || 50;
    const stateKey = getDimensionState(dimension.id, dimensionScores[dimension.id]);
    
    if (value > 70) {
      return dimension.rightLabel;
    } else if (value < 30) {
      return dimension.leftLabel;
    } else {
      return dimension.id === 'beliefMindset' ? 'Balanced Thinker' :
        dimension.id === 'clarityVision' ? 'Adaptive Visioner' :
        dimension.id === 'actionOrientation' ? 'Balanced Actor' :
        dimension.id === 'intuitionStrategy' ? 'Intuitive Strategist' :
        'Emotionally Flexible';
    }
  };

  return (
    <div className="flex items-start justify-center w-full min-h-screen" style={{ background: "transparent" }}>
      {/* Grid background */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: "linear-gradient(#c1bf84 0.5px, transparent 0.5px), linear-gradient(90deg, #c1bf84 0.5px, transparent 0.5px)",
        backgroundSize: "10px 10px",
        opacity: 0.3,
        zIndex: 0,
        display: "none"
      }}></div>
      
      <div className="relative w-full max-w-2xl mx-auto mt-10 mb-10 p-8 z-10">
        {/* Document ID Label */}
        <div className="absolute top-2 right-2 text-xs font-light tracking-widest" style={{ color: "#2359FF" }}>
          PROFILE_RCP-24
        </div>
        
        {/* Title */}
        <div className="text-center mb-6">
          <h1 
            className="text-3xl tracking-widest font-extralight mb-4"
            style={{ 
              color: "#2359FF",
              background: "linear-gradient(90deg, #2359FF, #5283E8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Reality Creation Profile
          </h1>
          <div className="w-20 h-px mx-auto my-2" style={{ background: "rgba(193,191,132,0.5)" }}></div>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#2359FF" }}>
            Personal Assessment
          </p>
        </div>

        {/* Technical specifications line */}
        <div className="flex justify-between items-center py-2 mb-8 border-t border-b border-dashed" style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs font-mono" style={{ color: "#2359FF" }}>01</span>
          <span className="text-sm tracking-widest font-extralight" style={{ color: "#2359FF" }}>FORM_A-24</span>
          <span className="text-xs font-mono" style={{ color: "#2359FF" }}>150mm</span>
        </div>

        {/* Progress indicator */}
        <div className="w-full mb-8">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-light" style={{ color: "#2359FF" }}>Progress</span>
            <span className="text-sm font-light" style={{ color: "#2359FF" }}>Complete</span>
          </div>
          
          {/* Trait indicator showing which one we're viewing */}
          <div className="flex justify-center items-center my-4 text-xs" style={{ color: "#2359FF" }}>
            <span>Trait {currentTraitIndex + 1} of {dimensions.length}</span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden"
               style={{ 
                background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)"
               }}>
            <div 
              className="h-2 rounded-full" 
              style={{ 
                width: "100%", 
                background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))" 
              }}
            ></div>
          </div>
        </div>

        {/* Optional Mastery Section */}
        {masteryQuizCompleted && (
          <>
            <DynamicMasteryDiagram />
            <MasteryInsights />
          </>
        )}

        {/* Trait Measurement Section */}
        <div className="p-6 mb-8 rounded-3xl overflow-hidden relative" 
           style={{
             background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
             boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
           }}>
          {/* Inset shadow for debossed effect */}
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
              pointerEvents: "none",
              zIndex: 1
            }}
          ></div>
          
          <h2 className="text-sm tracking-wide font-light mb-6 flex items-center relative z-10" style={{ color: "#2359FF" }}>
            <span className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs"
                style={{ borderColor: "rgba(193,191,132,0.6)", color: "#2359FF", background: "rgba(255,255,255,0.5)" }}>
              1
            </span>
            Trait Measurements
          </h2>
          
          <div className="space-y-8 relative z-10">
            {dimensions.map((dimension) => {
              const value = dimensionPercentages[dimension.id] || 50;
              
              return (
                <div key={dimension.id} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-light" style={{ color: "#2359FF" }}>{dimension.leftLabel}</span>
                    <span className="text-xs font-light" style={{ color: "#2359FF" }}>{dimension.title}</span>
                    <span className="text-xs font-light" style={{ color: "#2359FF" }}>{dimension.rightLabel}</span>
                  </div>
                  
                  {/* Connection Line with Circle */}
                  <div className="relative h-4 mb-3">
                    <div className="absolute inset-y-0 w-full border-b border-dashed" 
                         style={{ borderColor: "rgba(193,191,132,0.6)" }}></div>
                    
                    {/* Circle at current value */}
                    <div 
                      className="absolute top-1/2 w-4 h-4 rounded-full"
                      style={{ 
                        left: `${value}%`, 
                        transform: 'translate(-50%, -50%)',
                        background: "rgba(255,255,255,0.2)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                        border: "1px solid rgba(255,255,255,0.2)"
                      }}
                    >
                      <div 
                         className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
                         style={{ transform: "translate(-50%, -50%)" }}></div>
                    </div>
                  </div>
                  
                  {/* Classification */}
                  <div className="text-right">
                    <span 
                      className="text-xs inline-block px-2 py-1 rounded-full"
                      style={{ 
                        color: "#2359FF", 
                        background: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(193,191,132,0.4)"
                      }}
                    >
                      {getTraitClassificationName(dimension)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Trait Analysis Cards */}
        <div className="mb-8">
          <h2 className="text-sm tracking-wide font-light mb-4 flex items-center" style={{ color: "#2359FF" }}>
            <span className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs"
                 style={{ borderColor: "rgba(193,191,132,0.6)", color: "#2359FF", background: "rgba(255,255,255,0.5)" }}>
              2
            </span>
            Analysis Results
          </h2>
          
          <div className="relative h-64 mb-6">
            {/* Carousel container */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {/* Current trait card */}
              <div 
                className="p-6 h-full overflow-hidden relative rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
                  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
                }}
              >
                {/* Inset shadow for debossed effect */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
                    pointerEvents: "none",
                    zIndex: 1
                  }}
                ></div>
                
                <div className="flex items-center mb-4 relative z-10">
                  {/* Bitmap Icon */}
                  <div 
                    className="flex items-center justify-center w-12 h-12 mr-4 rounded-sm"
                    style={{ 
                      background: "rgba(255,255,255,0.3)",
                      border: "1px solid rgba(193,191,132,0.4)",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)"
                    }}
                  >
                    <div className="grid grid-cols-5 grid-rows-5 gap-px w-6 h-6">
                      {dimensions[currentTraitIndex]?.bitmap?.flat().map((pixel, index) => (
                        <div 
                          key={index} 
                          className={`w-1 h-1 ${pixel ? 'bg-blue-600' : 'bg-transparent'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium" style={{ color: "#2359FF" }}>
                    {getTraitClassificationName(dimensions[currentTraitIndex])}
                  </h3>
                </div>
                
                <p className="text-sm relative z-10 mb-6" style={{ color: "#2359FF" }}>
                  {getTraitClassification(dimensions[currentTraitIndex])}
                </p>
                
                {/* Trait title and value */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#2359FF" }}>{dimensions[currentTraitIndex].title}</span>
                  <span className="text-xs font-mono" style={{ color: "#2359FF" }}>{dimensionPercentages[dimensions[currentTraitIndex].id]}%</span>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {dimensions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTraitIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTraitIndex === index 
                        ? 'bg-blue-600 w-4' 
                        : 'bg-blue-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Carousel navigation buttons */}
            <button 
              onClick={() => setCurrentTraitIndex(prev => prev === 0 ? dimensions.length - 1 : prev - 1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-8 h-8 rounded-full flex items-center justify-center z-20"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(193,191,132,0.4)"
              }}
              aria-label="Previous trait"
            >
              <div className="w-2 h-2 border-l border-b transform -rotate-45" style={{ borderColor: "#2359FF" }}></div>
            </button>
            
            <button 
              onClick={() => setCurrentTraitIndex(prev => prev === dimensions.length - 1 ? 0 : prev + 1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-8 h-8 rounded-full flex items-center justify-center z-20"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(193,191,132,0.4)"
              }}
              aria-label="Next trait"
            >
              <div className="w-2 h-2 border-r border-t transform rotate-45" style={{ borderColor: "#2359FF" }}></div>
            </button>
          </div>
          
          {/* Overall Style */}
          {profileResult && (
            <div 
              className="p-6 rounded-3xl mb-6 overflow-hidden relative" 
              style={{
                background: "#C5C3B0",
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
              }}
            >
              {/* Inset shadow for debossed effect */}
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
                  pointerEvents: "none",
                  zIndex: 1
                }}
              ></div>
              
              <h3 
                className="text-xl font-thin tracking-widest text-center mb-4 relative z-10"
                style={{ 
                  color: "#2359FF"
                }}
              >
                Your Overall Style: {profileResult.name}
              </h3>
              <p className="text-sm text-center relative z-10" style={{ color: "#2359FF" }}>
                {profileResult.description || "You are an action-oriented creator who blends vision with belief, taking decisive steps toward making your reality a reflection of your desires."}
              </p>
              
              {/* Connector lines design element */}
              <div className="mt-6 flex justify-center w-full relative z-10">
                <div className="w-2/3 flex justify-around">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-px h-6" style={{ background: "rgba(193,191,132,0.6)" }}></div>
                      <div 
                        className="w-3 h-3 rounded-full mt-1"
                        style={{ 
                          background: "rgba(255,255,255,0.2)",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                          border: "1px solid rgba(255,255,255,0.2)"
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Share Section */}
        <div className="mb-8">
          <h3 className="text-xl font-thin tracking-widest text-center mb-4 relative z-10" style={{ color: "#2359FF" }}>
            Share Your Results
          </h3>
          <div 
            className="p-6 rounded-3xl mb-6 overflow-hidden relative max-w-md mx-auto" 
            style={{
              background: "linear-gradient(135deg, rgba(235,240,180,0.65) 0%, rgba(245,250,190,0.85) 50%, rgba(235,240,180,0.75) 100%)",
              boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.3), 0 0 10px rgba(193,191,132,0.3)"
            }}
          >
            {/* Inset shadow for debossed effect */}
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)",
                pointerEvents: "none",
                zIndex: 1
              }}
            ></div>
            
            <p className="text-sm italic mb-2 relative z-10" style={{ color: "#2359FF" }}>
              "{shareText}"
            </p>
            <div className="text-xs opacity-70 truncate relative z-10" style={{ color: "#2359FF" }}>
              {shareUrl}
            </div>
          </div>
          <div className="flex justify-center">
            <ShareButtons
              profileName={profileResult?.name}
              dimensionScores={dimensionScores}
              profileId={profileResult?.id}
              shareUrl={shareUrl}
              shareText={shareText}
            />
          </div>
        </div>
        
        {/* Restart Button */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={restartQuiz} 
            className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide overflow-hidden"
            style={{
              borderRadius: "76px",
              color: "#2359FF",
              background: "#DBDECE",
              border: "1px solid rgba(193,191,132,0.4)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.2)"
            }}
          >
            <span className="relative z-10 tracking-widest">TAKE QUIZ AGAIN</span>
            
            {/* Button texture overlay */}
            <div 
              className="absolute inset-0"
              style={{
                borderRadius: "76px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(230,230,220,0.05) 100%)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.1)",
                pointerEvents: "none"
              }}
            ></div>
          </button>
        </div>
        
        {/* Footer with technical info */}
        <div className="mt-10 pt-2 border-t border-dashed flex justify-between items-center" 
            style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs" style={{ color: "#2359FF" }}>REV 2024-03</span>
          <span className="text-xs" style={{ color: "#2359FF" }}>ANALYSIS COMPLETE</span>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style>{`
        @keyframes pulse {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;
