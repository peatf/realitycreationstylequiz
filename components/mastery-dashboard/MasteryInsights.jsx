// components/mastery-dashboard/MasteryInsights.jsx
'use client';

import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';

const MasteryInsights = () => {
  const {
    coreAmbition,
    idealCreativeState,
    adaptiveMasteryMetric,
    summaryInsights,
    synergyInsights,
    personalizedPractices
  } = useQuiz();

  // State for active tab
  const [activeTab, setActiveTab] = useState('summary');

  // Render loading state if insights aren't available yet
  if (!summaryInsights || !coreAmbition) {
    return null;
  }

  return (
    <div className="mt-6 mb-8">
      <h2 className="text-xl font-light mb-4 text-center gradient-text">
        Your Personalized Mastery Insights
      </h2>

      {/* Tab navigation */}
      <div className="flex justify-center mb-4">
        <div className="flex rounded-full bg-[rgba(235,240,180,0.5)] p-1">
          <button
            className={`mastery-insights-tab ${
              activeTab === 'summary' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('summary')}
          >
            Summary
          </button>
          <button
            className={`mastery-insights-tab ${
              activeTab === 'synergies' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('synergies')}
          >
            Synergies
          </button>
          <button
            className={`mastery-insights-tab ${
              activeTab === 'practices' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('practices')}
          >
            Practices
          </button>
        </div>
      </div>

      {/* Tab content */}
      <div className="mastery-insights-content">
        {/* Summary tab */}
        {activeTab === 'summary' && (
          <div className="space-y-4">
            {/* Only render if coreAmbition and summaryInsights exist */}
            {coreAmbition && summaryInsights && summaryInsights.ambitionInsight && (
              <div className="mastery-insights-card">
                <h3 className="text-base font-medium mb-2 text-[#2359FF]">
                  Your Core Ambition: {coreAmbition}
                </h3>
                <p className="text-sm text-[#2359FF]">
                  {summaryInsights.ambitionInsight}
                </p>
              </div>
            )}

            {idealCreativeState && summaryInsights && summaryInsights.creativeStateInsight && (
              <div className="mastery-insights-card">
                <h3 className="text-base font-medium mb-2 text-[#2359FF]">
                  Your Ideal Creative State: {idealCreativeState}
                </h3>
                <p className="text-sm text-[#2359FF]">
                  {summaryInsights.creativeStateInsight}
                </p>
              </div>
            )}

            {adaptiveMasteryMetric && summaryInsights && summaryInsights.masteryMetricInsight && (
              <div className="mastery-insights-card">
                <h3 className="text-base font-medium mb-2 text-[#2359FF]">
                  Your Mastery Metric: {adaptiveMasteryMetric}
                </h3>
                <p className="text-sm text-[#2359FF]">
                  {summaryInsights.masteryMetricInsight}
                </p>
              </div>
            )}

            {summaryInsights && summaryInsights.highPriorityDimensions && 
              summaryInsights.highPriorityDimensions.length > 0 && (
              <div className="mastery-insights-card">
                <h3 className="text-base font-medium mb-2 text-[#2359FF]">
                  Your Priority Focus Areas
                </h3>
                <ul className="list-disc list-inside text-sm text-[#2359FF] space-y-1">
                  {summaryInsights.highPriorityDimensions.map(dimension => (
                    <li key={dimension}>
                      {dimension.replace(/([A-Z])/g, ' $1').trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Fall back message if no data available */}
            {(!summaryInsights || !coreAmbition) && (
              <div className="mastery-insights-card">
                <p className="text-sm text-[#2359FF] italic">
                  Complete the mastery quiz to see personalized insight summaries.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Synergies tab */}
        {activeTab === 'synergies' && (
          <div className="space-y-3">
            <p className="text-sm text-[#2359FF] mb-4">
              Discover how changes in one dimension can positively impact others:
            </p>
            
           {synergyInsights && synergyInsights.length > 0 ? (
              synergyInsights.map((synergy, index) => {
                // Handle both direct structure and nested structure (with synergy.synergy)
                const fromDimension = synergy.fromDimension || (synergy.synergy && synergy.synergy.fromDimension);
                const toDimension = synergy.toDimension || (synergy.synergy && synergy.synergy.toDimension);
                const insight = synergy.insight || (synergy.synergy && synergy.synergy.insight);
                
                // Skip rendering if we don't have the required fields
                if (!fromDimension || !toDimension || !insight) return null;
                
                return (
                  <div key={index} className="mastery-insights-card">
                    <div className="flex items-center mb-1">
                      <div className="w-4 h-0 border-t border-blue-600"></div>
                      <div className="w-4 h-4 mx-1 text-blue-600 flex items-center justify-center">→</div>
                      <div className="w-4 h-0 border-t border-blue-600"></div>
                    </div>
                    <h3 className="text-sm font-medium mb-1 text-[#2359FF]">
                      {fromDimension.replace(/([A-Z])/g, ' $1').trim()} →{' '}
                      {toDimension.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-xs text-[#2359FF]">{insight}</p>
                  </div>
                );
              })
            ) : (
              <div className="mastery-insights-card">
                <p className="text-sm text-[#2359FF] italic">
                  No significant dimension synergies identified yet.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Practices tab */}
        {activeTab === 'practices' && (
          <div className="space-y-2">
            <p className="text-sm text-[#2359FF] mb-4">
              These personalized practices are designed to support your growth based on your unique profile:
            </p>
            
            {personalizedPractices && personalizedPractices.length > 0 ? (
              personalizedPractices.map((practice, index) => (
                <div key={index} className="mastery-insights-card flex items-start">
                  <div className="text-lg text-[#2359FF] mr-2">•</div>
                  <p className="text-sm text-[#2359FF]">{practice}</p>
                </div>
              ))
            ) : (
              <div className="mastery-insights-card">
                <p className="text-sm text-[#2359FF] italic">
                  Complete the mastery quiz to receive personalized practices.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MasteryInsights;
