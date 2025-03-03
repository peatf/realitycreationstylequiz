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
  
  // Debug dimension scores
  console.log("Dimension Percentages:", dimensionPercentages);
  
  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
      width: '100%',
      padding: '1.5rem',
      borderRadius: '5rem',
      background: "rgba(220, 230, 255, 0.2)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,0.3)",
      boxShadow: "0 10px 40px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.2)",
      animation: "pulseGlow 8s infinite alternate ease-in-out",
    }}>
      {/* Texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '5rem',
        mixBlendMode: 'overlay',
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`
      }} />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 
            style={{
              fontSize: '1.875rem',
              letterSpacing: '0.2em',
              fontWeight: 200,
              marginBottom: '1.5rem',
              color: "#2359FF",
              background: "linear-gradient(90deg, #2359FF, #6195ED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Your Reality Creation Profile
          </h1>
        </div>
        
        {/* Progress indicator (completed) */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.875rem', color: "#2359FF" }}>
              Step 10/10 - Complete!
            </span>
          </div>
          <div style={{ width: '100%', maxWidth: '28rem', margin: '0 auto' }}>
            <div
              style={{
                height: '0.5rem',
                borderRadius: '9999px',
                background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                boxShadow: "0 0 10px rgba(193,191,132,0.3), inset 0 1px 3px rgba(0,0,0,0.1)"
              }}
            >
              {/* Progress is complete */}
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: '9999px',
                  background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Trait Sliders/Charts */}
        <div style={{ marginBottom: '2rem' }}>
          {dimensions.map((dimension) => (
            <div key={dimension.id} style={{ marginBottom: '1.5rem' }}>
              {/* Dimension labels */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.25rem',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem'
              }}>
                <span style={{ fontSize: '0.875rem', color: "#2359FF" }}>{dimension.leftLabel}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 300, color: "#2359FF" }}>{dimension.title}</span>
                <span style={{ fontSize: '0.875rem', color: "#2359FF" }}>{dimension.rightLabel}</span>
              </div>
              
              {/* Slider track */}
              <div style={{ position: 'relative', height: '1.25rem', width: '100%' }}>
                <div
                  style={{
                    height: '1.25rem',
                    borderRadius: '9999px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
                    boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
                  }}
                >
                  {/* Filled portion */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: `${dimensionPercentages[dimension.id] || 50}%`,
                      borderRadius: '9999px',
                      background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
                    }}
                  />
                  
                  {/* Pulse animation */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.2,
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      animation: "pulse 3s infinite"
                    }}
                  />
                  
                  {/* Slider thumb */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: `${dimensionPercentages[dimension.id] || 50}%`,
                      width: '1rem',
                      height: '1rem',
                      borderRadius: '9999px',
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      zIndex: 2
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '0.25rem',
                      height: '0.25rem',
                      borderRadius: '9999px',
                      background: 'white',
                      opacity: 0.6,
                      transform: "translate(-50%, -50%)"
                    }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trait Description Cards - MODIFIED: Removed .slice(0, 3) to show all dimensions */}
        <div style={{ marginBottom: '2rem' }}>
          {dimensions.map((dimension) => (
            <div 
              key={dimension.id}
              style={{
                padding: '1rem',
                borderRadius: '1.5rem',
                background: "rgba(235,240,180,0.5)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(220,255,200,0.6)",
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)",
                marginBottom: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 300, marginBottom: '0.5rem', color: "#2359FF" }}>
                {dimension.title}: <span style={{ fontWeight: 400 }}>
                  {dimension.states[dimensionStates[dimension.id]]?.name || 'Balanced'}
                </span>
              </h3>
              <p style={{ fontSize: '0.875rem', color: "#2359FF" }}>
                {dimension.states[dimensionStates[dimension.id]]?.description || 'Your approach is balanced in this dimension.'}
              </p>
              
              {/* ADDED: Show frameworks, practices, and tools if they exist */}
              {dimension.states[dimensionStates[dimension.id]]?.frameworks && (
                <div style={{ marginTop: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: "#2359FF" }}>Frameworks you may be interested in:</h4>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: "#2359FF" }}>
                    {dimension.states[dimensionStates[dimension.id]].frameworks}
                  </p>
                </div>
              )}
              
              {dimension.states[dimensionStates[dimension.id]]?.practices && (
                <div style={{ marginTop: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: "#2359FF" }}>Practices you may be interested in:</h4>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: "#2359FF" }}>
                    {dimension.states[dimensionStates[dimension.id]].practices}
                  </p>
                </div>
              )}
              
              {dimension.states[dimensionStates[dimension.id]]?.tools && (
                <div style={{ marginTop: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: "#2359FF" }}>Tools you may be interested in:</h4>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: "#2359FF" }}>
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
            style={{
              padding: '1.5rem',
              borderRadius: '1.5rem',
              marginBottom: '1.5rem',
              background: "rgba(224,224,224,0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "inset 0 2px 5px rgba(0,0,0,0.05), 0 0 10px rgba(255,255,255,0.3)"
            }}
          >
            <h2 
              style={{ 
                fontSize: '1.25rem',
                fontWeight: 100,
                letterSpacing: '0.1em',
                textAlign: 'center',
                marginBottom: '1rem',
                color: "#2359FF",
                background: "linear-gradient(90deg, #2359FF, #5283E8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Your Overall Style: {profileResult.name}
            </h2>
            <p style={{ fontSize: '0.875rem', textAlign: 'center', color: "#2359FF" }}>
              {profileResult.description}
            </p>
          </div>
        )}
        
        {/* Share Buttons */}
        <ShareButtons url={shareableUrl} text={shareText} />
        
        {/* Restart button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
          <button 
            onClick={restartQuiz}
            style={{
              padding: '0.5rem 2rem',
              borderRadius: '76px',
              color: "#2359FF",
              background: "rgba(224,224,224,0)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "inset 19px 19px 38px rgba(190,190,190,0.3), inset -19px -19px 38px rgba(255,255,255,0.3)",
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <span style={{ position: 'relative', zIndex: 10 }}>TAKE QUIZ AGAIN</span>
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.2,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                transform: "translateX(-100%)",
                animation: "buttonShine 4s infinite"
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
