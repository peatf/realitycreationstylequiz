'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { calculateResults } from '@/lib/scoring';

// Define the initial state
const initialState = {
  // Quiz flow state
  currentStep: 'intro', // 'intro', 'questions', 'results'
  currentQuestionIndex: 0,
  
  // Answers state - will be populated with question IDs as keys and values 1-5
  answers: {},
  
  // Results state
  dimensionScores: {
    beliefMindset: 0,      // 1-5 scale
    clarityVision: 0,      // 1-5 scale
    actionOrientation: 0,  // 1-5 scale
    intuitionStrategy: 0,  // 1-5 scale
    emotionalAlignment: 0, // 1-5 scale
  },
  dimensionStates: {
    beliefMindset: null,      // 'left', 'balanced', 'right'
    clarityVision: null,      // 'left', 'balanced', 'right'
    actionOrientation: null,  // 'left', 'balanced', 'right'
    intuitionStrategy: null,  // 'left', 'balanced', 'right'
    emotionalAlignment: null, // 'left', 'balanced', 'right'
  },
  profileResult: null,       // The final profile based on combination of dimension states
};

// Create the context
const QuizContext = createContext();

// Create a provider component
export function QuizProvider({ children }) {
  const [state, setState] = useState(initialState);
  
  // Function to start the quiz
  const startQuiz = () => {
    setState(prev => ({
      ...prev,
      currentStep: 'questions',
    }));
  };
  
  // Function to update an answer
  const updateAnswer = (questionId, dimensionKey, value) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value
      }
    }));
  };
  
  // Function to move to the next question
  const nextQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }));
  };
  
  // Function to move to the previous question
  const prevQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
    }));
  };
  
  // Function to calculate and set results
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
  
  // Function to restart the quiz
  const restartQuiz = () => {
    setState(initialState);
  };
  
  // Create a value object to expose state and functions
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

// Custom hook to use the quiz context
export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
