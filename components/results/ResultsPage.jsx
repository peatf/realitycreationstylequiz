'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { createShareableUrl, generateShareText } from '@/lib/utils';
import { scoreToPercentage } from '@/lib/scoring';
import ShareButtons from './ShareButtons';
import { getAllDimensions } from '@/data/dimensions';
import MasteryInsights from '../mastery-dashboard/MasteryInsights';
import DynamicMasteryDiagram from '../mastery-dashboard/DynamicMasteryDiagram';

const ResultsPage = () => {
  const { dimensionScores, dimensionStates, profileResult, restartQuiz, masteryQuizCompleted } = useQuiz();
  
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
  
  // State & handlers for dimension carousel
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
        {/* Grid background */}
        <div className="grid-bg"></div>
        
        {/* Document ID Label */}
        <div className="doc-id-label">
          PROFILE_RCP-24
        </div>
        
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="results-title gradient-text">
            Your Reality Creation Profile
          </h1>
          <div className="w-20 h-px mx-auto my-2" style={{ background: "rgba(193,191,132,0.5)" }}></div>
          <p className="text-xs tracking-widest uppercase text-center text-blue-600">
            Personal Assessment
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="text-center mb-8">
          <div className="metadata-line">
            <span className="text-xs font-mono">10</span>
            <span className="text-sm tracking-widest font-extralight">COMPLETE</span>
            <span className="text-xs font-mono">100%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Add the Dynamic Mastery Diagram if mastery quiz was completed */}
        {masteryQuizCompleted && (
          <>
            <DynamicMasteryDiagram />
            <MasteryInsights />
          </>
        )}
        
        {/* Trait Sliders/Charts */}
        <div className="jp-card mb-8">
          <div className="jp-card-inset">
            <h2 className="text-xl font-light mb-4 text-center text-blue-600">
              Your Dimension Profile
            </h2>

            <div className="space-y-6">
              {dimensions.map((dimension) => {
                const value = dimensionPercentages[dimension.id] || 50;
                return (
                  <div key={dimension.id} className="trait-container">
                    <div className="trait-header">
                      <span className="trait-label">{dimension.leftLabel}</span>
                      <span className="trait-title">{dimension.title}</span>
                      <span className="trait-label text-right">{dimension.rightLabel}</span>
                    </div>
                    
                    {/* Slider track */}
                    <div className="trait-track">
                      {/* Current value indicator */}
                      <div 
                        className="trait-thumb"
                        style={{ left: `${value}%` }}
                      ></div>
                    </div>
                    
                    {/* Classification */}
                    <div className="text-right">
                      <span 
                        className="text-xs inline-block px-2 py-1 rounded-full bg-white bg-opacity-40 border border-opacity-40"
                        style={{ 
                          color: "#2359FF", 
                          borderColor: "rgba(193,191,132,0.4)"
                        }}
                      >
                        {dimension.states[dimensionStates[dimension.id]]?.name || 'Balanced'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* DIMENSION CAROUSEL */}
        <div className="jp-card mb-8 relative">
          <div className="jp-card-inset"> 
            <h2 className="text-xl font-light mb-4 text-center text-blue-600">
              Dimension Details
            </h2>
            
            <div className="relative">
              {dimensions.map((dimension, index) => (
                <div
                  key={dimension.id}
                  className={`transition-opacity duration-300 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div>
                    <h3 className="dimension-title">
                      {dimension.title}:{' '}
                      <span className="dimension-value">
                        {dimension.states[dimensionStates[dimension.id]]?.name || 'Balanced'}
                      </span>
                    </h3>
                    <p className="dimension-text">
                      {dimension.states[dimensionStates[dimension.id]]?.description ||
                        'Your approach is balanced in this dimension.'}
                    </p>

                    <div className="mt-4">
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
            </div>

            {/* Carousel navigation dots */}
            <div className="flex justify-center gap-2 mt-4">
              {dimensions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'bg-blue-600 w-4' 
                      : 'bg-blue-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-8 h-8 rounded-full flex items-center justify-center bg-white bg-opacity-60 border border-opacity-40"
              style={{ borderColor: "rgba(193,191,132,0.4)" }}
              aria-label="Previous dimension"
            >
              <div className="w-2 h-2 border-l border-b transform -rotate-45" style={{ borderColor: "#2359FF" }}></div>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-8 h-8 rounded-full flex items-center justify-center bg-white bg-opacity-60 border border-opacity-40"
              style={{ borderColor: "rgba(193,191,132,0.4)" }}
              aria-label="Next dimension"
            >
              <div className="w-2 h-2 border-r border-t transform rotate-45" style={{ borderColor: "#2359FF" }}></div>
            </button>
          </div>
        </div>

        {/* Summary Section */}
        {profileResult && (
          <div className="jp-card mb-8">
            <div className="jp-card-inset">
              <h2 className="text-xl font-light mb-4 text-center text-blue-600">
                Your Overall Style: {profileResult.name}
              </h2>
              <p className="results-text">
                {profileResult.description}
              </p>

              {/* Celebrate / Support lists */}
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
          </div>
        )}

        {/* Share Buttons */}
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
            <span className="relative z-10 tracking-widest">TAKE QUIZ AGAIN</span>
            <div className="keyboard-texture"></div>
            <div className="button-particles"></div>
            <div className="button-shine"></div>
          </button>
        </div>
        
        {/* Footer with technical info */}
        <div className="mt-10 pt-2 border-t border-dashed flex justify-between items-center text-blue-600" 
             style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs">REV 2024-03</span>
          <span className="text-xs">ANALYSIS COMPLETE</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
