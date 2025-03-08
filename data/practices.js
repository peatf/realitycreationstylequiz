// data/practices.js

/**
 * This file contains practice recommendation functions for the mastery insights generator.
 * It includes functions for ambition-specific, creative state-specific, and mastery metric-specific practices.
 */

/**
 * Get practices based on selected ambition
 * @param {string} ambition - User's selected ambition
 * @returns {Array} - Ambition-specific practices
 */
export const getAmbitionPractices = (ambition) => {
  const ambitionPractices = {
    Recognition: [
      "Weekly Visibility Practice: Schedule 15 minutes to share some aspect of your work publicly.",
      "Impact Journaling: Document the specific ways your work has positively affected others.",
      "Feedback Collection: Create a simple system to gather and review responses to your work."
    ],
    Precision: [
      "Quality Control Checklist: Develop a personalized review process for your creative work.",
      "Skill Mastery Sessions: Dedicate time to deliberately practice specific technical aspects of your craft.",
      "Refinement Ritual: Set aside time specifically for polishing and perfecting existing work."
    ],
    Movement: [
      "Spaciousness Mapping: Identify and eliminate unnecessary constraints in your creative process.",
      "Autonomy Audit: Regularly review which aspects of your work feel most self-directed and why.",
      "Boundary Setting Ritual: Practice articulating and enforcing your preferred working conditions."
    ],
    Innovation: [
      "Novelty Hour: Schedule regular time for pure experimentation without judgment.",
      "Cross-Pollination Practice: Systematically explore influences outside your domain.",
      "Assumption Challenging: Regularly identify and question conventional approaches in your field."
    ],
    Sustainability: [
      "Consistency Tracking: Monitor your regular creative output to identify sustainable rhythms.",
      "Energy Management Audit: Map your creative energy patterns to optimize your schedule.",
      "Long-View Planning: Develop quarterly reviews focused on gradual, sustainable progress."
    ]
  };
  
  return ambitionPractices[ambition] || [];
};

/**
 * Get practices based on selected creative state
 * @param {string} creativeState - User's selected creative state
 * @returns {Array} - Creative state-specific practices
 */
export const getCreativeStatePractices = (creativeState) => {
  const creativeStatePractices = {
    "Effortless Flow": [
      "Flow Triggers Identification: Document conditions that consistently help you enter flow states.",
      "Distraction Elimination: Create a pre-work ritual to minimize interruptions to your flow.",
      "Flow State Journaling: Track when you experience flow and what contributed to it."
    ],
    "Absolute Clarity": [
      "Decision Matrix Development: Create personalized frameworks for evaluating creative choices.",
      "Morning Clarity Session: Begin each day by defining your most important creative direction.",
      "Outcome Visualization: Practice clearly imagining your completed work before beginning."
    ],
    "Spacious Creativity": [
      "Idea Incubation Space: Designate physical or temporal space with no defined outcomes.",
      "Possibility Expansion: Practice generating multiple approaches before committing to one.",
      "Breathing Room Ritual: Schedule deliberate breaks during your creative process."
    ],
    "Refined Impact": [
      "Effort-to-Impact Mapping: Analyze which creative actions yield the greatest results.",
      "Energy Focusing Practice: Identify and eliminate low-value activities in your process.",
      "Strategic Sequencing: Develop systems for prioritizing your most impactful work first."
    ]
  };
  
  return creativeStatePractices[creativeState] || [];
};

/**
 * Get practices based on selected mastery metric
 * @param {string} masteryMetric - User's selected mastery metric
 * @returns {Array} - Mastery metric-specific practices
 */
export const getMasteryMetricPractices = (masteryMetric) => {
  const masteryMetricPractices = {
    "Confidence in Decision-Making": [
      "Decision Velocity Tracking: Monitor how quickly you make creative choices and what affects speed.",
      "Confidence Journaling: Document decisions you feel good about and why.",
      "Decisiveness Practice: Set time limits for certain types of creative decisions."
    ],
    "Creative Output Quality": [
      "Quality Definition Exercise: Explicitly define what quality means in different aspects of your work.",
      "Feedback Integration System: Develop a method for incorporating constructive criticism.",
      "Excellence Study: Regularly analyze work you consider exceptional to identify patterns."
    ],
    "Reduced Stress / Increased Ease": [
      "Tension Tracking: Identify when and where you experience stress in your creative process.",
      "Effortlessness Engineering: Redesign challenging parts of your process to require less strain.",
      "Energy Conservation Audit: Review and eliminate unnecessary steps in your creative routine."
    ],
    // Continuing data/practices.js from where we left off
    "Personal Satisfaction & Enjoyment": [
      "Joy Mapping: Track which aspects of your creative work bring you the most satisfaction.",
      "Intrinsic Motivation Boosting: Design rewards that enhance your internal drive.",
      "Pleasure Prioritization: Restructure your process to maximize enjoyable elements."
    ]
  };
  
  return masteryMetricPractices[masteryMetric] || [];
};

/**
 * Get practices based on dimension and state
 * @param {string} dimensionId - Dimension ID
 * @param {string} state - Dimension state
 * @param {string} ambition - User's selected ambition
 * @returns {Array} - Dimension-specific practices
 */
export const getDimensionPractices = (dimensionId, state, ambition) => {
  // Define dimension-specific practices
  const dimensionPractices = {
    beliefMindset: {
      left: [
        "Analytical Belief Building: Select one limiting belief and systematically gather evidence to challenge it.",
        "Proof-to-Possibility Bridge: Practice moving from verified facts to potential opportunities.",
        "Skeptic's Visioning: Use critical thinking to construct evidence-based positive scenarios."
      ],
      balanced: [
        "Belief Flexibility Workout: Practice alternating between skeptical analysis and affirmative visioning.",
        "Integration Journaling: Document how verification and belief complement each other in your process.",
        "Contextual Belief Selection: Map which situations benefit from skepticism versus affirmation."
      ],
      right: [
        "Affirmation Refinement: Make your belief statements more specific and personally meaningful.",
        "Possibility-to-Structure Bridge: Practice translating visionary thinking into actionable frameworks.",
        "Selective Verification: Identify specific areas where adding analytical thinking enhances your vision."
      ]
    },
    clarityVision: {
      left: [
        "Adaptive Vision Mapping: Document how your goals evolve and what triggers positive shifts.",
        "Emergent Pattern Recognition: Practice identifying themes that arise from your fluid approach.",
        "Fluid Structure Integration: Create minimal frameworks that capture insights without restricting flow."
      ],
      balanced: [
        "Contextual Clarity: Map which projects benefit from detailed visioning versus adaptability.",
        "Vision-Flexibility Alternation: Schedule dedicated periods for both structured and open-ended approaches.",
        "Integration Journaling: Document how structure and flexibility enhance different aspects of your work."
      ],
      right: [
        "Vision Sharpening Exercise: Practice describing your goals with increasing specificity.",
        "Precision-to-Adaptivity Bridge: Identify aspects of your vision that could benefit from flexibility.",
        "Milestone-Vision Alignment: Ensure your detailed steps connect directly to your larger vision."
      ]
    },
    actionOrientation: {
      left: [
        "Reflective Action Integration: Identify small actions that complement your contemplative approach.",
        "Aligned Action Identification: Map which actions feel most congruent with your internal state.",
        "Contemplation-to-Activation Bridge: Practice setting gentle timelines for moving from thought to action."
      ],
      balanced: [
        "Action-Reflection Rhythm Setting: Define your ideal cycle between doing and considering.",
        "Contextual Action Selection: Map which situations benefit from immediate action versus reflection.",
        "Integration Journaling: Document how action and contemplation enhance your overall process."
      ],
      right: [
        "Strategic Pause Integration: Identify key decision points that benefit from brief reflection.",
        "Action-to-Insight Bridge: Develop practices for extracting learning from your consistent action.",
        "Momentum Refinement: Identify which forms of action generate the most valuable progress."
      ]
    },
    intuitionStrategy: {
      left: [
        "Intuition Validation Tracking: Document intuitive hits and their outcomes to build trust.",
        "Intuitive-Strategic Bridge: Practice translating gut feelings into explainable approaches.",
        "Intuition Enhancement: Create conditions that strengthen your access to intuitive guidance."
      ],
      balanced: [
        "Method Selection Mapping: Identify which situations benefit from intuition versus strategy.",
        "Integration Journaling: Document how planning and spontaneity enhance different projects.",
        "Alternation Scheduling: Create dedicated periods for both structured and intuitive approaches."
      ],
      right: [
        "Strategic-Intuitive Bridge: Practice creating space for spontaneity within your planning.",
        "Framework Optimization: Refine your systems to be more flexible and responsive.",
        "Planning-to-Presence Practice: Develop transitions between structured thinking and present awareness."
      ]
    },
    emotionalAlignment: {
      left: [
        "Emotional Energy Channeling: Practice directing emotional intensity toward creative purposes.",
        "Expression-to-Regulation Bridge: Develop transitions between full expression and centered calm.",
        "Emotional Pattern Recognition: Map recurring feelings and their impact on your creative process."
      ],
      balanced: [
        "Emotional Context Mapping: Identify which situations benefit from expression versus regulation.",
        "Integration Journaling: Document how emotional awareness and management complement each other.",
        "Emotional Agility Practice: Develop smooth transitions between different emotional approaches."
      ],
      right: [
        "Emotional Expansion Practice: Safely explore a wider range of emotional expression in your process.",
        "Calibration-to-Authenticity Bridge: Develop ways to maintain stability while increasing genuineness.",
        "Regulation Refinement: Optimize your emotional management to require less conscious effort."
      ]
    }
  };
  
  return dimensionPractices[dimensionId]?.[state] || [];
};
    
