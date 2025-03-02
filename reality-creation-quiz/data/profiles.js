// data/profiles.js

// This file contains the 30 possible profile definitions based on dimension combinations
// For now, using placeholder data that follows the structure:
// Group 1: One Extreme Dimension (or zero = fully balanced) → 11 possible profiles
// Group 2: Two Extreme Dimensions → 9 possible profiles
// Group 3: Three Extreme Dimensions → 10 possible profiles

export const profiles = {
  // GROUP 1: Balanced or One Extreme Dimension (11 profiles)
  
  // Fully balanced profile
  "balanced_all": {
    name: "The Harmonious Creator",
    description: "You have a remarkably balanced approach to reality creation, drawing on multiple methods and flexibly adapting your approach based on the situation. This versatility allows you to navigate various manifestation scenarios with ease, drawing from a diverse toolkit of beliefs, visions, actions, intuitions, and emotional states.",
    celebrate: [
      "Your adaptability across different creation styles and contexts",
      "Your ability to understand and communicate with people of all creation styles",
      "Your balanced perspective that avoids extremes in any one dimension"
    ],
    support: [
      "Recognizing that balance doesn't mean being average, but having access to the full spectrum",
      "Experimenting with temporarily emphasizing different dimensions for specific manifesting goals",
      "Using your versatility to help others find their optimal creation approach"
    ]
  },
  
  // Belief & Mindset extreme profiles
  "beliefMindset_left": {
    name: "The Analytical Manifestor",
    description: "Your inquisitive, evidence-based approach to reality creation gives you a solid foundation built on personal verification. While you value the power of belief, you prefer to build it through direct experience and logical understanding rather than faith alone. This analytical approach helps you refine your techniques and build genuine confidence over time.",
    celebrate: [
      "Your ability to refine techniques through thoughtful analysis",
      "Your grounded approach that builds stable, reliable manifestation habits",
      "Your skill at breaking down complex manifestation processes into understandable steps"
    ],
    support: [
      "Periodically allowing yourself to embrace possibilities before full analysis",
      "Recognizing that some aspects of reality creation work before they're fully understood",
      "Creating safe experiments to test beliefs that feel stretching but potentially expansive"
    ]
  },
  "beliefMindset_right": {
    name: "The Faith-Driven Creator",
    description: "Your unwavering belief and optimistic mindset create a powerful foundation for manifestation. You naturally embrace the unlimited possibilities of reality creation with enthusiasm and conviction. This affirmative approach allows you to transcend limitations that might hold others back and create rapid shifts through the power of your belief.",
    celebrate: [
      "Your natural ability to hold positive expectation regardless of circumstances",
      "Your capacity to see beyond apparent limitations and physical constraints",
      "Your inspiring energy that elevates those around you to greater possibility"
    ],
    support: [
      "Developing discernment while maintaining your optimism and openness",
      "Creating structures to channel your expansive belief into focused outcomes",
      "Deepening your understanding of how your belief system works on the mechanical level"
    ]
  },
  
  // Clarity of Vision extreme profiles
  "clarityVision_left": {
    name: "The Possibility Weaver",
    description: "Your fluid, adaptable approach to visioning allows your manifestations to take shape organically. Rather than locking into one specific outcome, you keep your options open and allow your desires to evolve naturally. This open-ended approach helps you remain receptive to unexpected opportunities that may be even better than your original concept.",
    celebrate: [
      "Your openness to unexpected possibilities and synchronicities",
      "Your ability to adapt quickly when better options emerge",
      "Your comfort with uncertainty and the unfolding creative process"
    ],
    support: [
      "Creating just enough structure to channel your fluid creativity effectively",
      "Developing anchoring practices for times when too many possibilities feel overwhelming",
      "Learning to communicate your evolving vision to others who may prefer more certainty"
    ]
  },
  "clarityVision_right": {
    name: "The Precision Manifestor",
    description: "Your crystal-clear vision and detailed focus create a powerful template for your manifestations. You excel at defining exactly what you want with specific clarity, which allows the universe to respond with matching precision. This focused approach helps you create exactly what you envision without ambiguity or confusion.",
    celebrate: [
      "Your ability to visualize outcomes with remarkable detail and clarity",
      "Your skill in maintaining consistent focus on your desired result",
      "Your talent for translating abstract desires into concrete visions"
    ],
    support: [
      "Building flexibility to recognize and accept even better possibilities that may emerge",
      "Developing comfort with the parts of the journey that aren't yet clear",
      "Creating space for organic evolution within your detailed vision"
    ]
  },
  
  // Action Orientation extreme profiles
  "actionOrientation_left": {
    name: "The Conscious Aligner",
    description: "Your contemplative approach to manifestation prioritizes inner alignment before outer action. You understand that the quality of your consciousness and state of being ultimately determines your results more than quantity of action. This reflective approach helps ensure your actions are aligned with your true desires and taken from an optimal energetic state.",
    celebrate: [
      "Your patience and trust in the unfolding process of manifestation",
      "Your deep awareness of the inner states that precede effective action",
      "Your ability to discern which actions are truly aligned vs. forced"
    ],
    support: [
      "Creating gentle structures to move into action when fully aligned",
      "Recognizing when action itself can help create better alignment",
      "Setting personal thresholds for when observation has served its purpose"
    ]
  },
  "actionOrientation_right": {
    name: "The Momentum Creator",
    description: "Your action-oriented approach to manifestation creates powerful momentum toward your desires. You understand that consistent, decisive action sends a clear message to the universe about your intentions and opens doors that contemplation alone cannot. This proactive approach helps you create tangible results and rapid progress toward your goals.",
    celebrate: [
      "Your ability to create rapid movement and momentum toward your goals",
      "Your courage to take action even when the full path isn't visible",
      "Your skill at transforming thoughts and dreams into concrete reality"
    ],
    support: [
      "Developing regular reflection practices to ensure your actions remain aligned",
      "Creating space between actions to allow the universe to respond",
      "Recognizing when doing less actually creates more effective results"
    ]
  },
  
  // Intuition vs Strategy extreme profiles
  "intuitionStrategy_left": {
    name: "The Intuitive Navigator",
    description: "Your intuition-led approach to manifestation allows you to follow the path of least resistance toward your desires. Rather than rigid planning, you navigate by feel, following internal guidance and synchronistic signs. This intuitive approach helps you remain flexible and responsive to the universe's feedback during your manifestation process.",
    celebrate: [
      "Your strong connection to your inner guidance system",
      "Your ability to detect subtle energetic shifts and alignments",
      "Your talent for flowing with synchronicities and unexpected opportunities"
    ],
    support: [
      "Creating simple frameworks to channel your intuitive insights effectively",
      "Developing trusted practices for moments when intuition seems quiet",
      "Finding ways to communicate your intuitive process to more strategic people"
    ]
  },
  "intuitionStrategy_right": {
    name: "The Strategic Manifestor",
    description: "Your methodical, strategic approach to manifestation creates reliable, consistent results. You excel at creating effective frameworks and processes that systematically move you toward your desires. This structured approach helps you track your progress clearly and make adjustments based on tangible feedback.",
    celebrate: [
      "Your ability to break down complex manifestations into actionable steps",
      "Your skill at creating reliable systems for reality creation",
      "Your talent for measuring progress and optimizing your approach"
    ],
    support: [
      "Creating space to receive intuitive insights that might transcend your plans",
      "Developing comfort with the aspects of manifestation that can't be fully systematized",
      "Remaining open to unexpected paths that may be more efficient than your original strategy"
    ]
  },
  
  // Emotional Alignment extreme profiles
  "emotionalAlignment_left": {
    name: "The Authentic Attractor",
    description: "Your emotionally expressive approach to manifestation embraces the full spectrum of your feelings as part of the creative process. Rather than bypassing 'negative' emotions, you work with them authentically, allowing them to inform your desires and fuel your creations. This dynamic approach creates a rich emotional landscape that attracts experiences of matching depth and authenticity.",
    celebrate: [
      "Your emotional honesty and refusal to engage in toxic positivity",
      "Your ability to use emotional contrast to clarify what you truly desire",
      "Your talent for creating manifestations with emotional depth and richness"
    ],
    support: [
      "Developing healthy containment practices for intense emotional energies",
      "Creating balance between emotional expression and emotional regulation",
      "Finding ways to channel emotional intensity productively in your creations"
    ]
  },
  "emotionalAlignment_right": {
    name: "The Emotional Calibrator",
    description: "Your emotionally calibrated approach to manifestation creates a stable, consistent vibrational state that supports your desires. You excel at deliberately cultivating and maintaining the emotional frequencies that match your intended outcomes. This calibrated approach helps you create a reliable energetic container for your manifestations to take form.",
    celebrate: [
      "Your ability to consistently maintain optimal emotional states",
      "Your skill at emotional regulation and management during the creation process",
      "Your talent for creating stable energetic conditions for manifestation"
    ],
    support: [
      "Creating safe spaces for authentic emotional processing when needed",
      "Developing comfort with emotional contrast as part of the human experience",
      "Finding balance between emotional management and emotional authenticity"
    ]
  },
  
  // GROUP 2: Two Extreme Dimensions (9 profiles - examples)
  
  "beliefMindset_left_clarityVision_left": {
    name: "The Analytical Explorer",
    description: "You combine a questioning, evidence-based mindset with a fluid, evolving vision for what you're creating. This combination allows you to remain both grounded and adaptable, carefully analyzing possibilities while remaining open to how they might unfold. Your approach favors experimentation and iteration rather than fixed beliefs or rigid plans.",
    celebrate: [
      "Your ability to evaluate possibilities without becoming attached to them",
      "Your talent for seeing multiple potential versions of your desired outcomes",
      "Your combination of critical thinking with creative adaptability"
    ],
    support: [
      "Creating sufficient structure to test your evolving hypotheses",
      "Developing comfort with maintaining certain core beliefs even while questioning",
      "Finding ways to communicate your iterative process to others"
    ]
  },
  "beliefMindset_right_actionOrientation_right": {
    name: "The Conviction Activator",
    description: "You combine unwavering belief with decisive action, creating a powerful force for rapid manifestation. Your confident mindset fuels your courageous action-taking, while your consistent action reinforces your optimistic beliefs. This dynamic combination allows you to move mountains through the alignment of your thoughts and deeds.",
    celebrate: [
      "Your ability to create momentum through aligned belief and action",
      "Your courage to take bold steps backed by unshakeable conviction",
      "Your talent for inspiring others through both your words and actions"
    ],
    support: [
      "Creating reflective practices to ensure belief and action remain aligned",
      "Developing discernment about which actions truly embody your beliefs",
      "Finding balance between persistence and flexibility"
    ]
  },
  "clarityVision_right_intuitionStrategy_left": {
    name: "The Visionary Channeler",
    description: "You combine crystal-clear vision with intuitive navigation, knowing exactly what you want while remaining flexible about how you'll get there. This combination allows you to hold a detailed destination in mind while following intuitive guidance on the journey. You excel at clear visualization coupled with moment-to-moment receptivity to guidance.",
    celebrate: [
      "Your ability to maintain clear outcomes while remaining open to intuitive pathways",
      "Your talent for recognizing intuitive signals that align with your vision",
      "Your skill at navigating to precise destinations via synchronistic routes"
    ],
    support: [
      "Creating simple tracking systems to validate your intuitive hits",
      "Developing practices to clarify vision when intuition presents multiple possibilities",
      "Finding ways to communicate both your clear outcomes and intuitive process"
    ]
  },
  
  // Additional Group 2 profiles would be structured similarly
  
  // GROUP 3: Three Extreme Dimensions (10 profiles - examples)
  
  "beliefMindset_right_clarityVision_right_actionOrientation_right": {
    name: "The Visionary Activator",
    description: "You combine unwavering belief, crystal-clear vision, and decisive action in a powerful triad for manifestation. With complete confidence in possibilities, precise visualization of what you want, and consistent action toward your goals, you create a formidable force for bringing your desires into reality quickly and powerfully.",
    celebrate: [
      "Your ability to align belief, vision, and action in powerful synchrony",
      "Your talent for turning possibilities into concrete realities with precision",
      "Your capacity to inspire others through your confident, focused approach"
    ],
    support: [
      "Creating space for intuitive guidance within your focused framework",
      "Developing flexibility for when the universe offers even better possibilities",
      "Finding balance between your driven approach and necessary periods of rest"
    ]
  },
  "intuitionStrategy_left_emotionalAlignment_left_actionOrientation_left": {
    name: "The Intuitive Presence Master",
    description: "You combine intuitive navigation, emotional authenticity, and contemplative presence in your manifestation approach. Rather than forcing outcomes through detailed planning or immediate action, you trust the unfolding process, remain emotionally honest, and prioritize inner alignment before outer movement. This creates a flowing, organic path to your desires.",
    celebrate: [
      "Your deep trust in the natural unfolding of manifestation",
      "Your emotional authenticity throughout your creation process",
      "Your ability to sense the perfect timing for minimal, aligned action"
    ],
    support: [
      "Creating gentle structures to support your flowing approach",
      "Developing clear ways to measure your progress without restricting your process",
      "Finding languages to communicate your intuitive approach to others"
    ]
  },
  
  // Additional Group 3 profiles would be structured similarly
  
  // Default profile when pattern doesn't match any defined profile
  "default": {
    name: "The Multi-Dimensional Creator",
    description: "Your reality creation style shows a unique combination of dimensions that creates a signature approach. This distinctive pattern allows you to navigate manifestation in ways that don't fit conventional categories, drawing on various strengths to create your own unique path to bringing your desires into reality.",
    celebrate: [
      "Your unique combination of creation strengths and preferences",
      "Your ability to adapt your approach based on different contexts",
      "Your potential to develop innovative manifestation methods"
    ],
    support: [
      "Exploring how your specific dimension combination creates special advantages",
      "Developing awareness of how your creation style differs from others",
      "Creating personalized practices that honor your unique pattern"
    ]
  }
};

// Helper function to get all profiles
export const getAllProfiles = () => profiles;

// Helper function to get a specific profile
export const getProfileById = (id) => profiles[id] || profiles.default;

// Function to determine profile ID based on dimension states
export const determineProfileId = (dimensionStates) => {
  // Count extreme dimensions (left or right)
  const extremeDimensions = Object.entries(dimensionStates).filter(
    ([_, state]) => state === 'left' || state === 'right'
  );
  
  if (extremeDimensions.length === 0) {
    // Fully balanced profile
    return 'balanced_all';
  } else if (extremeDimensions.length === 1) {
    // One extreme dimension
    const [dimension, state] = extremeDimensions[0];
    return `${dimension}_${state}`;
  } else if (extremeDimensions.length === 2) {
    // Two extreme dimensions
    const [dim1, state1] = extremeDimensions[0];
    const [dim2, state2] = extremeDimensions[1];
    return `${dim1}_${state1}_${dim2}_${state2}`;
  } else if (extremeDimensions.length === 3) {
    // Three extreme dimensions
    const [dim1, state1] = extremeDimensions[0];
    const [dim2, state2] = extremeDimensions[1];
    const [dim3, state3] = extremeDimensions[2];
    return `${dim1}_${state1}_${dim2}_${state2}_${dim3}_${state3}`;
  } else {
    // Four or more extreme dimensions - return default
    // You can extend this logic to handle 4 or 5 extreme dimensions if needed
    return 'default';
  }
};
