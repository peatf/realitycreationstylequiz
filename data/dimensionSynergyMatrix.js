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
      influence: 0.8, // Increased from 0.7 - strong connection between beliefs and vision
      insightLeft: "Your questioning mindset may lead to evolving, adaptable visions rather than fixed goals.",
      insightRight: "Your affirmative mindset can amplify the power of your precise vision.",
      insightBalanced: "Your balanced approach to belief allows you to both question and affirm your vision as needed."
    },
    actionOrientation: {
      influence: 0.8,
      insightLeft: "Your analytical approach can lead to more thoughtful, deliberate action.",
      insightRight: "Your belief-focused approach naturally accelerates decisive action.",
      insightBalanced: "Your integrated belief approach helps you know when to act decisively and when to pause for reflection."
    },
    intuitionStrategy: {
      influence: 0.6, // Increased from 0.5 - moderate but significant connection
      insightLeft: "Your questioning nature pairs well with strategic planning.",
      insightRight: "Your belief in possibilities enhances your intuitive insights.",
      insightBalanced: "Your balanced belief system allows you to trust intuition while maintaining healthy verification."
    },
    emotionalAlignment: {
      influence: 0.6,
      insightLeft: "Your critical thinking helps process emotions with clarity.",
      insightRight: "Your affirmative mindset supports positive emotional states.",
      insightBalanced: "Your balanced belief approach helps you process emotions both analytically and appreciatively."
    }
  },
  
  // How Clarity of Vision influences other dimensions
  clarityVision: {
    beliefMindset: {
      influence: 0.7, // Increased from 0.6 - stronger reciprocal relationship
      insightLeft: "Your flexible goals can help you stay open to new beliefs.",
      insightRight: "Your detailed vision strengthens your belief in specific outcomes.",
      insightBalanced: "Your balanced vision approach allows your beliefs to be both structured and adaptable."
    },
    actionOrientation: {
      influence: 0.9, // Increased to 0.9 - very strong connection between vision and action
      insightLeft: "Your adaptable vision allows for a more reflective action approach.",
      insightRight: "Your clear vision naturally facilitates decisive, targeted action.",
      insightBalanced: "Your balanced vision provides both clear direction and room for adaptation in your actions."
    },
    intuitionStrategy: {
      influence: 0.7,
      insightLeft: "Your fluid goals work well with intuitive navigation.",
      insightRight: "Your detailed vision amplifies the effectiveness of strategic planning.",
      insightBalanced: "Your balanced vision approach complements both intuitive exploration and strategic planning."
    },
    emotionalAlignment: {
      influence: 0.5,
      insightLeft: "Your adaptable goals support a wide range of emotional expression.",
      insightRight: "Your clear vision helps maintain focused emotional states.",
      insightBalanced: "Your balanced vision allows you to align emotions with goals while remaining flexible."
    }
  },
  
  // How Action Orientation influences other dimensions
  actionOrientation: {
    beliefMindset: {
      influence: 0.5,
      insightLeft: "Your contemplative approach deepens your critical understanding.",
      insightRight: "Your decisive action strengthens your belief through results.",
      insightBalanced: "Your measured action approach provides both evidence and experience to inform your beliefs."
    },
    clarityVision: {
      influence: 0.7, // Increased from 0.6 - action feedback improves vision
      insightLeft: "Your reflective nature supports evolving, adaptable goals.",
      insightRight: "Your consistent action helps crystallize and refine your vision.",
      insightBalanced: "Your balanced action approach helps you both envision clearly and adapt flexibly."
    },
    intuitionStrategy: {
      influence: 0.8, // Increased from 0.7 - strong connection
      insightLeft: "Your contemplative pace enhances intuitive insights.",
      insightRight: "Your action orientation strengthens strategic implementation.",
      insightBalanced: "Your measured movement enhances both intuitive flow and strategic execution."
    },
    emotionalAlignment: {
      influence: 0.7,
      insightLeft: "Your inner focus helps process emotions authentically.",
      insightRight: "Your action-first approach helps regulate emotional states.",
      insightBalanced: "Your balanced action approach supports both emotional processing and regulation."
    }
  },
  
  // How Intuition vs. Strategy influences other dimensions
  intuitionStrategy: {
    beliefMindset: {
      influence: 0.6,
      insightLeft: "Your intuitive nature supports critical questioning of conventions.",
      insightRight: "Your methodical approach provides evidence that builds belief.",
      insightBalanced: "Your integrated approach to intuition and strategy gives you multiple ways to develop beliefs."
    },
    clarityVision: {
      influence: 0.7,
      insightLeft: "Your spontaneous insights enrich your adaptable vision.",
      insightRight: "Your structured approach enhances vision clarity and precision.",
      insightBalanced: "Your balanced approach allows you to both structure your vision and remain open to inspiration."
    },
    actionOrientation: {
      influence: 0.8,
      insightLeft: "Your intuitive flow supports a thoughtful action approach.",
      insightRight: "Your strategic planning facilitates consistent, effective action.",
      insightBalanced: "Your integrated approach helps you take action that is both strategic and intuitively aligned."
    },
    emotionalAlignment: {
      influence: 0.7, // Increased from 0.6 - stronger connection with emotions
      insightLeft: "Your intuitive nature embraces emotional diversity.",
      insightRight: "Your structured approach supports emotional regulation.",
      insightBalanced: "Your balanced approach helps you both feel and manage emotions effectively."
    }
  },
  
  // How Emotional Alignment influences other dimensions
  emotionalAlignment: {
    beliefMindset: {
      influence: 0.7, // Increased from 0.6 - emotions significantly impact beliefs
      insightLeft: "Your emotional depth enriches critical understanding.",
      insightRight: "Your emotional stability supports consistent belief.",
      insightBalanced: "Your balanced emotional approach helps you form beliefs that are both stable and authentic."
    },
    clarityVision: {
      influence: 0.6, // Increased from 0.5 - moderate but important connection
      insightLeft: "Your emotional range fuels an evolving, adaptable vision.",
      insightRight: "Your emotional stability maintains focus on your precise vision.",
      insightBalanced: "Your emotional balance helps you maintain vision clarity without rigidity."
    },
    actionOrientation: {
      influence: 0.8, // Increased from 0.7 - strong emotional influence on action
      insightLeft: "Your emotional awareness enhances contemplative action.",
      insightRight: "Your emotional stability supports consistent, decisive action.",
      insightBalanced: "Your balanced emotional approach helps you take action that is both considered and decisive."
    },
    intuitionStrategy: {
      influence: 0.9, // Increased to 0.9 - very strong connection between emotions and intuition
      insightLeft: "Your emotional expressiveness amplifies intuitive insights.",
      insightRight: "Your emotional stability enhances methodical planning.",
      insightBalanced: "Your emotional balance supports both intuitive processing and strategic thinking."
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
  } else if (synergy.insightBalanced) {
    insight = synergy.insightBalanced;  // Use custom balanced insight if available
  } else {
    // Improved generic message for balanced state
    insight = `Your balanced approach to ${fromDimension} supports your ${toDimension} in a way that integrates multiple perspectives.`;
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
        // Dynamic scaling based on how extreme the score is
        const fromScore = dimensionScores[fromDimension];
        let intensityFactor = 1.0;
        
        // Increase influence for more extreme scores
        if (fromScore <= 1.5 || fromScore >= 4.5) {
          intensityFactor = 1.3; // 30% boost for very extreme scores
        } else if (fromScore <= 2.0 || fromScore >= 4.0) {
          intensityFactor = 1.15; // 15% boost for moderately extreme scores
        }
        
        allSynergies.push({
          fromDimension,
          toDimension,
          influence: synergy.influence * intensityFactor, // Apply dynamic scaling
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
