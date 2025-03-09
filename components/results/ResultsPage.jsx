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
  const nextSlide = () => setCurrentTraitIndex((prev) => (prev + 1) % dimensions.length);
  const prevSlide = () => setCurrentTraitIndex((prev) => (prev - 1 + dimensions.length) % dimensions.length);

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
      return dimension.states[stateKey]?.description || "Your approach is balanced in this dimension.";
    }
  };

  return (
    <div className="flex items-start justify-center w-full min-h-screen" style={{ background: "transparent" }}>
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      <div className="card-container relative w-full max-w-2xl mx-auto mt-10 mb-10 p-8 z-10">
        {/* Document ID Label */}
        <div className="doc-id-label absolute top-2 right-2 text-xs font-light tracking-widest text-primary">
          PROFILE_RCP-24
        </div>
        
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="results-title gradient-text text-3xl tracking-widest font-extralight mb-4">
            Reality Creation Profile
          </h1>
          <div className="divider w-20 h-px mx-auto my-2"></div>
          <p className="text-xs tracking-widest uppercase text-primary">
            Personal Assessment
          </p>
        </div>

        {/* Technical specifications line */}
        <div className="metadata-line flex justify-between items-center py-2 mb-8 border-t border-b border-dashed border-accent">
          <span className="text-xs font-mono text-primary">01</span>
          <span className="text-sm tracking-widest font-extralight text-primary">FORM_A-24</span>
          <span className="text-xs font-mono text-primary">150mm</span>
        </div>

        {/* Progress indicator */}
        <div className="w-full mb-8">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-light text-primary">Progress</span>
            <span className="text-sm font-light text-primary">Complete</span>
          </div>
          
          {/* Trait indicator showing which one we're viewing */}
          <div className="flex justify-center items-center my-4 text-xs text-primary">
            <span>Trait {currentTraitIndex + 1} of {dimensions.length}</span>
          </div>
          
          <div className="progress-bar w-full h-2 rounded-full overflow-hidden">
            <div className="progress-fill h-2 rounded-full w-full"></div>
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
        <div className="jp-card mb-8 rounded-3xl overflow-hidden relative">
          <div className="jp-card-inset">
            <h2 className="text-sm tracking-wide font-light mb-6 flex items-center relative z-10 text-primary">
              <span className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs"
                  style={{ borderColor: "rgba(193,191,132,0.6)", background: "rgba(255,255,255,0.5)" }}>
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
                      <span className="text-xs font-light text-primary">{dimension.leftLabel}</span>
                      <span className="text-xs font-light text-primary">{dimension.title}</span>
                      <span className="text-xs font-light text-primary">{dimension.rightLabel}</span>
                    </div>
                    
                    {/* Connection Line with Circle */}
                    <div className="trait-track relative h-4 mb-3">
                      <div className="absolute inset-y-0 w-full border-b border-dashed border-accent"></div>
                      
                      {/* Circle at current value */}
                      <div 
                        className="trait-thumb absolute top-1/2 w-4 h-4 rounded-full"
                        style={{ left: `${value}%` }}
                      >
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
                             style={{ transform: "translate(-50%, -50%)" }}></div>
                      </div>
                    </div>
                    
                    {/* Classification */}
                    <div className="text-right">
                      <span 
                        className="text-xs inline-block px-2 py-1 rounded-full text-primary"
                        style={{ 
                          background: "rgba(255,255,255,0.4)",
                          border: "1px solid rgba(193,191,132,0.4)"
                        }}
                      >
                        {value > 70 ? dimension.rightLabel : 
                         value < 30 ? dimension.leftLabel : 
                         dimension.id === 'beliefMindset' ? 'Balanced Thinker' :
                         dimension.id === 'clarityVision' ? 'Adaptive Visioner' :
                         dimension.id === 'actionOrientation' ? 'Balanced Actor' :
                         dimension.id === 'intuitionStrategy' ? 'Intuitive Strategist' :
                         'Emotionally Flexible'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Trait Analysis Cards */}
        <div className="mb-8">
          <h2 className="text-sm tracking-wide font-light mb-4 flex items-center text-primary">
            <span className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs"
                 style={{ borderColor: "rgba(193,191,132,0.6)", background: "rgba(255,255,255,0.5)" }}>
              2
            </span>
            Analysis Results
          </h2>
          
          <div className="relative h-64 mb-6">
            {/* Carousel container */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {/* Current trait card */}
              <div className="jp-card h-full rounded-2xl">
                <div className="jp-card-inset">
                  <div className="flex items-center mb-4 relative z-10">
                    {/* Bitmap Icon */}
                    <div 
                      className="bitmap-icon-container flex items-center justify-center w-12 h-12 mr-4 rounded-sm"
                    >
                      <div className="grid grid-cols-5 grid-rows-5 gap-px w-6 h-6">
                        {dimensions[currentTraitIndex].bitmap.flat().map((pixel, index) => (
                          <div 
                            key={index} 
                            className={`w-1 h-1 ${pixel ? 'bg-blue-600' : 'bg-transparent'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-primary">
                      {dimensionPercentages[dimensions[currentTraitIndex].id] > 70 ? dimensions[currentTraitIndex].rightLabel : 
                       dimensionPercentages[dimensions[currentTraitIndex].id] < 30 ? dimensions[currentTraitIndex].leftLabel : 
                       dimensions[currentTraitIndex].id === 'beliefMindset' ? 'Balanced Thinker' :
                       dimensions[currentTraitIndex].id === 'clarityVision' ? 'Adaptive Visioner' :
                       dimensions[currentTraitIndex].id === 'actionOrientation' ? 'Balanced Actor' :
                       dimensions[currentTraitIndex].id === 'intuitionStrategy' ? 'Intuitive Strategist' :
                       'Emotionally Flexible'}
                    </h3>
                  </div>
                  
                  <p className="text-sm relative z-10 mb-6 text-primary">
                    {getTraitClassification(dimensions[currentTraitIndex])}
                  </p>
                  
                  {/* Trait title and value */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-primary">{dimensions[currentTraitIndex].title}</span>
                    <span className="text-xs font-mono text-primary">{dimensionPercentages[dimensions[currentTraitIndex].id]}%</span>
                  </div>
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
              onClick={prevSlide}
              className="carousel-nav prev absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-8 h-8 rounded-full flex items-center justify-center z-20"
              aria-label="Previous trait"
            >
              <div className="w-2 h-2 border-l border-b transform -rotate-45 arrow-icon"></div>
            </button>
            
            <button 
              onClick={nextSlide}
              className="carousel-nav next absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-8 h-8 rounded-full flex items-center justify-center z-20"
              aria-label="Next trait"
            >
              <div className="w-2 h-2 border-r border-t transform rotate-45 arrow-icon"></div>
            </button>
          </div>
          
          {/* Overall Style */}
          {profileResult && (
            <div className="jp-card mb-6 rounded-3xl overflow-hidden relative" style={{ background: "#C5C3B0" }}>
              <div className="jp-card-inset">
                <h3 className="text-xl font-thin tracking-widest text-center mb-4 relative z-10 text-primary">
                  Your Overall Style: {profileResult.name}
                </h3>
                
                <p className="text-sm text-center relative z-10 text-primary">
                  {profileResult.description || "You are an action-oriented creator who blends vision with belief, taking decisive steps toward making your reality a reflection of your desires."}
                </p>
                
                {/* Connector lines design element */}
                <div className="mt-6 flex justify-center w-full relative z-10">
                  <div className="w-2/3 flex justify-around">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="connector-line w-px h-6"></div>
                        <div className="connector-circle w-3 h-3 rounded-full mt-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Share Section */}
        <div className="mb-8">
          <h3 className="results-subtitle text-center text-primary mb-5">
            Share Your Results
          </h3>
          <div className="jp-card max-w-md mx-auto mb-6 relative overflow-hidden">
            <div className="jp-card-inset">
              <p className="text-sm italic mb-2 text-primary">
                "{shareText}"
              </p>
              <div className="text-xs opacity-70 truncate text-primary">
                {shareUrl}
              </div>
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
            className="keyboard-button px-8 py-2 transition-all duration-300 text-xs tracking-wide overflow-hidden"
          >
            <span className="relative z-10 tracking-widest">TAKE QUIZ AGAIN</span>
            <div className="keyboard-texture absolute inset-0"></div>
          </button>
        </div>
        
        {/* Footer with technical info */}
        <div className="footer-info mt-10 pt-2 border-t border-dashed flex justify-between items-center" 
            style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs text-primary">REV 2024-03</span>
          <span className="text-xs text-primary">ANALYSIS COMPLETE</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
