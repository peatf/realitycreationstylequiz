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
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % dimensions.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + dimensions.length) % dimensions.length);

  // Render a bitmap icon for a given dimension using your global bitmap grid classes
  const renderBitmapIcon = (dimension) => {
    const pixels = dimension.bitmap || [];
    return (
      <div className="bitmap-grid">
        {pixels.flat().map((pixel, idx) => (
          <div key={idx} className={`bitmap-pixel ${pixel ? 'active' : ''}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="main-container relative">
      {/* Grid background via your .grid-bg class */}
      <div className="grid-bg"></div>

      <div className="card-container">
        {/* Document ID Label */}
        <div className="doc-id-label">PROFILE_RCP-24</div>

        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="results-title gradient-text">
            Your Reality Creation Profile
          </h1>
          {/* Divider – you can define .divider in your globals.css if desired */}
          <div className="divider w-20 h-px mx-auto my-2"></div>
          <p className="text-xs tracking-widest uppercase text-primary">
            Personal Assessment
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="metadata-line">
          <span className="text-xs font-mono">01</span>
          <span className="text-sm tracking-widest font-extralight">FORM_A-24</span>
          <span className="text-xs font-mono">100%</span>
        </div>

        {/* Progress Indicator */}
        <div className="progress-container mb-8">
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

        {/* Trait Measurements Section */}
        <div className="dimension-description">
          <h2 className="text-sm tracking-wide font-light mb-6 flex items-center text-primary">
            <span className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs">
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
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-light text-primary">
                      {dimension.leftLabel}
                    </span>
                    <span className="text-xs font-light text-primary">
                      {dimension.title}
                    </span>
                    <span className="text-xs font-light text-primary">
                      {dimension.rightLabel}
                    </span>
                  </div>

                  {/* Trait Track with dynamic thumb positioning (controlled via CSS variable) */}
                  <div className="trait-track mb-3" style={{ "--thumb-left": `${value}%` }}>
                    <div className="trait-thumb"></div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs inline-block px-2 py-1 rounded-full text-primary">
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
          <h2 className="text-sm tracking-wide font-light mb-4 flex items-center text-primary">
            <span className="inline-block w-5 h-5 mr-2 text-center rounded-full border text-xs">
              2
            </span>
            Analysis Results
          </h2>

        <div
  className="flex flex-row transition-transform duration-500 h-full"
  style={{
    transform: `translateX(-${activeIndex * (100 / dimensions.length)}%)`,
    width: `${dimensions.length * 100}%`
  }}
>
              {dimensions.map((dimension) => {
                const value = dimensionPercentages[dimension.id] || 50;
                const stateKey = getDimensionState(dimension.id, dimensionScores[dimension.id]);
                const classification = dimension.states[stateKey]?.name || 'Balanced';
                const description =
                  dimension.states[stateKey]?.description ||
                  'Your approach is balanced in this dimension.';
                return (
                  <div
                    key={dimension.id}
                    className="flex-shrink-0"
                    style={{ width: `${100 / dimensions.length}%` }}
                  >
                    <div className="profile-card h-full overflow-hidden relative rounded-2xl">
                      <div className="flex items-center mb-4">
                        <div className="bitmap-icon-container">
                          {renderBitmapIcon(dimension)}
                        </div>
                        <h3 className="text-lg font-medium text-primary">
                          {classification}
                        </h3>
                      </div>
                      <p className="text-sm mb-6 text-primary">{description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-primary">
                          {dimension.title}
                        </span>
                        <span className="text-xs font-mono text-primary">
                          {value}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {dimensions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`carousel-dot ${activeIndex === i ? 'active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
            {/* Carousel Navigation Arrows */}
            <button onClick={prevSlide} className="carousel-nav prev" aria-label="Previous dimension">
              <div className="w-2 h-2 border-l border-b -rotate-45"></div>
            </button>
            <button onClick={nextSlide} className="carousel-nav next" aria-label="Next dimension">
              <div className="w-2 h-2 border-r border-t rotate-45"></div>
            </button>
          </div>
        </div>

        {/* Overall Style Section */}
        {profileResult && (
          <div className="profile-card mb-6 relative overflow-hidden">
            <h3 className="results-subtitle gradient-text">
              Your Overall Style: {profileResult.name}
            </h3>
            <p className="text-sm text-center text-primary mb-6">
              {profileResult.description}
            </p>

            {(profileResult.celebrate || profileResult.support) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {profileResult.celebrate && (
                  <div>
                    <h4 className="text-base font-light mb-3 text-center text-primary">
                      Things to Celebrate
                    </h4>
                    <ul className="space-y-2">
                      {profileResult.celebrate.map((item, index) => (
                        <li key={index} className="p-3 rounded-xl text-sm text-primary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {profileResult.support && (
                  <div>
                    <h4 className="text-base font-light mb-3 text-center text-primary">
                      What Will Support You
                    </h4>
                    <ul className="space-y-2">
                      {profileResult.support.map((item, index) => (
                        <li key={index} className="p-3 rounded-xl text-sm text-primary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Connector Design Element:
                The following block uses .connector-line and .connector-circle to render a visual connector.
                You can style these in your globals.css or remove this section if not needed. */}
            <div className="mt-6 flex justify-center w-full">
              <div className="w-2/3 flex justify-around">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="connector-line w-px h-6"></div>
                    <div className="connector-circle w-3 h-3 rounded-full mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="mb-8">
          <h3 className="results-subtitle text-center text-primary mb-5">
            Share Your Results
          </h3>
          <div className="profile-card max-w-md mx-auto mb-6 relative overflow-hidden">
            <p className="text-sm italic mb-2 text-primary">
              "{shareText}"
            </p>
            <div className="text-xs opacity-70 truncate text-primary">
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

        {/* Restart Button using your existing button styling */}
        <div className="flex justify-center mt-6">
          <button onClick={restartQuiz} className="keyboard-button">
            TAKE QUIZ AGAIN
          </button>
        </div>

        {/* Footer */}
        <div className="footer-info flex justify-between items-center mt-10 pt-2 border-t border-dashed">
          <span className="text-xs">REV 2024-03</span>
          <span className="text-xs">ANALYSIS COMPLETE</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
