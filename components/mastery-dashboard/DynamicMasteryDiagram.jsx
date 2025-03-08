'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { getAllDimensions } from '@/data/dimensions';
import { scoreToPercentage } from '@/lib/scoring';

const DynamicMasteryDiagram = () => {
  const { 
    dimensionScores, 
    dimensionStates, 
    adjustedTargets, 
    priorityLevels,
    dimensionInsights
  } = useQuiz();
  
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  // Get all dimensions
  const dimensions = getAllDimensions();
  
  // Convert scores to percentages for visualization
  const dimensionPercentages = Object.entries(dimensionScores).reduce((acc, [key, value]) => {
    acc[key] = scoreToPercentage(value);
    return acc;
  }, {});
  
  // Convert target scores to percentages
  const targetPercentages = Object.entries(adjustedTargets).reduce((acc, [key, value]) => {
    acc[key] = scoreToPercentage(value);
    return acc;
  }, {});
  
  // Color map for priority levels
  const priorityColors = {
    'High': '#FF4C4C',       // Red
    'Moderate': '#FF8042',   // Orange
    'Meaningful': '#FFC658', // Yellow
    'Minimal': '#82ca9d'     // Green
  };
  
  // Toggle tooltip
  const toggleTooltip = (dimensionId) => {
    if (activeTooltip === dimensionId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(dimensionId);
    }
  };
  
  // Render radar diagram
  return (
    <div className="mt-6 mb-8">
      <h2 className="text-xl font-light mb-4 text-center gradient-text">
        Your Dynamic Mastery Diagram
      </h2>
      
      <div className="flex flex-wrap justify-center mb-4">
        {/* Priority level legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <span className="text-sm text-[#2359FF]">Priority Levels:</span>
          {Object.entries(priorityColors).map(([level, color]) => (
            <div key={level} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-xs text-[#2359FF]">{level}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Radar chart container */}
      <div className="jp-card overflow-visible">
        <div className="jp-card-inset">
          <div className="mastery-diagram-container aspect-square">
            {/* Center point and concentric circles */}
            <div className="mastery-diagram-circle" style={{ width: '94%', height: '94%' }}></div>
            <div className="mastery-diagram-circle" style={{ width: '75%', height: '75%' }}></div>
            <div className="mastery-diagram-circle" style={{ width: '50%', height: '50%' }}></div>
            <div className="mastery-diagram-circle" style={{ width: '25%', height: '25%' }}></div>
            
            {/* Dimension axes */}
            {dimensions.map((dimension, index) => {
              // Calculate rotation for this axis
              const angle = (index * (360 / dimensions.length)) * (Math.PI / 180);
              
              // Label position
              const labelAngle = angle;
              const labelDistance = 51; // percentage from center
              const labelX = 50 + labelDistance * Math.cos(labelAngle);
              const labelY = 50 + labelDistance * Math.sin(labelAngle);
              
              return (
                <React.Fragment key={dimension.id}>
                  <div 
                    className="mastery-diagram-axis"
                    style={{
                      width: '50%',
                      transform: `rotate(${angle}rad)`,
                    }}
                  ></div>
                  <div 
                    className="mastery-diagram-label"
                    style={{
                      left: `${labelX}%`,
                      top: `${labelY}%`,
                    }}
                  >
                    {dimension.title}
                  </div>
                </React.Fragment>
              );
            })}
            
            {/* Current profile polygon (filled) */}
            <div className="absolute inset-0 z-0">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="xMidYMid meet"
              >
                <polygon
                  points={dimensions.map((dimension, index) => {
                    const angle = (index * (360 / dimensions.length)) * (Math.PI / 180);
                    const percentage = dimensionPercentages[dimension.id] || 50;
                    const distance = percentage * 0.5 / 100; // Scale to fit within the chart
                    const x = 50 + 50 * distance * Math.cos(angle);
                    const y = 50 + 50 * distance * Math.sin(angle);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="rgba(35,89,255,0.2)"
                  stroke="rgba(35,89,255,0.6)"
                  strokeWidth="1"
                />
              </svg>
            </div>
            
            {/* Target profile polygon (dashed outline) */}
            {Object.keys(adjustedTargets).length > 0 && (
              <div className="absolute inset-0 z-0">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="xMidYMid meet"
                >
                  <polygon
                    points={dimensions.map((dimension, index) => {
                      const angle = (index * (360 / dimensions.length)) * (Math.PI / 180);
                      const percentage = targetPercentages[dimension.id] || dimensionPercentages[dimension.id] || 50;
                      const distance = percentage * 0.5 / 100; // Scale to fit within the chart
                      const x = 50 + 50 * distance * Math.cos(angle);
                      const y = 50 + 50 * distance * Math.sin(angle);
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="rgba(35,89,255,0.8)"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                </svg>
              </div>
            )}
            
            {/* Dimension points with tooltips */}
            {dimensions.map((dimension, index) => {
              const angle = (index * (360 / dimensions.length)) * (Math.PI / 180);
              const percentage = dimensionPercentages[dimension.id] || 50;
              const distance = percentage * 0.5 / 100; // Scale to fit within the chart
              const x = 50 + 50 * distance * Math.cos(angle);
              const y = 50 + 50 * distance * Math.sin(angle);
              
              // Also calculate target point position
              const targetPercentage = targetPercentages[dimension.id] || percentage;
              const targetDistance = targetPercentage * 0.5 / 100;
              const targetX = 50 + 50 * targetDistance * Math.cos(angle);
              const targetY = 50 + 50 * targetDistance * Math.sin(angle);
              
              // Priority color
              const priority = priorityLevels[dimension.id] || 'Minimal';
              const priorityColor = priorityColors[priority] || '#82ca9d';
              
              // Get dimension insight
              const insight = dimensionInsights[dimension.id];
              
              return (
                <div key={dimension.id} className="absolute" style={{ 
                  left: `${x}%`, 
                  top: `${y}%`, 
                  zIndex: activeTooltip === dimension.id ? 20 : 10
                }}>
                  {/* Current point with larger hit area */}
                  <div 
                    className="relative flex items-center justify-center"
                    onClick={() => toggleTooltip(dimension.id)}
                  >
                    <div className="absolute w-6 h-6 rounded-full opacity-0 cursor-pointer"></div>
                    <div 
                      className="mastery-diagram-point"
                      style={{ 
                        backgroundColor: priorityColor,
                      }}
                    ></div>
                  </div>
                  
                  {/* Target point (if different from current) */}
                  {Math.abs(targetPercentage - percentage) > 3 && (
                    <div 
                      className="absolute rounded-full w-3 h-3 border-2"
                      style={{ 
                        left: `${targetX - x}px`, 
                        top: `${targetY - y}px`,
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        borderColor: priorityColor,
                        transform: 'translate(-50%, -50%)'
                      }}
                    ></div>
                  )}
                  
                  {/* Tooltip */}
                  {activeTooltip === dimension.id && insight && (
                    <div 
                      className="absolute jp-card p-3 w-48 z-20 transition-opacity duration-200 opacity-0 tooltip-active"
                      style={{ 
                        left: `${Math.max(10, Math.min(x, 100 - 160/2))}%`,
                        top: `${Math.max(10, Math.min(y, 100 - 100/2))}%`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 1
                      }}
                    >
                      <div className="jp-card-inset">
                        <h3 className="text-sm font-medium mb-1 text-[#2359FF]">
                          {dimension.title}
                        </h3>
                        <p className="text-xs mb-2 text-[#2359FF]">
                          Current: <span className="font-medium">{insight.currentState}</span><br />
                          Target: <span className="font-medium">{insight.targetState}</span><br />
                          Priority: <span className="font-medium" style={{ color: priorityColor }}>{priority}</span>
                        </p>
                        <p className="text-xs text-[#2359FF]">
                          {insight.recommendation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-[#2359FF]">
        <p>Click on any point to see personalized insights</p>
        <p className="text-xs mt-1 opacity-70">
          <span className="inline-block w-3 h-0 border-b border-[rgba(35,89,255,0.8)] border-dashed"></span> Dashed line shows your growth opportunities
        </p>
      </div>
    </div>
  );
};

export default DynamicMasteryDiagram;
