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
    <div className="bg-[#DBDECE] p-6 rounded-3xl w-full">
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-thin tracking-widest mb-6 gradient-text">
            Your Reality Creation Profile
          </h1>
        </div>
        
        {/* Progress indicator (completed) */}
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
        
        {/* Trait Sliders/Charts */}
        <div className="mb-8">
          {dimensions.map((dimension) => (
            <div key={dimension.id} className="mb-4">
              {/* Dimension labels */}
              <div className="flex justify-between mb-1 px-2">
                <span className="text-sm text-[#2359FF]">{dimension.leftLabel}</span>
                <span className="text-sm font-light text-[#2359FF]">{dimension.title}</span>
                <span className="text-sm text-[#2359FF]">{dimension.rightLabel}</span>
              </div>
              
              {/* Slider track */}
              <div className="relative h-5 w-full">
                <div className="slider-track">
                  {/* Filled portion */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${dimensionPercentages[dimension.id] || 50}%`,
                      background: "linear-gradient(to right, rgba(193,191,132,0.5), rgba(150,159,30,0.5))",
                    }}
                  ></div>
