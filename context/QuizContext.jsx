'use client';

import React, { createContext, useContext, useState } from 'react';
import { calculateResults } from '@/lib/scoring';
import generateMasteryInsights from '@/lib/mastery-insights-generator';

// Initial state
const initialState = {
  currentStep: 'intro',
  currentQuestionIndex: 0,
  answers: {},
  dimensionScores: {
    beliefMindset: 0,
    clarityVision: 0,
    actionOrientation: 0,
    intuitionStrategy: 0,
    emotionalAlignment: 0,
  },
  dimensionStates: {
    beliefMindset: 'balanced',
    clarityVision: 'balanced',
    actionOrientation: 'balanced',
    intuitionStrategy: 'balanced',
    emotionalAlignment: 'balanced',
  },
  profileResult: null,
  
  // New mastery quiz state
  coreAmbition: null,
  idealCreativeState: null,
  adaptiveMasteryMetric: null,
  
  // Dynamic mastery calculation state
  adjustedTargets: {},
  growthPotential: {},
  priorityLevels: {},
  synergyInsights: [],
  dimensionInsights: {},
  summaryInsights: {},
  personalizedPractices: [],
  
  // Mastery quiz flow control
  masteryQuizCompleted: false,
};

// Create context with default value
const QuizContext = createContext(initialState);

// Provider component
export function QuizProvider({ children }) {
  // Use useState with initial state
  const [state, setState] = useState(initialState);
  
  // Context functions
  const startQuiz = () => setState(prev => ({ ...prev, currentStep: 'questions' }));
  
  const updateAnswer = (questionId, dimensionKey, value) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value }
    }));
  };
  
  // Updated to support jumping multiple questions
  const nextQuestion = (steps = 1) => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + steps,
    }));
  };
  
  // Updated to support jumping back multiple questions
  const prevQuestion = (steps = 1) => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - steps),
    }));
  };
  
  // Calculate primary quiz results and transition to mastery quiz
  const calculateAndSetResults = (questionsData) => {
    const results = calculateResults(state.answers, questionsData);
    setState(prev => ({
      ...prev,
      currentStep: 'masteryQuiz', // Change to masteryQuiz instead of results
      dimensionScores: results.dimensionScores,
      dimensionStates: results.dimensionStates,
      profileResult: results.profileResult
    }));
  };
  
  // New mastery quiz functions
  const setCoreAmbition = (ambition) => {
    setState(prev => ({ ...prev, coreAmbition: ambition }));
  };
  
  const setIdealCreativeState = (creativeState) => {
    setState(prev => ({ ...prev, idealCreativeState: creativeState }));
  };
  
  const setAdaptiveMasteryMetric = (metric) => {
    setState(prev => ({ ...prev, adaptiveMasteryMetric: metric }));
  };
  
  // Calculate mastery results based on primary quiz results and mastery quiz selections
  const calculateMasteryResults = () => {
    // Validate that all required selections have been made
    if (!state.coreAmbition || !state.idealCreativeState || !state.adaptiveMasteryMetric) {
      console.error('Cannot calculate mastery results: missing required selections');
      return;
    }
    
    // Generate mastery insights
    const insights = generateMasteryInsights(
      state.dimensionScores,
      state.dimensionStates,
      state.coreAmbition,
      state.idealCreativeState,
      state.adaptiveMasteryMetric
    );
    
    // Update state with mastery results
    setState(prev => ({
      ...prev,
      adjustedTargets: insights.adjustedTargets,
      growthPotential: insights.growthPotential,
      priorityLevels: insights.priorityLevels,
      synergyInsights: insights.synergyInsights,
      dimensionInsights: insights.dimensionInsights,
      summaryInsights: insights.summaryInsights,
      personalizedPractices: insights.personalizedPractices,
      masteryQuizCompleted: true,
      currentStep: 'results' // Now transition to results page
    }));
  };
  
  // Skip mastery quiz (for testing or if user chooses to skip)
  const skipMasteryQuiz = () => {
    setState(prev => ({
      ...prev,
      currentStep: 'results',
      masteryQuizCompleted: false
    }));
  };
  
  // Reset everything and start over
  const restartQuiz = () => setState(initialState);
  
  // Create context value object with new functions
  const value = {
    ...state,
    startQuiz,
    updateAnswer,
    nextQuestion,
    prevQuestion,
    calculateAndSetResults,
    restartQuiz,
    
    // New mastery quiz functions
    setCoreAmbition,
    setIdealCreativeState,
    setAdaptiveMasteryMetric,
    calculateMasteryResults,
    skipMasteryQuiz
  };
  
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

// Custom hook with better error handling for SSR
export function useQuiz() {
  // Add safer context access for SSR
  const context = useContext(QuizContext);
  // Return initialState as fallback instead of throwing during SSR
  return context || initialState;
}
