// data/dimensionSynergyMatrix.js

/**
 * This file defines the synergy relationships between different dimensions.
 * A synergy defines how changes in one dimension can positively impact another dimension.
 * These relationships will be used to generate personalized cross-dimensional insights.
 */

// Synergy matrix defines how dimensions influence each other
export const dimensionSynergyMatrix = {
  // How Belief & Mindset influences other dimensions
  beliefMindset: {
    clarityVision: {
      influence: 0.7,
      insightLeft: "Your questioning mindset may lead to evolving, adaptable visions rather than fixed goals.",
      insightRight: "Your affirmative mindset can amplify the power of your precise vision."
    },
    actionOrientation: {
      influence: 0.8,
      insightLeft: "Your analytical approach can lead to more thoughtful, deliberate action.",
      insightRight: "Your belief-focused approach naturally accelerates decisive action."
    },
    intuitionStrategy: {
      influence: 0.5,
      insightLeft: "Your questioning nature pairs well with strategic planning.",
      insightRight: "Your belief in possibilities enhances your intuitive insights."
    },
    emotionalAlignment: {
      influence: 0.6,
      insightLeft: "Your critical thinking helps process emotions with clarity.",
      insightRight: "Your affirmative mindset supports positive emotional states."
    }
  },
  
  // How Clarity of Vision influences other dimensions
  clarityVision: {
    beliefMindset: {
      influence: 0.6,
      insightLeft: "Your flexible goals can help you stay open to new beliefs.",
      insightRight: "Your detailed vision strengthens your belief in specific outcomes."
    },
    actionOrientation: {
      influence: 0.8,
      insightLeft: "Your adaptable vision allows for a more reflective action approach.",
      insightRight: "Your clear vision naturally facilitates decisive, targeted action."
    },
    intuitionStrategy: {
      influence: 0.7,
      insightLeft: "Your fluid goals work well with intuitive navigation.",
      insightRight: "Your detailed vision amplifies the effectiveness of strategic planning."
    },
    emotionalAlignment: {
      influence: 0.5,
      insightLeft: "Your adaptable goals support a wide range of emotional expression.",
      insightRight: "Your clear vision helps maintain focused emotional states."
    }
  },
  
  // How Action Orientation influences other dimensions
  actionOrientation: {
    beliefMindset: {
      influence: 0.5,
      insightLeft: "Your contemplative approach deepens your critical understanding.",
      insightRight: "Your decisive action strengthens your belief through results."
    },
    clarityVision: {
      influence: 0.6,
      insightLeft: "Your reflective nature supports evolving, adaptable goals.",
      insightRight: "Your consistent action helps crystallize and refine your vision."
    },
    intuitionStrategy: {
      influence: 0.7,
      insightLeft: "Your contemplative pace enhances intuitive insights.",
      insightRight: "Your action orientation strengthens strategic implementation."
    },
    emotionalAlignment: {
      influence: 0.7,
      insightLeft: "Your inner focus helps process emotions authentically.",
      insightRight: "Your action-first approach helps regulate emotional states."
    }
  },
  
  // How Intuition vs. Strategy influences other dimensions
  intuitionStrategy: {
    beliefMindset: {
      influence: 0.6,
      insightLeft: "Your intuitive nature supports critical questioning of conventions.",
      insightRight: "Your methodical approach provides evidence that builds belief."
    },
    clarityVision: {
      influence: 0.7,
      insightLeft: "Your spontaneous insights enrich your adaptable vision.",
      insightRight: "Your structured approach enhances vision clarity and precision."
    },
    actionOrientation: {
      influence: 0.8,
      insightLeft: "Your intuitive flow supports a thoughtful action approach.",
      insightRight: "Your strategic planning facilitates consistent, effective action."
    },
    emotionalAlignment: {
      influence: 0.6,
      insightLeft: "Your intuitive nature embraces emotional diversity.",
      insightRight: "Your structured approach supports emotional regulation."
    }
  },
  
  // How Emotional Alignment influences other dimensions
  emotionalAlignment: {
    beliefMindset: {
      influence: 0.6,
      insightLeft: "Your emotional depth enriches critical understanding.",
      insightRight: "Your emotional stability supports consistent belief."
    },
    clarityVision: {
      influence: 0.5,
      insightLeft: "Your emotional range fuels an evolving, adaptable vision.",
      insightRight: "Your emotional stability maintains focus on your precise vision."
    },
    actionOrientation: {
      influence: 0.7,
      insightLeft: "Your emotional awareness enhances contemplative action.",
      insightRight: "Your emotional stability supports consistent, decisive action."
    },
    intuitionStrategy: {
      influence: 0.8,
      insightLeft: "Your emotional expressiveness amplifies intuitive insights.",
      insightRight: "Your emotional stability enhances methodical planning."
    }
  }
};

/**
 * Gets synergy insights between two dimensions
 * @param {string} fromDimension - The dimension creating the influence
 * @param {string} toDimension - The dimension being influenced
 * @param {string} fromState - The state of the influencing dimension (left, balanced, right)
 * @returns {Object|null} - Synergy object or null if not found
 */
export const getSynergyInsight = (fromDimension, toDimension, fromState) => {
  // Return null if same dimension
  if (fromDimension === toDimension) return null;
  
  // Check if synergy exists
  if (!dimensionSynergyMatrix[fromDimension] || 
      !dimensionSynergyMatrix[fromDimension][toDimension]) {
    return null;
  }
  
  // Get synergy
  const synergy = dimensionSynergyMatrix[fromDimension][toDimension];
  
  // Determine which insight to return based on state
  let insight = '';
  if (fromState === 'left') {
    insight = synergy.insightLeft;
  } else if (fromState === 'right') {
    insight = synergy.insightRight;
  } else {
    // For balanced state, use a generic insight
    insight = `Changes in your ${fromDimension} approach can influence your ${toDimension}.`;
  }
  
  return {
    influence: synergy.influence,
    insight
  };
};

/**
 * Finds the most influential synergies for a given set of dimension scores
 * @param {Object} dimensionScores - Current dimension scores
 * @param {Object} dimensionStates - Current dimension states
 * @returns {Array} - Array of most influential synergies
 */
export const getTopSynergies = (dimensionScores, dimensionStates) => {
  const allSynergies = [];
  
  // Generate all possible synergies
  Object.keys(dimensionSynergyMatrix).forEach(fromDimension => {
    Object.keys(dimensionSynergyMatrix[fromDimension]).forEach(toDimension => {
      const fromState = dimensionStates[fromDimension];
      const synergy = getSynergyInsight(fromDimension, toDimension, fromState);
      
      if (synergy) {
        allSynergies.push({
          fromDimension,
          toDimension,
          influence: synergy.influence,
          insight: synergy.insight
        });
      }
    });
  });
  
  // Sort by influence score (highest first)
  allSynergies.sort((a, b) => b.influence - a.influence);
  
  // Return top 5 synergies
  return allSynergies.slice(0, 5);
};
