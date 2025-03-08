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
    dimensionStates, 
    profileResult, 
    restartQuiz, 
    masteryQuizCompleted 
  } = useQuiz();
  
  // Get dimensions from data/dimensions.js
  const dimensions = getAllDimensions();

  // Convert each dimension's score (1–5) into a percentage (0–100) for positioning
  const dimensionPercentages = Object.entries(dimensionScores).reduce((acc, [key, value]) => {
    acc[key] = scoreToPercentage(value);
    return acc;
  }, {});

  // Generate share URL and share text
  const shareUrl = useMemo(() => (
    typeof window !== 'undefined' ? window.location.href : 'https://www.peathefeary.com/realitycreationstyle'
  ), []);
  const shareText = useMemo(() => generateShareText(profileResult?.name), [profileResult]);

  // Carousel state for Analysis Results section
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % dimensions.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + dimensions.length) % dimensions.length);

  // Render a bitmap icon for a given dimension using Tailwind's grid utilities
  const renderBitmapIcon = (dimension) => {
    const pixels = dimension.bitmap || [];
    return (
      <div className="grid grid-cols-5 grid-rows-5 gap-px w-6 h-6">
        {pixels.flat().map((pixel, idx) => (
          <div
            key={idx}
            className={`w-1 h-1 ${pixel ? 'bg-blue-600' : 'bg-transparent'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-start justify-center w-full min-h-screen bg-transparent">
      {/* Grid background - with transparent background */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: "linear-gradient(#c1bf84 0.5px, transparent 0.5px), linear-gradient(90deg, #c1bf84 0.5px, transparent 0.5px)",
        backgroundSize: "10px 10px",
        opacity: 0.3,
        zIndex: 0 
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
            Your Reality Creation Profile
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
          <span className="text-xs font-mono" style={{ color: "#2359FF" }}>100%</span>
        </div>

        {/* Progress indicator */}
        <div className="w-full mb-8">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-light" style={{ color: "#2359FF" }}>Progress</span>
            <span className="text-sm font-light" style={{ color: "#2359FF" }}>Complete</span>
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

        {/* Trait Measurement Section - with transparency */}
        <div className="p-6 mb-8 rounded-3xl overflow-hidden relative" 
           style={{
             background: "linear-gradient(135deg, rgba(235,240,180,0.25) 0%, rgba(245,250,190,0.35) 50%, rgba(235,240,180,0.25) 100%)",
             boxShadow: "inset 0 2px 6px rgba(0,0,0,0.1), inset 0 -1px 2px rgba(255,255,255,0.2), 0 0 10px rgba(193,191,132,0.1)"
           }}>
          {/* Inset shadow for debossed effect */}
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              boxShadow: "inset 0 2px 5px rgba(0,0,0,0.08), inset 0 -1px 2px rgba(255,255,255,0.1)",
              pointerEvents: "none",
              zIndex: 1
            }}
          ></div>
          
          <h2 className="text-sm tracking-wide font-light mb-6 flex items-center relative z-10" style={{ color: "#2359FF" }}>
            <span className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs"
                style={{ borderColor: "rgba(193,191,132,0.6)", color: "#2359FF", background: "rgba(255,255,255,0.2)" }}>
              1
            </span>
            Trait Measurements
          </h2>
          
          <div className="space-y-8 relative z-10">
            {dimensions.map((dimension) => {
              const value = dimensionPercentages[dimension.id] || 50;
              const stateKey = getDimensionState(dimension.id, dimensionScores[dimension.id]);
              const classification = dimension.states[stateKey]?.name || 'Balanced';
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
                        background: "rgba(255,255,255,0.1)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05), 0 0 10px rgba(255,255,255,0.2), inset 0 0 4px rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.1)"
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
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(193,191,132,0.4)"
                      }}
                    >
                      {classification}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
       {/* Analysis Results Carousel */}
<div className="mb-8">
  <h2 className="text-sm tracking-wide font-light mb-4 flex items-center" style={{ color: "#2359FF" }}>
    <span
      className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs"
      style={{ borderColor: "rgba(193,191,132,0.6)", color: "#2359FF", background: "rgba(255,255,255,0.2)" }}
    >
      2
    </span>
    Analysis Results
  </h2>
  
  <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
    {/* Carousel inner container as a flex row */}
    <div
      className="flex transition-transform duration-500 h-full"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {dimensions.map((dimension) => {
        const value = dimensionPercentages[dimension.id] || 50;
        const stateKey = getDimensionState(dimension.id, dimensionScores[dimension.id]);
        const classification = dimension.states[stateKey]?.name || 'Balanced';
        const description = dimension.states[stateKey]?.description || 'Your approach is balanced in this dimension.';
        return (
          <div key={dimension.id} className="w-full flex-shrink-0">
            <div className="p-6 h-full overflow-hidden relative rounded-2xl"
                 style={{
                   background: "linear-gradient(135deg, rgba(235,240,180,0.25) 0%, rgba(245,250,190,0.35) 50%, rgba(235,240,180,0.25) 100%)",
                   boxShadow: "inset 0 2px 6px rgba(0,0,0,0.1), inset 0 -1px 2px rgba(255,255,255,0.2), 0 0 10px rgba(193,191,132,0.1)"
                 }}>
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: "inset 0 2px 5px rgba(0,0,0,0.08), inset 0 -1px 2px rgba(255,255,255,0.1)",
                  pointerEvents: "none"
                }}
              />
              <div className="flex items-center mb-4 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-sm" 
                     style={{
                       background: "rgba(255,255,255,0.15)",
                       border: "1px solid rgba(193,191,132,0.4)",
                       boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)"
                     }}>
                  {renderBitmapIcon(dimension)}
                </div>
                <h3 className="text-lg font-medium" style={{ color: "#2359FF" }}>{classification}</h3>
              </div>
              <p className="text-sm relative z-10 mb-6" style={{ color: "#2359FF" }}>{description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs" style={{ color: "#2359FF" }}>{dimension.title}</span>
                <span className="text-xs font-mono" style={{ color: "#2359FF" }}>{value}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    
    {/* Navigation Dots */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
      {dimensions.map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeIndex === i ? 'bg-blue-600 w-4' : 'bg-blue-300'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
    
    {/* Carousel Navigation Buttons */}
    <button
      onClick={prevSlide}
      className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 rounded-full flex items-center justify-center z-20"
      style={{
        background: "rgba(255,255,255,0.2)",
        border: "1px solid rgba(193,191,132,0.4)"
      }}
      aria-label="Previous dimension"
    >
      <div className="w-2 h-2 border-l border-b -rotate-45" style={{ borderColor: "#2359FF" }} />
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 rounded-full flex items-center justify-center z-20"
      style={{
        background: "rgba(255,255,255,0.2)",
        border: "1px solid rgba(193,191,132,0.4)"
      }}
      aria-label="Next dimension"
    >
      <div className="w-2 h-2 border-r border-t rotate-45" style={{ borderColor: "#2359FF" }} />
    </button>
  </div>
</div>

        
        {/* Overall Style - with transparency */}
        {profileResult && (
          <div className="p-6 rounded-3xl mb-6 overflow-hidden relative" 
               style={{
                 background: "linear-gradient(135deg, rgba(235,240,180,0.25) 0%, rgba(245,250,190,0.35) 50%, rgba(235,240,180,0.25) 100%)",
                 boxShadow: "inset 0 2px 6px rgba(0,0,0,0.1), inset 0 -1px 2px rgba(255,255,255,0.2), 0 0 10px rgba(193,191,132,0.1)"
               }}>
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.08), inset 0 -1px 2px rgba(255,255,255,0.1)",
                pointerEvents: "none",
                zIndex: 1
              }}
            ></div>
            
            <h3 
              className="text-xl font-thin tracking-widest text-center mb-4 relative z-10"
              style={{ 
                color: "#2359FF",
                background: "linear-gradient(90deg, #2359FF, #5283E8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Your Overall Style: {profileResult.name}
            </h3>
            <p className="text-sm text-center mb-6 relative z-10" style={{ color: "#2359FF" }}>
              {profileResult.description}
            </p>
            
            {(profileResult.celebrate || profileResult.support) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 relative z-10">
                {profileResult.celebrate && (
                  <div>
                    <h4 className="text-base font-light mb-3 text-center" style={{ color: "#2359FF" }}>
                      Things to Celebrate
                    </h4>
                    <ul className="space-y-2">
                      {profileResult.celebrate.map((item, index) => (
                        <li
                          key={index}
                          className="p-3 rounded-xl text-sm"
                          style={{
                            color: "#2359FF",
                            background: "rgba(235,240,180,0.15)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            border: "1px solid rgba(220,255,200,0.2)",
                            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(193,191,132,0.1)"
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
                    <h4 className="text-base font-light mb-3 text-center" style={{ color: "#2359FF" }}>
                      What Will Support You
                    </h4>
                    <ul className="space-y-2">
                      {profileResult.support.map((item, index) => (
                        <li
                          key={index}
                          className="p-3 rounded-xl text-sm"
                          style={{
                            color: "#2359FF",
                            background: "rgba(220,230,255,0.15)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(35,89,255,0.05)"
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
            
            {/* Connector lines design element */}
            <div className="mt-6 flex justify-center w-full relative z-10">
              <div className="w-2/3 flex justify-around">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-px h-6" style={{ background: "rgba(193,191,132,0.6)" }}></div>
                    <div 
                      className="w-3 h-3 rounded-full mt-1"
                      style={{ 
                        background: "rgba(255,255,255,0.1)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05), 0 0 10px rgba(255,255,255,0.2), inset 0 0 4px rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Share Section */}
        <div className="mb-8">
          <h3 className="text-xl font-light mb-5 text-center" style={{ color: "#2359FF" }}>
            Share Your Results
          </h3>
          <div className="w-full max-w-md p-4 mx-auto mb-6 rounded-xl relative overflow-hidden"
               style={{
                 background: "rgba(255,255,255,0.15)",
                 backdropFilter: "blur(4px)",
                 WebkitBackdropFilter: "blur(4px)",
                 border: "1px solid rgba(193,191,132,0.3)",
                 boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(193,191,132,0.1)"
               }}>
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.05), inset 0 -1px 2px rgba(255,255,255,0.1)",
                pointerEvents: "none"
              }}
            ></div>
            <p className="text-sm italic mb-2 relative z-10" style={{ color: "#2359FF" }}>"{shareText}"</p>
            <div className="text-xs opacity-70 truncate relative z-10" style={{ color: "#2359FF" }}>{shareUrl}</div>
          </div>
          
          <div className="flex justify-center relative z-10">
            <ShareButtons
              profileName={profileResult?.name}
              dimensionScores={dimensionScores}
              profileId={profileResult?.id}
              shareUrl={shareUrl}
              shareText={shareText}
            />
          </div>
        </div>
        
        {/* Restart Button - with transparency */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={restartQuiz}
            className="relative px-8 py-2 transition-all duration-300 text-xs tracking-wide overflow-hidden"
            style={{
              borderRadius: "76px",
              color: "#2359FF",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(193,191,132,0.4)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.1)"
            }}
          >
            <span className="relative z-10 tracking-widest">TAKE QUIZ AGAIN</span>
            
            {/* Button texture overlay */}
            <div 
              className="absolute inset-0"
              style={{
                borderRadius: "76px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(230,230,220,0.02) 100%)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.05)",
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
