// lib/mastery-insights-generator.js

import { getTargetsByAmbition } from '@/data/ambitionTargets';
import { getSynergyInsight, getTopSynergies } from '@/data/dimensionSynergyMatrix';
import { getDimensionById } from '@/data/dimensions';
import { getRecommendation } from '@/data/recommendations';
import { getAmbitionPractices, getCreativeStatePractices, getMasteryMetricPractices, getDimensionPractices } from '@/data/practices';

/**
 * Generates mastery insights based on user's quiz responses and secondary quiz selections
 * @param {Object} dimensionScores - User's current dimension scores
 * @param {Object} dimensionStates - User's current dimension states
 * @param {string} coreAmbition - User's selected ambition (Recognition, Precision, etc.)
 * @param {string} idealCreativeState - User's selected creative state
 * @param {string} adaptiveMasteryMetric - User's selected mastery metric
 * @returns {Object} - Comprehensive insights object
 */
export const generateMasteryInsights = (
  dimensionScores,
  dimensionStates,
  coreAmbition,
  idealCreativeState,
  adaptiveMasteryMetric
) => {
  // 1. Calculate adjusted targets based on ambition
  const adjustedTargets = calculateAdjustedTargets(dimensionScores, coreAmbition);
  
  // 2. Calculate growth potential for each dimension
  const growthPotential = calculateGrowthPotential(dimensionScores, adjustedTargets);
  
  // 3. Determine priority levels for each dimension based on growth potential and ambition
  const priorityLevels = calculatePriorityLevels(dimensionScores, growthPotential, coreAmbition);
  
  // 4. Generate dimension-specific insights
  const dimensionInsights = generateDimensionInsights(
    dimensionScores, 
    dimensionStates,
    adjustedTargets,
    growthPotential,
    priorityLevels,
    coreAmbition,
    idealCreativeState
  );
  
  // 5. Generate cross-dimensional synergy insights
  const synergyInsights = generateSynergyInsights(
    dimensionScores,
    dimensionStates,
    growthPotential,
    priorityLevels
  );
  
  // 6. Generate high-level summary insights
  const summaryInsights = generateSummaryInsights(
    dimensionScores,
    adjustedTargets,
    priorityLevels,
    coreAmbition,
    idealCreativeState,
    adaptiveMasteryMetric
  );
  
  // 7. Generate personalized practices
  const personalizedPractices = generatePersonalizedPractices(
    dimensionStates,
    priorityLevels,
    coreAmbition,
    idealCreativeState,
    adaptiveMasteryMetric
  );
  
  // Return comprehensive insights
  return {
    adjustedTargets,
    growthPotential,
    priorityLevels,
    dimensionInsights,
    synergyInsights,
    summaryInsights,
    personalizedPractices
  };
};

/**
 * Calculate adjusted targets based on the user's current scores and selected ambition
 * @param {Object} currentScores - User's current dimension scores
 * @param {string} ambition - User's selected ambition
 * @returns {Object} - Adjusted target scores for each dimension
 */
export const calculateAdjustedTargets = (currentScores, ambition) => {
  // Get ideal targets for the selected ambition
  const idealTargets = getTargetsByAmbition(ambition);
  
  // If no ideal targets are found, return current scores as targets
  if (!idealTargets) {
    return { ...currentScores };
  }
  
  // Apply character-aware adjustment logic to set realistic targets
  const adjustedTargets = {};
  
  Object.keys(currentScores).forEach(dimension => {
    const currentScore = currentScores[dimension];
    const ambitionTarget = idealTargets[dimension];
    
    adjustedTargets[dimension] = realisticCharacterBasedTarget(currentScore, ambitionTarget);
  });
  
  return adjustedTargets;
};

/**
 * Calculate realistic targets that respect the user's natural character traits
 * @param {number} currentScore - User's current score for a dimension
 * @param {number} ambitionTarget - Ideal target score for the ambition
 * @returns {number} - Adjusted, realistic target score
 */
function realisticCharacterBasedTarget(currentScore, ambitionTarget) {
  // If there's no ambition target, return current score
  if (ambitionTarget === undefined || ambitionTarget === null) {
    return currentScore;
  }
  
  const gap = Math.abs(ambitionTarget - currentScore);
  const direction = Math.sign(ambitionTarget - currentScore);
  
  // Apply realistic adjustment based on gap size
  if (gap > 2.5) {
    // For very large gaps, suggest more modest improvement
    return currentScore + (direction * 0.7);
  } else if (gap > 1.5) {
    // For large gaps, suggest moderate improvement
    return currentScore + (direction * 0.5);
  } else if (gap > 0.5) {
    // For moderate gaps, suggest small improvement
    return currentScore + (direction * 0.3);
  }
  
  // For small gaps, the ambition target is already realistic
  return ambitionTarget;
}

/**
 * Calculate growth potential for each dimension
 * @param {Object} currentScores - User's current dimension scores
 * @param {Object} adjustedTargets - Adjusted target scores
 * @returns {Object} - Growth potential for each dimension
 */
export const calculateGrowthPotential = (currentScores, adjustedTargets) => {
  const growthPotential = {};
  
  Object.keys(currentScores).forEach(dimension => {
    const current = currentScores[dimension];
    const target = adjustedTargets[dimension];
    
    // Calculate absolute growth value
    growthPotential[dimension] = Math.abs(target - current);
  });
  
  return growthPotential;
};

/**
 * Calculate priority levels for each dimension based on growth potential
 * and user's selected ambition
 * @param {Object} currentScores - User's current dimension scores
 * @param {Object} growthPotential - Growth potential for each dimension
 * @param {string} coreAmbition - User's selected ambition
 * @returns {Object} - Priority level for each dimension
 */
export const calculatePriorityLevels = (currentScores, growthPotential, coreAmbition) => {
  const priorityLevels = {};
  
  // Ambition-specific priority boosts
  const ambitionPriorityBoosts = {
    Recognition: {
      beliefMindset: 0.2,      // Boost belief for recognition
      clarityVision: 0.1,
      actionOrientation: 0.0,
      intuitionStrategy: 0.0,
      emotionalAlignment: 0.1
    },
    Precision: {
      beliefMindset: 0.0,
      clarityVision: 0.2,      // Boost vision for precision
      actionOrientation: 0.1,
      intuitionStrategy: 0.2,   // Boost strategy for precision
      emotionalAlignment: 0.0
    },
    Movement: {
      beliefMindset: 0.0,
      clarityVision: 0.0,
      actionOrientation: 0.2,   // Boost action for movement
      intuitionStrategy: 0.1,
      emotionalAlignment: 0.1
    },
    Innovation: {
      beliefMindset: 0.1,
      clarityVision: 0.1,
      actionOrientation: 0.0,
      intuitionStrategy: 0.2,   // Boost intuition for innovation
      emotionalAlignment: 0.1
    },
    Sustainability: {
      beliefMindset: 0.0,
      clarityVision: 0.1,
      actionOrientation: 0.0,
      intuitionStrategy: 0.1,
      emotionalAlignment: 0.2   // Boost emotional alignment for sustainability
    }
  };
  
  Object.keys(growthPotential).forEach(dimension => {
    const growth = growthPotential[dimension];
    const currentScore = currentScores[dimension];
    
    // Apply ambition-specific boost if available
    let adjustedGrowth = growth;
    if (coreAmbition && ambitionPriorityBoosts[coreAmbition] && 
        ambitionPriorityBoosts[coreAmbition][dimension]) {
      adjustedGrowth += ambitionPriorityBoosts[coreAmbition][dimension];
    }
    
    priorityLevels[dimension] = getPriorityLevelCharacterAware(currentScore, adjustedGrowth);
  });
  
  return priorityLevels;
};

/**
 * Determine priority level based on current score and growth potential
 * @param {number} currentScore - User's current score for a dimension
 * @param {number} growth - Growth potential for the dimension
 * @returns {string} - Priority level (High, Moderate, Meaningful, Minimal)
 */
function getPriorityLevelCharacterAware(currentScore, growth) {
  // Extreme scores with significant growth have higher priority
  if ((currentScore <= 2.0 || currentScore >= 4.0) && growth >= 0.5) {
    return 'High';
  }
  
  // Significant growth has moderate priority
  if (growth >= 0.4) {
    return 'Moderate';
  }
  
  // Noticeable growth has meaningful priority
  if (growth >= 0.2) {
    return 'Meaningful';
  }
  
  // Minimal growth has low priority
  return 'Minimal';
}

/**
 * Generate dimension-specific insights
 * @param {Object} dimensionScores - User's current dimension scores
 * @param {Object} dimensionStates - User's current dimension states
 * @param {Object} adjustedTargets - Adjusted target scores
 * @param {Object} growthPotential - Growth potential for each dimension
 * @param {Object} priorityLevels - Priority level for each dimension
 * @param {string} coreAmbition - User's selected ambition
 * @param {string} idealCreativeState - User's selected creative state
 * @returns {Object} - Insights for each dimension
 */
export const generateDimensionInsights = (
  dimensionScores,
  dimensionStates,
  adjustedTargets,
  growthPotential,
  priorityLevels,
  coreAmbition,
  idealCreativeState
) => {
  const insights = {};
  
  Object.keys(dimensionScores).forEach(dimensionId => {
    const currentScore = dimensionScores[dimensionId];
    const currentState = dimensionStates[dimensionId];
    const targetScore = adjustedTargets[dimensionId];
    const growth = growthPotential[dimensionId];
    const priority = priorityLevels[dimensionId];
    
    // Calculate target state based on adjusted target score
    let targetState = currentState;
    if (targetScore >= 4.0) targetState = 'right';
    else if (targetScore <= 2.4) targetState = 'left';
    else targetState = 'balanced';
    
    // Get dimension details
    const dimension = getDimensionById(dimensionId);
    if (!dimension) return {}; // Ensure we return an object
    
    // Generate growth direction
    const growthDirection = getGrowthDirection(currentScore, targetScore);
    
    // Generate recommendation based on transition type
    let recommendation = getRecommendation(
      dimensionId,
      currentState,
      targetState,
      coreAmbition,
      idealCreativeState
    );

    // Find relevant synergies for this dimension to enhance the recommendation
    const relevantSynergies = Object.keys(dimensionScores)
      .filter(otherDimension => otherDimension !== dimensionId)
      .map(fromDimension => {
        const fromState = dimensionStates[fromDimension];
        const synergyInfo = getSynergyInsight(fromDimension, dimensionId, fromState);
        return synergyInfo ? { fromDimension, ...synergyInfo } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.influence - a.influence);

    // If there's a strong synergy, add an additional insight to the recommendation
    if (relevantSynergies.length > 0 && relevantSynergies[0].influence >= 0.7) {
      const topSynergy = relevantSynergies[0];
      recommendation += ` Additionally, your approach to ${topSynergy.fromDimension} can support this growth: ${topSynergy.insight}`;
    }
    
    insights[dimensionId] = {
      dimensionName: dimension.title,
      currentScore,
      targetScore,
      currentState,
      targetState,
      growthPotential: growth,
      priority,
      growthDirection,
      recommendation
    };
  });
  
  return insights;
};

/**
 * Determine growth direction between current and target scores
 * @param {number} currentScore - User's current score
 * @param {number} targetScore - Target score
 * @returns {string} - Growth direction
 */
function getGrowthDirection(currentScore, targetScore) {
  const diff = targetScore - currentScore;
  
  if (Math.abs(diff) < 0.1) return 'maintain';
  if (diff > 0) return 'increase';
  return 'decrease';
}

/**
 * Get recommendation for transitioning between states
 * This function combines both transition recommendation implementations
 * to avoid the duplicate function definition error
 * 
 * @param {string} dimensionId - Dimension ID
 * @param {string} transitionKey - Transition type key
 * @param {string} ambition - User's selected ambition
 * @param {string} creativeState - User's selected creative state
 * @returns {string} - Transition recommendation
 */
function getTransitionRecommendation(dimensionId, transitionKey, ambition, creativeState) {
  // Define transition recommendations
  const transitionRecommendations = {
    beliefMindset: {
      leftToBalanced: {
        Recognition: "Begin integrating affirmative statements alongside your critical analysis, especially regarding your unique strengths. This balanced approach will help others recognize your contributions.",
        Precision: "Start balancing your analytical approach with visualization of successful outcomes before detailed verification. This integration enhances precision while maintaining rigor.",
        Movement: "Incorporate belief statements that affirm your capacity for self-determination alongside your questioning. This balance increases your sense of agency.",
        Innovation: "Begin practicing 'possibility thinking' sessions where you temporarily suspend critical analysis. This balance helps you explore new territory without abandoning discernment.",
        Sustainability: "Develop a hybrid approach where you alternate between critical analysis and affirmative visioning. This balance creates more sustainable growth over time."
      },
      leftToRight: {
        Recognition: "Practice affirmation-based approaches in low-risk contexts to build comfort with this mindset shift. Your increased belief will enhance how others perceive your contributions.",
        Precision: "Begin with evidence-based affirmations, gradually reducing the need for immediate verification. This shift can help you maintain precision while accelerating progress.",
        Movement: "Start with affirming statements about your autonomy and self-determination. This shift will significantly enhance your sense of personal agency.",
        Innovation: "Use your analytical skills to systematically identify limiting beliefs, then practice replacing them. This transformation will unlock new innovative potential.",
        Sustainability: "Implement a gradual transition program where you increase affirmation practices weekly. This methodical approach ensures sustainable change in your belief system."
      },
      balancedToRight: {
        Recognition: "Lean more into affirmative visualization specifically around how others perceive your unique contributions.",
        Precision: "Focus on strengthening your belief in specific outcomes before taking action, which can enhance the precision of your results.",
        Movement: "Amplify your affirmative mindset regarding your capacity for autonomous action and self-direction.",
        Innovation: "Expand your affirmative approach to embrace more unconventional possibilities that might initially seem unrealistic.",
        Sustainability: "Develop stronger belief-based practices that reinforce your long-term vision and resilience."
      },
      balancedToLeft: {
        Recognition: "Apply more rigorous analysis to understand exactly which aspects of your work are most valued by others.",
        Precision: "Enhance your critical thinking processes to identify potential refinements that might otherwise be overlooked.",
        Movement: "Use increased questioning to identify subtle constraints that may be limiting your autonomy.",
        Innovation: "Employ more systematic questioning of conventional approaches to uncover innovative alternatives.",
        Sustainability: "Implement more analytical verification processes to ensure long-term stability in your approach."
      },
      rightToBalanced: {
        Recognition: "Integrate strategic verification alongside your strong belief to ensure your work resonates with your intended audience.",
        Precision: "Introduce selective analytical processes to complement your strong belief, enhancing the accuracy of your outcomes.",
        Movement: "Balance your affirmative approach with targeted questioning to identify the most effective paths to autonomy.",
        Innovation: "Complement your belief in possibilities with structured analysis to determine which innovative paths have the greatest potential.",
        Sustainability: "Incorporate analytical verification into your belief-based approach to enhance long-term consistency."
      },
      rightToLeft: {
        Recognition: "Begin introducing systematic verification of the impact your work has on others, starting with low-risk areas.",
        Precision: "Gradually increase analytical processes to verify and refine the outcomes of your belief-based approaches.",
        Movement: "Start questioning assumptions about what truly enhances your autonomy versus what might actually constrain it.",
        Innovation: "Develop a more critical eye toward which possibilities are most worth pursuing based on evidence and potential.",
        Sustainability: "Implement structured analysis to identify which belief-based approaches genuinely support long-term stability."
      }
    },
    clarityVision: {
      leftToBalanced: {
        Recognition: "Start developing clearer themes within your adaptable approach to help others recognize your unique contributions.",
        Precision: "Implement light structure to capture insights from your fluid process, enhancing precision without sacrificing flexibility.",
        Movement: "Focus on the feeling of freedom as your consistent anchor while adding some structure to your vision.",
        Innovation: "Develop practices to capture emerging ideas before they evolve too quickly to implement effectively.",
        Sustainability: "Implement minimal tracking systems to ensure continuity in your adaptable approach."
      },
      leftToRight: {
        Recognition: "Gradually shift toward structured clarity, ensuring your vision is not only adaptable but also well-defined.",
        Precision: "Move toward a highly structured visioning process, focusing on clarity in execution.",
        Movement: "Begin anchoring creative visions in specific structured frameworks to enhance movement.",
        Innovation: "Develop structured systems for tracking and refining innovative ideas over time.",
        Sustainability: "Establish clear long-term goals that ensure sustainability and reduce unnecessary shifts."
      },
      balancedToLeft: {
        Recognition: "Allow more openness in how your vision is interpreted and shared.",
        Precision: "Reduce strict structuring to allow for more adaptable creative exploration.",
        Movement: "Allow visions to unfold more organically without rigid timelines or defined steps.",
        Innovation: "Encourage more open-ended experimentation without predefined success criteria.",
        Sustainability: "Incorporate adaptability in long-term planning to allow for shifts as needed."
      },
      balancedToRight: {
        Recognition: "Further refine how your creative vision is presented, ensuring strong clarity in execution.",
        Precision: "Tighten the structure of your vision, ensuring each element is precisely planned.",
        Movement: "Ensure clarity in movement by defining your exact trajectory and strategic checkpoints.",
        Innovation: "Sharpen how new ideas are conceptualized and implemented in a structured way.",
        Sustainability: "Enhance the stability of your long-term vision by setting firm structures and milestones."
      },
      rightToBalanced: {
        Recognition: "Allow for more fluidity in visioning, ensuring clarity remains adaptable.",
        Precision: "Introduce an element of flexibility in planning to allow for adjustments and creative insights.",
        Movement: "Develop a balance between structured visioning and spontaneous action.",
        Innovation: "Introduce moments of exploration where rigid visioning gives way to new possibilities.",
        Sustainability: "Ensure sustainable adaptability by creating plans that evolve with circumstances."
      },
      rightToLeft: {
        Recognition: "Let go of over-structuring your creative vision and allow for more fluid interpretation.",
        Precision: "Reduce strict control over creative outcomes to allow for emergent clarity.",
        Movement: "Encourage a freer exploration of ideas without overly defined movement plans.",
        Innovation: "Release rigid expectations of how innovation unfolds to allow more organic evolution.",
        Sustainability: "Adopt an approach where long-term vision remains open to adaptation and change."
      }
    },
    actionOrientation: {
      leftToBalanced: {
        Recognition: "Integrate small, consistent actions to enhance visibility and impact.",
        Precision: "Introduce methodical but steady action-taking to increase tangible results.",
        Movement: "Develop a steady rhythm of progress without overwhelming structured planning.",
        Innovation: "Create a practice of testing ideas in low-stakes environments to encourage action.",
        Sustainability: "Ensure sustainable growth by aligning gradual action with long-term vision."
      },
      leftToRight: {
        Recognition: "Shift towards a more proactive and assertive approach to taking action.",
        Precision: "Emphasize high-efficiency action steps to move quickly while maintaining quality.",
        Movement: "Embody decisive movement, allowing instinct to guide immediate execution.",
        Innovation: "Encourage fast implementation of ideas to increase iteration speed.",
        Sustainability: "Establish a consistent system for ensuring momentum in execution."
      },
      balancedToLeft: {
        Recognition: "Introduce more thoughtful pauses before acting, allowing for greater alignment.",
        Precision: "Refine action processes by incorporating more detailed planning.",
        Movement: "Ensure actions are well-paced and not rushed by introducing strategic pauses.",
        Innovation: "Create space for deeper reflection before committing to new ideas.",
        Sustainability: "Develop a system where action is paced with long-term well-being in mind."
      },
      balancedToRight: {
        Recognition: "Increase visibility by acting more boldly and frequently.",
        Precision: "Move towards efficiency-driven execution, optimizing for speed and precision.",
        Movement: "Embrace immediate action as a driver of creative breakthroughs.",
        Innovation: "Commit to rapid implementation of new ideas, learning through doing.",
        Sustainability: "Ensure progress by consistently taking action in a structured manner."
      },
      rightToBalanced: {
        Recognition: "Introduce reflection into action to maintain alignment with impact.",
        Precision: "Ensure actions are thoughtful, avoiding unnecessary speed at the cost of quality.",
        Movement: "Balance action with moments of strategic rest and recalibration.",
        Innovation: "Ensure execution remains aligned with core creative goals, not just speed.",
        Sustainability: "Pace actions so they remain sustainable in the long run."
      },
      rightToLeft: {
        Recognition: "Slow down execution slightly to allow for greater clarity before acting.",
        Precision: "Introduce validation processes before taking immediate action.",
        Movement: "Refine movement-based action by ensuring alignment with broader goals.",
        Innovation: "Reduce impulsivity in implementing new ideas, ensuring they are well-developed.",
        Sustainability: "Adopt an approach where action is taken with long-term sustainability in mind."
      }
    },
    intuitionStrategy: {
      leftToBalanced: {
        Recognition: "Start integrating subtle intuitive insights into decision-making processes.",
        Precision: "Use intuition as an additional layer of data validation to strengthen strategic choices.",
        Movement: "Encourage small-scale intuitive decision-making to develop trust in instinct.",
        Innovation: "Incorporate intuitive experimentation in structured creative work.",
        Sustainability: "Develop a balance where intuition informs long-term decisions without overriding logic."
      },
      leftToRight: {
        Recognition: "Move towards fully trusting intuition as a key decision-making tool.",
        Precision: "Allow intuition to guide precision-based adjustments without requiring verification.",
        Movement: "Emphasize flow-based decision-making with minimal overthinking.",
        Innovation: "Lean into intuitive creative processes without needing external validation.",
        Sustainability: "Trust in intuitive timing and cycles for long-term creative sustainability."
      },
      balancedToLeft: {
        Recognition: "Introduce more strategic validation before relying on instinct.",
        Precision: "Ensure structured verification before making intuition-driven refinements.",
        Movement: "Balance intuition with planned movement to maintain clear direction.",
        Innovation: "Create a feedback loop where structured refinement follows intuitive ideas.",
        Sustainability: "Ensure intuition is supported by logical structures for long-term consistency."
      },
      balancedToRight: {
        Recognition: "Lean into spontaneous insight, trusting in direct intuitive clarity.",
        Precision: "Expand reliance on intuition to refine execution without structured feedback.",
        Movement: "Allow instincts to take the lead more often in action-taking.",
        Innovation: "Deepen trust in intuition as a primary creative force.",
        Sustainability: "Embrace intuitive decision-making for guiding long-term stability."
      },
      rightToBalanced: {
        Recognition: "Introduce structured checkpoints to validate strong intuitive insights.",
        Precision: "Ensure some strategic framework supports instinctive precision work.",
        Movement: "Maintain awareness of when intuition may need logical reinforcement.",
        Innovation: "Balance free-flowing creativity with structured refinement cycles.",
        Sustainability: "Ensure long-term sustainability by aligning intuitive insight with practical steps."
      },
      rightToLeft: {
        Recognition: "Introduce more structured evaluation before making intuition-based decisions.",
        Precision: "Increase logical validation to counteract over-reliance on gut feeling.",
        Movement: "Use structured reflection to ensure intuitive decisions align with long-term goals.",
        Innovation: "Slow down rapid intuitive leaps to refine and optimize results.",
        Sustainability: "Ensure sustainable decision-making by reinforcing intuition with structured evaluation."
      }
    },
    emotionalAlignment: {
      leftToBalanced: {
        Recognition: "Begin allowing emotional expression to shape your visibility without overriding strategic decisions.",
        Precision: "Introduce intentional emotional regulation to ensure clarity without suppressing important feelings.",
        Movement: "Start tuning into emotional momentum, using it as a guide for movement rather than a limitation.",
        Innovation: "Allow emotional depth to enhance creative expression while maintaining grounded execution.",
        Sustainability: "Develop a balance between emotional authenticity and long-term emotional resilience."
      },
      leftToRight: {
        Recognition: "Embrace full emotional expression, using deep emotional connection as a tool for visibility.",
        Precision: "Shift toward trusting emotions as a guiding force, refining precision through feeling rather than logic.",
        Movement: "Allow emotional alignment to dictate movement, following intuitive emotional signals freely.",
        Innovation: "Lean into emotional inspiration as the primary catalyst for creative breakthroughs.",
        Sustainability: "Commit to emotional depth as a long-term guiding force, integrating emotions into your foundational vision."
      },
      balancedToLeft: {
        Recognition: "Increase analytical distance in emotionally-driven decisions to maintain strategic clarity.",
        Precision: "Strengthen structured approaches to processing emotions before acting on them.",
        Movement: "Ensure emotions do not dictate movement by incorporating logical reflection before taking action.",
        Innovation: "Introduce structured checkpoints to refine emotionally-driven creative inspiration.",
        Sustainability: "Refine emotional engagement by ensuring consistency and predictability in emotional patterns."
      },
      balancedToRight: {
        Recognition: "Lean further into emotional presence, allowing deeper self-expression in how you show up.",
        Precision: "Trust emotions as a precision tool, allowing them to fine-tune decisions and actions.",
        Movement: "Embrace emotional fluidity as a key component of movement, following intuitive energetic shifts.",
        Innovation: "Encourage spontaneous emotional exploration as a catalyst for innovative ideas.",
        Sustainability: "Commit to emotional intuition as a long-term stability factor, ensuring deep internal alignment."
      },
      rightToBalanced: {
        Recognition: "Introduce strategic evaluation alongside deep emotional expression for a refined public presence.",
        Precision: "Ensure emotions enhance rather than override structured precision in decision-making.",
        Movement: "Develop awareness of when emotions may need strategic guidance to maintain productive movement.",
        Innovation: "Balance raw emotional inspiration with structured execution for optimal creative outcomes.",
        Sustainability: "Integrate emotional alignment with practical stability to ensure long-term consistency."
      },
      rightToLeft: {
        Recognition: "Introduce structured analysis of how emotions influence visibility and external perception.",
        Precision: "Develop logical frameworks for processing emotions before using them in precision-based work.",
        Movement: "Refine movement-based decision-making by ensuring emotions do not override clear strategy.",
        Innovation: "Slow down emotional ideation to introduce structured refinement before launching new ideas.",
        Sustainability: "Ensure emotional resilience by introducing measured consistency alongside emotional depth."
      }
    }
  };
  
  // Return specific recommendation if available
  if (transitionRecommendations[dimensionId] && 
      transitionRecommendations[dimensionId][transitionKey] && 
      transitionRecommendations[dimensionId][transitionKey][ambition]) {
    return transitionRecommendations[dimensionId][transitionKey][ambition];
  }
  
  // Generic transition recommendations with enhanced language
  const genericTransitions = {
    leftToBalanced: `Begin integrating elements from the opposite end of the spectrum in low-risk situations. This balanced approach will strengthen your ${dimensionId} while honoring your natural tendencies.`,
    balancedToLeft: `Focus more deliberately on developing the analytical qualities from the left side of this spectrum, which will enhance your natural strengths in ${dimensionId}.`,
    balancedToRight: `Focus more deliberately on developing the affirmative qualities from the right side of this spectrum, which will complement your existing approach to ${dimensionId}.`,
    rightToBalanced: `While maintaining your affirmative strengths, begin selectively incorporating analytical elements to create a more integrated approach to ${dimensionId}.`,
    leftToRight: `Start with small, gradual shifts toward a more affirmative approach, particularly in areas where you already feel comfortable. This will expand your range in ${dimensionId}.`,
    rightToLeft: `Start with small, gradual shifts toward a more analytical approach, particularly in areas where precision matters most. This will deepen your capacity in ${dimensionId}.`
  };
  
  return genericTransitions[transitionKey] || `Focus on gradually moving toward your target state in ${dimensionId}.`;
}

/**
 * Get recommendation for refining within the same state
 * @param {string} dimensionId - Dimension ID
 * @param {string} state - Dimension state
 * @param {string} ambition - User's selected ambition
 * @returns {string} - Refinement recommendation
 */
function getRefiningRecommendation(dimensionId, state, ambition) {
  // Recommendations for refining within the same state
  const refiningRecommendations = {
    beliefMindset: {
      left: {
        Recognition: "Continue developing your critical thinking skills while gradually opening to more affirmative approaches in areas where external validation matters most.",
        Precision: "Your analytical mindset serves precision well. Consider incorporating structured belief experiments to test efficacy.",
        Movement: "Your questioning nature supports autonomy. Refine it by asking which beliefs specifically enhance your freedom.",
        Innovation: "Channel your critical thinking toward questioning outdated approaches that limit innovation.",
        Sustainability: "Your analytical approach supports long-term thinking. Build frameworks to systematically validate useful beliefs."
      },
      balanced: {
        Recognition: "Your balanced belief approach is ideal for recognition. Focus on applying skepticism to validate external feedback while maintaining positive belief in your impact.",
        Precision: "Your balanced belief system supports precision. Continue integrating verification with vision.",
        Movement: "Maintain your belief flexibility, but more strongly question limitations that restrict your movement.",
        Innovation: "Your balanced belief approach serves innovation. Practice alternating between critical analysis and visionary thinking.",
        Sustainability: "Your balanced approach supports sustainability. Develop routines that integrate both questioning and affirming."
      },
      right: {
        Recognition: "Your affirmative mindset powerfully supports recognition. Refine it by anchoring positive beliefs to specific aspects of your work that resonate with others.",
        Precision: "While maintaining your powerful belief, add selective verification processes to ensure accuracy.",
        Movement: "Your strong belief empowers your sense of freedom. Focus it on affirming your capacity for self-determination.",
        Innovation: "Your affirmative mindset fuels creativity. Direct it specifically toward believing in unconventional approaches.",
        Sustainability: "Channel your strong belief toward long-term vision and consistent growth patterns."
      }
    },
    clarityVision: {
      left: {
        Recognition: "Your fluid vision allows you to adapt to audience feedback. Refine it by developing clearer themes within your adaptable approach.",
        Precision: "While maintaining flexibility, implement light structure to capture insights that emerge from your fluid process.",
        Movement: "Your adaptable vision supports autonomy. Refine it by focusing on the feeling of freedom as your consistent anchor.",
        Innovation: "Your fluid vision excellently serves innovation. Develop practices to capture emerging ideas before they evolve.",
        Sustainability: "Your adaptable approach needs frameworks to ensure continuity. Implement minimal tracking systems."
      },
      balanced: {
        Recognition: "Your balanced vision approach serves recognition well. Practice articulating clear goals while remaining open to refinement based on feedback.",
        Precision: "Your balance between structure and flexibility is ideal. Focus on sharpening the boundary between when to use each approach.",
        Movement: "Your balanced vision supports autonomy. Clarify which aspects need structure and which need freedom.",
        Innovation: "Your balanced approach supports innovation. Develop clearer criteria for when to stabilize an idea versus when to evolve it.",
        Sustainability: "Your balanced vision approach supports sustainability. Create clearer cycles for when to set firm goals versus when to adapt."
      },
      right: {
        Recognition: "Your clear vision helps others understand your value. Refine it by ensuring your precise goals align with what others most appreciate.",
        Precision: "Your detailed vision strongly supports precision. Focus on enhancing your vision with even more specific measurable outcomes.",
        Movement: "While maintaining your clear vision, identify which specific aspects might benefit from more flexibility.",
        Innovation: "Your precise vision provides structure. Occasional scheduled 'vision-free' periods might enhance creativity.",
        Sustainability: "Your clear vision supports sustainability. Implement regular review cycles to ensure your detailed plans remain relevant."
      }
    },
    actionOrientation: {
      left: {
        Recognition: "Refine your deliberate approach by focusing on well-timed, impactful actions.",
        Precision: "Enhance your methodical process by ensuring each step leads to tangible improvements.",
        Movement: "Optimize planning to ensure it leads to real movement instead of hesitation.",
        Innovation: "Channel patience into refining ideas before acting, ensuring your creativity is well-supported.",
        Sustainability: "Continue developing a slow and steady workflow that ensures long-term resilience."
      },
      balanced: {
        Recognition: "Fine-tune your balance between planning and action, ensuring visibility without rushing.",
        Precision: "Optimize your process by streamlining the balance between preparation and execution.",
        Movement: "Strengthen your ability to shift gears fluidly between stillness and action.",
        Innovation: "Refine your balance between ideation and implementation, allowing both to feed each other.",
        Sustainability: "Ensure consistency by maintaining a rhythm of action that prevents burnout."
      },
      right: {
        Recognition: "Refine your visibility strategy by ensuring your actions are impactful, not just frequent.",
        Precision: "Introduce small review cycles to maintain quality without disrupting momentum.",
        Movement: "Increase your awareness of which actions yield the most satisfying movement.",
        Innovation: "Focus on actions that create high-leverage breakthroughs rather than scattered experiments.",
        Sustainability: "Ensure sustainability by incorporating moments of rest and strategic reflection."
      }
    },
    intuitionStrategy: {
      left: {
        Recognition: "Continue developing a structured intuition system that relies on data and experience.",
        Precision: "Refine your ability to validate intuitive insights with logical verification.",
        Movement: "Enhance your ability to move based on subtle cues, developing confidence in your intuition.",
        Innovation: "Channel your structured approach into discovering repeatable patterns in inspiration.",
        Sustainability: "Develop a long-term practice of refining your ability to trust and verify intuitive insights."
      },
      balanced: {
        Recognition: "Refine your ability to blend intuitive and strategic thinking in high-visibility situations.",
        Precision: "Continue integrating both gut instincts and precise analysis into your creative process.",
        Movement: "Maintain flexibility in how you use intuition, adjusting based on context and need.",
        Innovation: "Strengthen your ability to trust intuitive leaps without losing sight of practical execution.",
        Sustainability: "Develop systems that allow intuitive insights to be recorded and revisited over time."
      },
      right: {
        Recognition: "Fully trust your intuition in areas where you have deep experience and expertise.",
        Precision: "Lean into intuitive decision-making without hesitation, allowing your expertise to guide you.",
        Movement: "Allow your intuition to lead fully, making decisions based on flow and alignment.",
        Innovation: "Trust in your ability to generate and act on new ideas without needing external validation.",
        Sustainability: "Embrace the natural cycles of intuition, trusting that clarity will arrive when needed."
      }
    },
    emotionalAlignment: {
      left: {
        Recognition: "Continue developing emotional awareness while maintaining logical clarity.",
        Precision: "Enhance your ability to recognize how emotions influence perception and judgment.",
        Movement: "Improve your emotional self-awareness to strengthen resilience in challenging situations.",
        Innovation: "Use emotional reflection as a tool for deepening creative insights.",
        Sustainability: "Develop emotional regulation strategies that sustain long-term motivation."
      },
      balanced: {
        Recognition: "Strengthen your ability to harness emotions for personal and professional growth.",
        Precision: "Fine-tune your balance between emotional depth and logical precision.",
        Movement: "Enhance your ability to move through emotional experiences with clarity and ease.",
        Innovation: "Allow emotions to inform your creativity without overwhelming the process.",
        Sustainability: "Continue refining your emotional cycles to create sustainable motivation."
      },
      right: {
        Recognition: "Lean fully into emotional expression as a powerful tool for recognition and visibility.",
        Precision: "Allow emotions to refine your sense of quality and excellence.",
        Movement: "Trust emotions as a guide, moving toward what feels most alive and fulfilling.",
        Innovation: "Use emotions to fuel bold, expressive creative experiments.",
        Sustainability: "Honor emotional cycles as part of a sustainable, intuitive workflow."
      }
    }
  };
  
  // Return specific recommendation if available, otherwise a generic one
  if (refiningRecommendations[dimensionId] && 
      refiningRecommendations[dimensionId][state] && 
      refiningRecommendations[dimensionId][state][ambition]) {
    return refiningRecommendations[dimensionId][state][ambition];
  }
  
  // Generic refinement recommendations by state
  const genericRecommendations = {
    left: "Continue developing your current approach while being open to selective integration of opposite qualities when beneficial.",
    balanced: "Your balanced approach is working well. Focus on becoming more intentional about when to utilize each side of the spectrum.",
    right: "Continue refining your current approach while identifying specific situations where incorporating some opposite qualities might be beneficial."
  };
  
  return genericRecommendations[state] || "Focus on refining your current approach in this dimension.";
}

/**
 * Generate cross-dimensional synergy insights
 * @param {Object} dimensionScores - User's current dimension scores
 * @param {Object} dimensionStates - User's current dimension states
 * @param {Object} growthPotential - Growth potential for each dimension
 * @param {Object} priorityLevels - Priority level for each dimension
 * @returns {Array} - Synergy insights
 */

export const generateSynergyInsights = (
  dimensionScores,
  dimensionStates,
  growthPotential,
  priorityLevels
) => {
  // Get top synergies
  const topSynergies = getTopSynergies(dimensionScores, dimensionStates);
  
  // Enhance with priority information
  return topSynergies.map(synergy => {
    const fromPriority = priorityLevels[synergy.fromDimension];
    const toPriority = priorityLevels[synergy.toDimension];
    
    return {
      // Properly restructure to include direct properties for easier access
      fromDimension: synergy.fromDimension,
      toDimension: synergy.toDimension,
      insight: synergy.insight,
      influence: synergy.influence,
      fromPriority,
      toPriority,
      relevance: calculateSynergyRelevance(
        fromPriority,
        toPriority,
        growthPotential[synergy.fromDimension],
        growthPotential[synergy.toDimension]
      )
    };
  });
};
/**
 * Calculate relevance score for a synergy
 * @param {string} fromPriority - Priority of influencing dimension
 * @param {string} toPriority - Priority of influenced dimension
 * @param {number} fromGrowth - Growth potential of influencing dimension
 * @param {number} toGrowth - Growth potential of influenced dimension
 * @returns {number} - Relevance score
 */
function calculateSynergyRelevance(fromPriority, toPriority, fromGrowth, toGrowth) {
  // Priority weights
  const priorityWeights = {
    'High': 1.0,
    'Moderate': 0.7,
    'Meaningful': 0.5,
    'Minimal': 0.3
  };
  
  // Calculate base relevance from priorities (with fallbacks)
  const fromPriorityWeight = priorityWeights[fromPriority] || 0.3;
  const toPriorityWeight = priorityWeights[toPriority] || 0.3;
  const baseRelevance = (fromPriorityWeight + toPriorityWeight) / 2;
  
  // Adjust based on growth potential
  const growthFactor = ((fromGrowth || 0) + (toGrowth || 0)) / 2;
  
  return baseRelevance * (1 + growthFactor);
}

/**
 * Generate high-level summary insights
 * @param {Object} dimensionScores - User's current dimension scores
 * @param {Object} adjustedTargets - Adjusted target scores
 * @param {Object} priorityLevels - Priority level for each dimension
 * @param {string} coreAmbition - User's selected ambition
 * @param {string} idealCreativeState - User's selected creative state
 * @param {string} adaptiveMasteryMetric - User's selected mastery metric
 * @returns {Object} - Summary insights
 */
export const generateSummaryInsights = (
  dimensionScores,
  adjustedTargets,
  priorityLevels,
  coreAmbition,
  idealCreativeState,
  adaptiveMasteryMetric
) => {
  // Identify highest priority dimensions
  const highPriorityDimensions = Object.keys(priorityLevels).filter(
    dim => priorityLevels[dim] === 'High' || priorityLevels[dim] === 'Moderate'
  );
  
  // Calculate overall growth focus
  const overallFocus = calculateOverallFocus(dimensionScores, adjustedTargets);
  
  // Generate ambition-specific insights
  const ambitionInsight = getAmbitionInsight(coreAmbition);
  
  // Generate creative state insights
  const creativeStateInsight = getCreativeStateInsight(idealCreativeState);
  
  // Generate mastery metric insights
  const masteryMetricInsight = getMasteryMetricInsight(adaptiveMasteryMetric);
  
  return {
    highPriorityDimensions,
    overallFocus,
    ambitionInsight,
    creativeStateInsight,
    masteryMetricInsight
  };
};

/**
 * Calculate overall focus direction based on all target movements
 * @param {Object} currentScores - User's current dimension scores
 * @param {Object} targetScores - Target dimension scores
 * @returns {string} - Overall focus direction
 */
function calculateOverallFocus(currentScores, targetScores) {
  let leftwardMovement = 0;
  let rightwardMovement = 0;
  
  Object.keys(currentScores).forEach(dimension => {
    const diff = targetScores[dimension] - currentScores[dimension];
    
    if (diff > 0.1) {
      rightwardMovement += Math.abs(diff);
    } else if (diff < -0.1) {
      leftwardMovement += Math.abs(diff);
    }
  });
  
  if (rightwardMovement > leftwardMovement * 1.5) {
    return "right";
  } else if (leftwardMovement > rightwardMovement * 1.5) {
    return "left";
  }
  
  return "balanced";
}

/**
 * Get insight based on selected ambition
 * @param {string} ambition - User's selected ambition
 * @returns {string} - Ambition insight
 */
function getAmbitionInsight(ambition) {
  const ambitionInsights = {
    Recognition: "Your core ambition is Recognition, which means you're driven by having meaningful impact and receiving acknowledgment for your contributions. Your growth focus should emphasize sharing your work and developing the qualities that make your unique approach visible to others.",
    Precision: "Your core ambition is Precision, which means you're driven by refinement, high-quality work, and mastery of details. Your growth focus should emphasize developing systems that enhance accuracy and excellence in your chosen domain.",
    Movement: "Your core ambition is Movement, which means you're driven by personal agency, freedom, and the ability to navigate life on your own terms. Your growth focus should emphasize developing approaches that maximize your autonomy and minimize unnecessary constraints.",
    Innovation: "Your core ambition is Innovation, which means you're driven by exploring new territory, creative expression, and breaking new ground. Your growth focus should emphasize developing approaches that enhance your originality and ability to go beyond conventional boundaries.",
    Sustainability: "Your core ambition is Sustainability, which means you're driven by consistent performance, predictable growth, and building for the long-term. Your growth focus should emphasize developing systems that ensure resilience and steady progress over time."
  };
  
  return ambitionInsights[ambition] || "Your core ambition shapes your overall growth direction and what you value most in your creative process.";
}

/**
 * Get insight based on selected creative state
 * @param {string} creativeState - User's selected creative state
 * @returns {string} - Creative state insight
 */
function getCreativeStateInsight(creativeState) {
  const creativeStateInsights = {
    "Effortless Flow": "You thrive in a state of Effortless Flow, where creativity feels natural and unforced. Your development approach should remove unnecessary friction and emphasize practices that help you access this state more consistently.",
    "Absolute Clarity": "You thrive in a state of Absolute Clarity, where your direction and choices feel precise and decisive. Your development approach should emphasize practices that reduce ambiguity and enhance your decision-making confidence.",
    "Spacious Creativity": "You thrive in a state of Spacious Creativity, where you have room for exploration and experimentation. Your development approach should emphasize creating mental and temporal bandwidth for open-ended creative work.",
    "Refined Impact": "You thrive in a state of Refined Impact, where your efforts yield high-quality results with minimal wasted energy. Your development approach should emphasize practices that concentrate your creative output for maximum effect."
  };
  
  return creativeStateInsights[creativeState] || "Your ideal creative state influences how you prefer to experience the creative process and what conditions help you thrive.";
}

/**
 * Get insight based on selected mastery metric
 * @param {string} masteryMetric - User's selected mastery metric
 * @returns {string} - Mastery metric insight
 */
function getMasteryMetricInsight(masteryMetric) {
  const masteryMetricInsights = {
    "Confidence in Decision-Making": "You value Confidence in Decision-Making as your primary measure of growth. Focus on practices that reduce hesitation, enhance your trust in your choices, and help you make decisions more quickly.",
    "Creative Output Quality": "You value Creative Output Quality as your primary measure of growth. Focus on practices that enhance the consistency, refinement, and excellence of your work, even if it means taking more time.",
    "Reduced Stress / Increased Ease": "You value Reduced Stress and Increased Ease as your primary measure of growth. Focus on practices that make your creative process more effortless and less draining, even if it means adjusting your expectations.",
    "Personal Satisfaction & Enjoyment": "You value Personal Satisfaction and Enjoyment as your primary measure of growth. Focus on practices that maximize your intrinsic motivation and joy in the process, regardless of external metrics."
  };
  
  return masteryMetricInsights[masteryMetric] || "Your chosen mastery metric determines how you'll measure successful growth and what aspects of improvement matter most to you.";
}

/**
 * Generate personalized practices based on user selections
 * @param {Object} dimensionStates - User's current dimension states
 * @param {Object} priorityLevels - Priority level for each dimension
 * @param {string} coreAmbition - User's selected ambition
 * @param {string} idealCreativeState - User's selected creative state
 * @param {string} adaptiveMasteryMetric - User's selected mastery metric
 * @returns {Array} - Personalized practices
 */
export const generatePersonalizedPractices = (
  dimensionStates,
  priorityLevels,
  coreAmbition,
  idealCreativeState,
  adaptiveMasteryMetric
) => {
  // Get high priority dimensions
  const highPriorityDimensions = Object.keys(priorityLevels).filter(
    dim => priorityLevels[dim] === 'High' || priorityLevels[dim] === 'Moderate'
  );
  
  const practices = [];
  
  // Add ambition-specific practices
  practices.push(...getAmbitionPractices(coreAmbition));
  
  // Add creative state practices
  practices.push(...getCreativeStatePractices(idealCreativeState));
  
  // Add mastery metric practices
  practices.push(...getMasteryMetricPractices(adaptiveMasteryMetric));
  
  // Add high-priority dimension practices
  highPriorityDimensions.forEach(dimension => {
    practices.push(...getDimensionPractices(
      dimension, 
      dimensionStates[dimension],
      coreAmbition
    ));
  });
  
  // Limit to 10 practices and return
  return practices.slice(0, 10);
};

export default generateMasteryInsights;
