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

  // Convert each dimension’s score (1–5) into a percentage (0–100) for positioning
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

  // Render a bitmap icon for a given dimension using Tailwind’s grid utilities
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
    <div className="bg-transparent p-6 rounded-3xl w-full">
      <div className="relative z-10">
        {/* Top Section: Grid Background & Document ID */}
        <div className="grid-bg" />
        <div className="doc-id-label">PROFILE_RCP-24</div>

        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="results-title gradient-text">
            Your Reality Creation Profile
          </h1>
          <div className="w-20 h-px mx-auto my-2 bg-[rgba(193,191,132,0.5)]" />
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
            <div className="progress-fill" style={{ width: '100%' }} />
          </div>
        </div>

        {/* Optional Mastery Diagram & Insights (if mastery quiz completed) */}
        {masteryQuizCompleted && (
          <>
            <DynamicMasteryDiagram />
            <MasteryInsights />
          </>
        )}

        {/* SECTION 1: TRAIT MEASUREMENTS */}
        <div className="jp-card mb-8">
          <div className="jp-card-inset">
            <h2 className="text-sm tracking-wide font-light mb-6 flex items-center text-blue-600">
              <span
                className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs border-[rgba(193,191,132,0.6)] bg-[rgba(255,255,255,0.5)] text-red-500"
              >
                1
              </span>
              Trait Measurements
            </h2>
            <div className="space-y-8">
              {dimensions.map((dimension) => {
                const value = dimensionPercentages[dimension.id] || 50;
                const stateKey = getDimensionState(dimension.id, dimensionScores[dimension.id]);
                const classification = dimension.states[stateKey]?.name || 'Balanced';
                return (
                  <div key={dimension.id} className="mb-6">
                    {/* Dimension labels */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-light text-[#2359FF]">{dimension.leftLabel}</span>
                      <span className="text-xs font-light text-[#2359FF]">{dimension.title}</span>
                      <span className="text-xs font-light text-[#2359FF]">{dimension.rightLabel}</span>
                    </div>
                    {/* Connection Line with Slider Circle */}
                    <div className="relative h-4 mb-3">
                      <div className="absolute inset-y-0 w-full border-b border-dashed border-[rgba(193,191,132,0.6)]" />
                      <div
                        className="absolute top-1/2 w-4 h-4 rounded-full bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]"
                        style={{
                          left: `${value}%`,
                          transform: 'translate(-50%, -50%)',
                          boxShadow:
                            '0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)',
                        }}
                      >
                        <div
                          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white opacity-60"
                          style={{ transform: 'translate(-50%, -50%)' }}
                        />
                      </div>
                    </div>
                    {/* Classification label */}
                    <div className="text-right">
                      <span className="text-xs inline-block px-2 py-1 rounded-full text-[#2359FF] bg-[rgba(255,255,255,0.4)] border border-[rgba(193,191,132,0.4)]">
                        {classification}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 2: ANALYSIS RESULTS (Carousel) */}
        <div className="jp-card mb-8">
          <div className="jp-card-inset">
            <h2 className="text-sm tracking-wide font-light mb-4 flex items-center text-blue-600">
              <span
                className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs border-[rgba(193,191,132,0.6)] bg-[rgba(255,255,255,0.5)] text-red-500"
              >
                2
              </span>
              Analysis Results
            </h2>
            <div className="relative h-64 mb-6">
              {/* Carousel container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                {dimensions.map((dimension, index) => {
                  const value = dimensionPercentages[dimension.id] || 50;
                  const stateKey = getDimensionState(dimension.id, dimensionScores[dimension.id]);
                  const classification = dimension.states[stateKey]?.name || 'Balanced';
                  const description = dimension.states[stateKey]?.description || 'Your approach is balanced in this dimension.';
                  return (
                    <div
                      key={dimension.id}
                      className={`absolute inset-0 transition-opacity duration-300 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <div
                        className="p-6 h-full overflow-hidden relative rounded-2xl bg-[linear-gradient(135deg,rgba(235,240,180,0.65)_0%,rgba(245,250,190,0.85)_50%,rgba(235,240,180,0.75)_100%)] shadow-[inset_0_2px_6px_rgba(0,0,0,0.2),inset_0_-1px_2px_rgba(255,255,255,0.3),0_0_10px_rgba(193,191,132,0.3)]"
                      >
                        {/* Debossed inset shadow */}
                        <div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.2)',
                          }}
                        />
                        {/* Icon and Classification */}
                        <div className="flex items-center mb-4 relative z-10">
                          <div
                            className="flex items-center justify-center w-12 h-12 mr-4 rounded-sm bg-[rgba(255,255,255,0.3)] border border-[rgba(193,191,132,0.4)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]"
                          >
                            {renderBitmapIcon(dimension)}
                          </div>
                          <h3 className="text-lg font-medium text-[#2359FF]">{classification}</h3>
                        </div>
                        <p className="text-sm relative z-10 mb-6 text-[#2359FF]">{description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-[#2359FF]">{dimension.title}</span>
                          <span className="text-xs font-mono text-[#2359FF]">{value}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {dimensions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-blue-600 w-4' : 'bg-blue-300'}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Carousel Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 rounded-full flex items-center justify-center z-20 bg-[rgba(255,255,255,0.6)] border border-[rgba(193,191,132,0.4)]"
                aria-label="Previous dimension"
              >
                <div className="w-2 h-2 border-l border-b -rotate-45" style={{ borderColor: "#2359FF" }} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 rounded-full flex items-center justify-center z-20 bg-[rgba(255,255,255,0.6)] border border-[rgba(193,191,132,0.4)]"
                aria-label="Next dimension"
              >
                <div className="w-2 h-2 border-r border-t rotate-45" style={{ borderColor: "#2359FF" }} />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3: Summary (Overall Profile) */}
        {profileResult && (
          <div className="jp-card mb-8">
            <div className="jp-card-inset">
              <h2 className="text-xl font-thin tracking-widest text-center mb-4 gradient-text text-blue-600">
                Your Overall Style: {profileResult.name}
              </h2>
              <p className="text-sm text-center mb-6 text-blue-600">
                {profileResult.description}
              </p>
              {(profileResult.celebrate || profileResult.support) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {profileResult.celebrate && (
                    <div>
                      <h3 className="text-base font-light mb-3 text-center text-blue-600">
                        Things to Celebrate
                      </h3>
                      <ul className="space-y-2">
                        {profileResult.celebrate.map((item, index) => (
                          <li
                            key={index}
                            className="p-3 rounded-xl text-sm text-blue-600"
                            style={{
                              background: "rgba(235,240,180,0.3)",
                              backdropFilter: "blur(4px)",
                              WebkitBackdropFilter: "blur(4px)",
                              border: "1px solid rgba(220,255,200,0.4)",
                              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(193,191,132,0.2)",
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
                      <h3 className="text-base font-light mb-3 text-center text-blue-600">
                        What Will Support Your Process
                      </h3>
                      <ul className="space-y-2">
                        {profileResult.support.map((item, index) => (
                          <li
                            key={index}
                            className="p-3 rounded-xl text-sm text-blue-600"
                            style={{
                              background: "rgba(220,230,255,0.2)",
                              backdropFilter: "blur(4px)",
                              WebkitBackdropFilter: "blur(4px)",
                              border: "1px solid rgba(255,255,255,0.2)",
                              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(35,89,255,0.1)",
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

        {/* SECTION 4: Share Buttons */}
        <div className="w-full flex flex-col items-center mb-8">
          <h3 className="text-xl font-light mb-5 text-center text-blue-600">
            Share Your Results
          </h3>
          <div className="w-full max-w-md p-4 mb-6 rounded-xl bg-white/10 border border-[rgba(220,255,200,0.4)] shadow-sm">
            <p className="text-sm italic mb-2 text-blue-600">"{shareText}"</p>
            <div className="text-xs opacity-70 truncate text-blue-600">{shareUrl}</div>
          </div>
          <ShareButtons
            profileName={profileResult?.name}
            dimensionScores={dimensionScores}
            profileId={profileResult?.id}
            shareUrl={shareUrl}
            shareText={shareText}
          />
        </div>

        {/* SECTION 5: Restart Button */}
        <div className="flex justify-center mt-8">
          <button onClick={restartQuiz} className="keyboard-button">
            <span className="relative z-10 tracking-widest">TAKE QUIZ AGAIN</span>
            <div className="keyboard-texture" />
            <div className="button-particles" />
            <div className="button-shine" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-2 border-t border-dashed flex justify-between items-center text-blue-600" style={{ borderColor: "rgba(193,191,132,0.6)" }}>
          <span className="text-xs">REV 2024-03</span>
          <span className="text-xs">ANALYSIS COMPLETE</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
