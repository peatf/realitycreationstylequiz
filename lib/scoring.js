// lib/scoring.js

import { getQuestionsByDimension } from '@/data/questions';
import { getDimensionState } from '@/data/dimensions';
import { determineProfileId, getProfileById } from '@/data/profiles';

/**
 * Calculates the dimension scores based on the user's answers
 * 
 * @param {Object} answers - Key-value pairs of questionId: answerValue (0-100)
 * @param {Array} questions - Array of question objects
 * @returns {Object} - Results object containing dimension scores, states, and profile
 */
export const calculateResults = (answers, questions) => {
  // Get questions grouped by dimension
  const questionsByDimension = getQuestionsByDimension();
  
  // Map to store dimension scores
  const dimensionScores = {
    beliefMindset: 0,
    clarityVision: 0,
    actionOrientation: 0,
    intuitionStrategy: 0,
    emotionalAlignment: 0
  };
  
  // Map to store dimension states (left, balanced, right)
  const dimensionStates = {
    beliefMindset: 'balanced',
    clarityVision: 'balanced',
    actionOrientation: 'balanced',
    intuitionStrategy: 'balanced',
    emotionalAlignment: 'balanced'
  };
  
  console.log("Raw answers:", answers);
  
  // Calculate average score for each dimension
  Object.entries(questionsByDimension).forEach(([dimension, questionIds]) => {
    // Filter answers to only include questions for this dimension
    const dimensionAnswers = questionIds
      .filter(id => answers[id] !== undefined)
      .map(id => answers[id]);
    
    console.log(`Dimension ${dimension} answers:`, dimensionAnswers);
    
    // Skip if no answers for this dimension
    if (dimensionAnswers.length === 0) {
      // Set default values for demo/preview
      dimensionScores[dimension] = 3; // Middle value
      dimensionStates[dimension] = 'balanced';
      return;
    }
    
    // Calculate average (mean) score for this dimension
    // Normalize slider values (0-100) to score range (1-5)
    const normalizedAnswers = dimensionAnswers.map(value => {
      // Explicitly handle the case where value might be undefined
      if (value === undefined) return 3; // Default to middle value
      
      // Normalize slider values (0-100) to score range (1-5)
      if (value >= 0 && value <= 100) {
        return 1 + (value / 100) * 4;
      }
      return value; // If already on 1-5 scale
    });
    
    console.log(`Dimension ${dimension} normalized:`, normalizedAnswers);
    
    const sum = normalizedAnswers.reduce((acc, val) => acc + val, 0);
    const average = sum / normalizedAnswers.length;
    
    // Round to 2 decimal places
    dimensionScores[dimension] = Math.round(average * 100) / 100;
    
    // Determine dimension state based on score
    dimensionStates[dimension] = getDimensionState(dimension, dimensionScores[dimension]);
    
    console.log(`Dimension ${dimension} score:`, dimensionScores[dimension]);
    console.log(`Dimension ${dimension} state:`, dimensionStates[dimension]);
  });
  
  // Handle edge cases and tie-breaking for scores near boundaries
  Object.entries(dimensionScores).forEach(([dimension, score]) => {
    // Special handling for scores very close to boundaries
    if (Math.abs(score - 2.5) < 0.05) {
      // If score is between 2.45 and 2.55, consider other factors or default to balanced
      dimensionStates[dimension] = 'balanced';
    }
    else if (Math.abs(score - 4.0) < 0.05) {
      // If score is between 3.95 and 4.05, lean toward 'right' to break the tie
      dimensionStates[dimension] = 'right';
    }
  });
  
  // Determine the final profile ID based on dimension states
    const profileId = determineProfileId(dimensionStates, dimensionScores);

  
  console.log("Final dimension scores:", dimensionScores);
  console.log("Final dimension states:", dimensionStates);
  console.log("Determined profile ID:", profileId);
  
  // Get the profile details
  const profileResult = getProfileById(profileId);
  
  return {
    dimensionScores,
    dimensionStates,
    profileResult
  };
};

/**
 * Converts a raw slider value (0-100) to a score value (1-5)
 * 
 * @param {number} sliderValue - The raw slider value (0-100)
 * @returns {number} - The normalized score value (1-5)
 */
export const sliderValueToScore = (sliderValue) => {
  // Handle undefined or null values
  if (sliderValue === undefined || sliderValue === null) {
    return 3; // Default to middle value
  }
  
  return 1 + (sliderValue / 100) * 4;
};

/**
 * Converts a score value (1-5) to a percentage (0-100) for display
 * 
 * @param {number} score - The score value (1-5)
 * @returns {number} - The percentage value (0-100)
 */
export const scoreToPercentage = (score) => {
  // Check if score is undefined or null
  if (score === undefined || score === null) {
    return 50; // Default to middle value
  }
  
  // Convert score to percentage
  const percentage = Math.round(((score - 1) / 4) * 100);
  
  // Clamp value to ensure it's between 0-100
  return Math.max(0, Math.min(100, percentage));
};

/**
 * Formats a score for display, rounding to 1 decimal place
 * 
 * @param {number} score - The raw score
 * @returns {string} - The formatted score
 */
export const formatScore = (score) => {
  if (score === undefined || score === null) {
    return "3.0"; // Default to middle value
  }
  return score.toFixed(1);
};
