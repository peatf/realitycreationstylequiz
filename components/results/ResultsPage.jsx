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
      return dimension.states[stateKey]?.name || 
        (dimension.id === 'beliefMindset' ? 'Balanced Thinker' :
        dimension.id === 'clarityVision' ? 'Adaptive Visioner' :
        dimension.id === 'actionOrientation' ? 'Balanced Actor' :
        dimension.id === 'intuitionStrategy' ? 'Intuitive Strategist' :
        'Emotionally Flexible');
    }
  };

  return (
    <div className="main-container">
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      <div className="card-container">
        {/* Document ID Label */}
        <div className="doc-id-label">
          PROFILE_RCP-24
        </div>
        
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="results-title gradient-text">
            Reality Creation Profile
          </h1>
          <div className="divider w-20 h-px mx-auto my-2"></div>
          <p className="text-xs tracking-widest uppercase text-primary">
            Personal Assessment
          </p>
        </div>

        {/* Technical specifications line */}
        <div className="metadata-line">
          <span className="text-xs font-mono text-primary">01</span>
          <span className="text-sm tracking-widest font-extralight text-primary">FORM_A-24</span>
          <span className="text-xs font-mono text-primary">150mm</span>
        </div>

        {/* Progress indicator */}
        <div className="w-full mb-8">
          <div className="progress-header">
            <span className="text-sm font-light text-primary">Progress</span>
            <span className="text-sm font-light text-primary">Complete</span>
          </div>
          
          {/* Trait indicator showing which one we're viewing */}
          <div className="progress-indicator my-4">
            <span>Trait {currentTraitIndex + 1} of {dimensions.length}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill w-full"></div>
          </div>
        </div>

        {/* Optional Mastery Section */}
        {masteryQuizCompleted && (
          <>
            <DynamicMasteryDiagram />
            <MasteryInsights />
          </>
        )}

        {/* Section title outside the box */}
        <h2 className="section-title mb-4">
          <span className="section-number">1</span>
          Trait Measurements
        </h2>
          
        {/* Trait Measurement Section */}
        <div className="jp-card p-6 mb-8">
          <div className="jp-card-inset">
            <div className="space-y-6">
              {dimensions.map((dimension) => {
                const value = dimensionPercentages[dimension.id] || 50;
                
                return (
                  <div key={dimension.id} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="trait-label" style={{ textAlign: "left" }}>{dimension.leftLabel}</span>
                      <span className="trait-title">{dimension.title}</span>
                      <span className="trait-label" style={{ textAlign: "right" }}>{dimension.rightLabel}</span>
                    </div>
                    
                    {/* Trait track with thumb */}
                    <div className="trait-track">
                      <div 
                        className="trait-thumb"
                        style={{ left: `${value}%` }}
                      ></div>
                    </div>
                    
                    {/* Classification */}
                    <div className="text-right mt-2">
                      <span className="classification-badge">
                        {getTraitClassificationName(dimension)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Section title outside the box */}
        <h2 className="section-title mb-4">
          <span className="section-number">2</span>
          Analysis Results
        </h2>
        
        {/* Trait Analysis Cards */}
        <div className="mb-8">
          <div className="relative h-64 mb-6">
            {/* Carousel container */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {/* Current trait card */}
              <div className="jp-card p-6 h-full">
                <div className="jp-card-inset">
                  <div className="flex items-center mb-4">
                    {/* Bitmap Icon */}
                    <div className="bitmap-icon-container">
                      <div className="bitmap-grid">
                        {dimensions[currentTraitIndex]?.bitmap?.flat().map((pixel, index) => (
                          <div 
                            key={index} 
                            className={`bitmap-pixel ${pixel ? 'active' : ''}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-primary">
                      {getTraitClassificationName(dimensions[currentTraitIndex])}
                    </h3>
                  </div>
                  
                  <p className="text-sm mb-6 text-primary">
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
              <div className="carousel-dots">
                {dimensions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTraitIndex(index)}
                    className={`carousel-dot ${currentTraitIndex === index ? 'active' : ''}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Carousel navigation buttons */}
            <button 
              onClick={() => setCurrentTraitIndex(prev => prev === 0 ? dimensions.length - 1 : prev - 1)}
              className="carousel-nav prev"
              aria-label="Previous trait"
            >
              <div className="carousel-nav-arrow"></div>
            </button>
            
            <button 
              onClick={() => setCurrentTraitIndex(prev => prev === dimensions.length - 1 ? 0 : prev + 1)}
              className="carousel-nav next"
              aria-label="Next trait"
            >
              <div className="carousel-nav-arrow"></div>
            </button>
          </div>
          
          {/* Overall Style */}
          {profileResult && (
            <div className="jp-card-accent p-6 mb-6">
              <div className="jp-card-inset">
                <h3 className="results-subtitle text-primary mb-4">
                  Your Overall Style: {profileResult.name}
                </h3>
                <p className="text-sm text-center text-primary">
                  {profileResult.description || "You are an action-oriented creator who blends vision with belief, taking decisive steps toward making your reality a reflection of your desires."}
                </p>
                
                {/* Connector lines design element - in horizontal arrangement */}
                <div className="mt-6 flex justify-center">
                  <div className="w-2/3 flex justify-around">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="connector-line"></div>
                        <div className="connector-circle"></div>
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
          <h3 className="results-subtitle text-primary mb-5">
            Share Your Results
          </h3>
          <div className="jp-card p-6 max-w-md mx-auto mb-6">
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
            className="keyboard-button px-8 py-2 text-xs tracking-wide"
          >
            <span className="tracking-widest">TAKE QUIZ AGAIN</span>
          </button>
        </div>
        
        {/* Footer with technical info */}
        <div className="footer-info">
          <span className="text-primary">REV 2024-03</span>
          <span className="text-primary">ANALYSIS COMPLETE</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
