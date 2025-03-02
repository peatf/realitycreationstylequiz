'use client';

import React, { createContext, useContext, useState } from 'react';
import { calculateResults } from '@/lib/scoring';

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
  
  const nextQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }));
  };
  
  const prevQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
    }));
  };
  
  const calculateAndSetResults = (questionsData) => {
    const results = calculateResults(state.answers, questionsData);
    setState(prev => ({
      ...prev,
      currentStep: 'results',
      dimensionScores: results.dimensionScores,
      dimensionStates: results.dimensionStates,
      profileResult: results.profileResult
    }));
  };
  
  const restartQuiz = () => setState(initialState);
  
  // Create context value object
  const value = {
    ...state,
    startQuiz,
    updateAnswer,
    nextQuestion,
    prevQuestion,
    calculateAndSetResults,
    restartQuiz
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
