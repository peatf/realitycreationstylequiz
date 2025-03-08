// data/ambitionTargets.js

/**
 * This file defines the ideal target scores for each ambition type in the mastery framework.
 * These targets are used to calculate adjusted targets based on the user's current scores
 * and their selected core ambition.
 */

export const ambitionTargets = {
  Recognition: {
    beliefMindset: 4.2,     // Leans toward Affirmative Visionary
    clarityVision: 4.3,     // Leans toward Focused Visionary
    actionOrientation: 3.9, // Slightly leans toward Decisive Doer
    intuitionStrategy: 3.7, // Slightly leans toward Methodical Planner
    emotionalAlignment: 3.5, // Slightly leans toward Consistently Calibrated
  },
  Precision: {
    beliefMindset: 3.5,     // Moderately leans toward Affirmative Visionary
    clarityVision: 4.8,     // Strongly leans toward Focused Visionary
    actionOrientation: 4.5, // Strongly leans toward Decisive Doer
    intuitionStrategy: 4.7, // Strongly leans toward Methodical Planner
    emotionalAlignment: 4.0, // Moderately leans toward Consistently Calibrated
  },
  Movement: {
    beliefMindset: 4.0,     // Moderately leans toward Affirmative Visionary
    clarityVision: 2.0,     // Leans toward Fluid Dreamer
    actionOrientation: 4.6, // Strongly leans toward Decisive Doer
    intuitionStrategy: 1.8, // Strongly leans toward Instinctual Explorer
    emotionalAlignment: 3.0, // Balanced
  },
  Innovation: {
    beliefMindset: 4.5,     // Strongly leans toward Affirmative Visionary
    clarityVision: 2.5,     // Balanced (slight lean toward Fluid Dreamer)
    actionOrientation: 4.0, // Leans toward Decisive Doer
    intuitionStrategy: 2.0, // Leans toward Instinctual Explorer
    emotionalAlignment: 2.0, // Leans toward Expressively Dynamic
  },
  Sustainability: {
    beliefMindset: 3.5,     // Moderately leans toward Affirmative Visionary
    clarityVision: 4.0,     // Leans toward Focused Visionary
    actionOrientation: 3.2, // Slightly leans toward Contemplative Observer
    intuitionStrategy: 4.2, // Moderately leans toward Methodical Planner
    emotionalAlignment: 4.5, // Strongly leans toward Consistently Calibrated
  },
};

// Helper function to get targets by ambition
export const getTargetsByAmbition = (ambition) => {
  return ambitionTargets[ambition] || null;
};
