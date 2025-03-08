// data/recommendations.js

/**
 * This file contains all recommendation functions for the mastery insights generator.
 * It includes functions for transition recommendations and refinement recommendations.
 */

/**
 * Generate personalized recommendation based on transition type
 * @param {string} dimensionId - Dimension ID
 * @param {string} transitionKey - Transition type key
 * @param {string} ambition - User's selected ambition
 * @param {string} creativeState - User's selected creative state
 * @returns {string} - Personalized recommendation
 */
export const getTransitionRecommendation = (dimensionId, transitionKey, ambition, creativeState) => {
  // Define transition recommendations
  const transitionRecommendations = {
    beliefMindset: {
      leftToBalanced: {
        Recognition: "Begin integrating affirmative statements alongside your critical analysis, especially regarding your unique strengths.",
        Precision: "Start balancing your analytical approach with visualization of successful outcomes before detailed verification.",
        Movement: "Incorporate belief statements that affirm your capacity for self-determination alongside your questioning.",
        Innovation: "Begin practicing 'possibility thinking' sessions where you temporarily suspend critical analysis.",
        Sustainability: "Develop a hybrid approach where you alternate between critical analysis and affirmative visioning."
      },
      leftToRight: {
        Recognition: "Practice affirmation-based approaches in low-risk contexts to build comfort with this mindset shift.",
        Precision: "Begin with evidence-based affirmations, gradually reducing the need for immediate verification.",
        Movement: "Start with affirming statements about your autonomy and self-determination.",
        Innovation: "Use your analytical skills to systematically identify limiting beliefs, then practice replacing them.",
        Sustainability: "Implement a gradual transition program where you increase affirmation practices weekly."
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
        Recognition: "Start defining clearer goals for your adaptable process, especially regarding how your work will be recognized.",
        Precision: "Begin establishing more structured boundaries within your fluid approach to enhance precision.",
        Movement: "Develop clearer direction while maintaining your flexibility, creating a framework that enhances autonomy.",
        Innovation: "Create lightweight structures that capture your innovative insights without restricting your creative flow.",
        Sustainability: "Implement more consistent documentation of your evolving vision to support long-term progress."
      },
      leftToRight: {
        Recognition: "Gradually develop more specific vision statements about how you want your work to be recognized.",
        Precision: "Begin creating detailed outcome descriptions before starting projects, increasing specificity over time.",
        Movement: "Start defining clear goals for your autonomous path, creating specific waypoints while maintaining freedom.",
        Innovation: "Develop a practice of transforming open-ended ideas into structured innovation plans.",
        Sustainability: "Implement a progressive program of increasing vision clarity for long-term objectives."
      },
      balancedToRight: {
        Recognition: "Focus more deliberately on creating precise vision statements about how your work will be perceived.",
        Precision: "Enhance the detail and specificity in your goal-setting to further support precision in execution.",
        Movement: "Develop more structured plans for autonomous action while maintaining a clear sense of purpose.",
        Innovation: "Create more defined parameters for your innovative projects without limiting creative potential.",
        Sustainability: "Establish more detailed long-term vision frameworks to enhance consistency and predictability."
      },
      balancedToLeft: {
        Recognition: "Allow more flexibility in how recognition might manifest, opening to unexpected opportunities.",
        Precision: "Create more space for emergent precision by relaxing rigid definitions of success.",
        Movement: "Embrace more adaptable approaches to autonomy, allowing your path to unfold organically.",
        Innovation: "Release attachment to specific innovation outcomes, allowing more room for unexpected discoveries.",
        Sustainability: "Introduce more adaptability into your long-term vision to accommodate changing circumstances."
      },
      rightToBalanced: {
        Recognition: "Introduce selective flexibility to your detailed vision, especially regarding forms of recognition.",
        Precision: "Balance your precise vision with openness to unexpected refinements that may emerge.",
        Movement: "Create space within your structured plan for autonomous adaptation and course correction.",
        Innovation: "Complement your detailed vision with periods of open-ended exploration to enhance innovation.",
        Sustainability: "Integrate planned flexibility points into your clear long-term vision."
      },
      rightToLeft: {
        Recognition: "Begin releasing attachment to specific forms of recognition, starting with low-priority areas.",
        Precision: "Gradually reduce detailed planning in select areas to allow for more emergent precision.",
        Movement: "Experiment with less-structured approaches to autonomy in safe contexts.",
        Innovation: "Practice entering creative work without predetermined outcomes in specific projects.",
        Sustainability: "Implement structured experiments in adaptability within your long-term approach."
      }
    },
    actionOrientation: {
      leftToBalanced: {
        Recognition: "Begin incorporating more consistent action steps regarding visibility, while maintaining your reflective approach.",
        Precision: "Start alternating between reflection and targeted action to enhance precision in your work.",
        Movement: "Develop a balanced rhythm of contemplation and movement to enhance your sense of autonomy.",
        Innovation: "Create a framework that integrates periods of reflection with deliberate action to support innovation.",
        Sustainability: "Implement a sustainable cadence of reflection and action for long-term progress."
      },
      leftToRight: {
        Recognition: "Start with small, consistent actions to increase your visibility, gradually building momentum.",
        Precision: "Begin establishing regular action intervals even when reflection feels more natural.",
        Movement: "Develop a progressive program of increasing action orientation to enhance your sense of agency.",
        Innovation: "Create a practice of rapidly testing ideas rather than extended contemplation.",
        Sustainability: "Implement a gradual increase in action frequency while maintaining quality of output."
      },
      balancedToRight: {
        Recognition: "Focus more deliberately on consistent, visibility-enhancing actions to increase recognition.",
        Precision: "Increase your bias toward action while maintaining the precision that comes from your balanced approach.",
        Movement: "Enhance your action orientation to further strengthen your sense of autonomy and agency.",
        Innovation: "Accelerate your implementation cycle to more quickly bring innovative ideas to reality.",
        Sustainability: "Establish more momentum-building practices to support long-term progress."
      },
      balancedToLeft: {
        Recognition: "Create more space for strategic contemplation about how your work is recognized.",
        Precision: "Introduce more deliberate pauses for reflection to enhance the precision of your actions.",
        Movement: "Develop more thoughtful consideration of how your actions support true autonomy.",
        Innovation: "Allow more incubation time for innovative ideas before implementation.",
        Sustainability: "Integrate more reflective practices to ensure sustainable long-term action."
      },
      rightToBalanced: {
        Recognition: "Introduce strategic pauses to evaluate which actions most effectively enhance recognition.",
        Precision: "Balance your action orientation with targeted reflection to enhance precision.",
        Movement: "Complement your decisive action with thoughtful consideration of direction and purpose.",
        Innovation: "Integrate reflective periods between action cycles to deepen innovative thinking.",
        Sustainability: "Create a more balanced rhythm between action and reflection for sustainable progress."
      },
      rightToLeft: {
        Recognition: "Begin incorporating deliberate reflection periods before visibility-focused actions.",
        Precision: "Gradually increase contemplation before action in specific areas of your work.",
        Movement: "Experiment with more reflective approaches to autonomous action in safe contexts.",
        Innovation: "Practice extended consideration of innovative ideas before implementation.",
        Sustainability: "Implement structured reflection practices within your action-oriented approach."
      }
    },
    intuitionStrategy: {
      leftToBalanced: {
        Recognition: "Start integrating light planning alongside your intuitive approach to enhance how your work is recognized.",
        Precision: "Begin documenting intuitive insights to create more structured patterns for future precision.",
        Movement: "Develop simple frameworks that support your intuitive navigation while enhancing autonomy.",
        Innovation: "Create lightweight structures to capture and organize your spontaneous innovative insights.",
        Sustainability: "Implement basic tracking systems for your intuitive process to support long-term consistency."
      },
      leftToRight: {
        Recognition: "Begin developing structured plans for increasing visibility, while honoring intuitive insights.",
        Precision: "Start with simple methodical approaches that complement rather than replace intuition.",
        Movement: "Gradually implement more strategic planning to support your autonomous path.",
        Innovation: "Create a progressive system for transforming intuitive sparks into methodical innovation plans.",
        Sustainability: "Develop increasingly structured approaches to your long-term vision."
      },
      balancedToRight: {
        Recognition: "Focus more deliberately on strategic planning to enhance how your work is recognized.",
        Precision: "Increase your methodical planning while maintaining the insights that come from intuition.",
        Movement: "Enhance your strategic approach to further strengthen your sense of autonomy and direction.",
        Innovation: "Develop more comprehensive frameworks to systematize your innovative process.",
        Sustainability: "Establish more detailed strategic plans to support long-term progress."
      },
      balancedToLeft: {
        Recognition: "Create more space for intuitive guidance about how your work can be recognized.",
        Precision: "Introduce more trust in emergent precision rather than exclusively planned approaches.",
        Movement: "Develop greater reliance on intuitive navigation toward autonomy.",
        Innovation: "Allow more spontaneous exploration without predetermined methodologies.",
        Sustainability: "Integrate more intuitive decision-making within your long-term approach."
      },
      rightToBalanced: {
        Recognition: "Introduce selective intuitive exploration alongside your strategic plans for recognition.",
        Precision: "Balance your methodical approach with openness to intuitive refinements.",
        Movement: "Complement your strategic planning with intuitive navigation toward autonomy.",
        Innovation: "Integrate periods of unstructured exploration within your methodical innovation process.",
        Sustainability: "Create space for intuitive guidance within your structured long-term vision."
      },
      rightToLeft: {
        Recognition: "Begin incorporating more intuitive approaches to visibility and recognition.",
        Precision: "Gradually reduce reliance on rigid planning in select areas to allow for intuitive precision.",
        Movement: "Experiment with more intuitive approaches to autonomy in safe contexts.",
        Innovation: "Practice entering creative work without predetermined methodologies in specific projects.",
        Sustainability: "Implement structured experiments in intuitive navigation within your strategic approach."
      }
    },
    emotionalAlignment: {
      leftToBalanced: {
        Recognition: "Start developing more emotional stability alongside your expressive approach to enhance recognition.",
        Precision: "Begin integrating emotional regulation techniques while honoring your emotional depth.",
        Movement: "Develop a balanced approach that channels emotional energy toward autonomous action.",
        Innovation: "Create a framework that harnesses emotional intensity for innovation while maintaining stability.",
        Sustainability: "Implement practices that support emotional balance for long-term creative energy."
      },
      leftToRight: {
        Recognition: "Begin calibrating emotional expression specifically around how your work is recognized.",
        Precision: "Start with simple emotional regulation techniques that enhance precision without suppressing depth.",
        Movement: "Gradually implement more emotionally consistent approaches to support your autonomous path.",
        Innovation: "Create a progressive system for channeling emotional energy into consistent innovative output.",
        Sustainability: "Develop increasingly calibrated approaches to emotional management."
      },
      balancedToRight: {
        Recognition: "Focus more deliberately on emotional calibration to enhance how your work is perceived.",
        Precision: "Increase your emotional consistency while maintaining the authentic connection that drives precision.",
        Movement: "Enhance your emotional stability to further strengthen your sense of autonomous direction.",
        Innovation: "Develop more reliable emotional states to systematize your innovative process.",
        Sustainability: "Establish more consistent emotional calibration to support long-term progress."
      },
      balancedToLeft: {
        Recognition: "Create more space for authentic emotional expression around how your work is recognized.",
        Precision: "Introduce more emotional depth and variety rather than exclusively stable approaches.",
        Movement: "Develop greater connection with the full spectrum of emotions that drive autonomy.",
        Innovation: "Allow more emotional exploration to fuel spontaneous innovation.",
        Sustainability: "Integrate more emotional authenticity within your long-term approach."
      },
      rightToBalanced: {
        Recognition: "Introduce selective emotional expressiveness alongside your calibrated approach to recognition.",
        Precision: "Balance your emotional consistency with openness to the depth that enhances precision.",
        Movement: "Complement your stable emotional approach with authentic expression to enhance autonomy.",
        Innovation: "Integrate periods of emotional exploration within your consistent creative process.",
        Sustainability: "Create space for emotional variety within your calibrated long-term approach."
      },
      rightToLeft: {
        Recognition: "Begin incorporating more authentic emotional expression around visibility and recognition.",
        Precision: "Gradually reduce emotional regulation in select areas to allow for more authentic precision.",
        Movement: "Experiment with more emotionally expressive approaches to autonomy in safe contexts.",
        Innovation: "Practice connecting with a wider emotional range during specific creative projects.",
        Sustainability: "Implement structured experiments in emotional expression within your consistent approach."
      }
    }
  };
  
  // Return specific recommendation if available
  if (transitionRecommendations[dimensionId] && 
      transitionRecommendations[dimensionId][transitionKey] && 
      transitionRecommendations[dimensionId][transitionKey][ambition]) {
    return transitionRecommendations[dimensionId][transitionKey][ambition];
  }
  
  // Generic transition recommendations
  const genericTransitions = {
    leftToBalanced: `Begin integrating elements from the opposite end of the spectrum in low-risk situations. This balanced approach will strengthen your ${dimensionId} while honoring your natural tendencies.`,
    balancedToLeft: `Focus more deliberately on developing the analytical qualities from the left side of this spectrum, which will enhance your natural strengths in ${dimensionId}.`,
    balancedToRight: `Focus more deliberately on developing the affirmative qualities from the right side of this spectrum, which will complement your existing approach to ${dimensionId}.`,
    rightToBalanced: `While maintaining your affirmative strengths, begin selectively incorporating analytical elements to create a more integrated approach to ${dimensionId}.`,
    leftToRight: `Start with small, gradual shifts toward a more affirmative approach, particularly in areas where you already feel comfortable. This will expand your range in ${dimensionId}.`,
    rightToLeft: `Start with small, gradual shifts toward a more analytical approach, particularly in areas where precision matters most. This will deepen your capacity in ${dimensionId}.`
  };
  
  return genericTransitions[transitionKey] || `Focus on gradually moving toward your target state in ${dimensionId}.`;
};

/**
 * Get recommendation for refining within the same state
 * @param {string} dimensionId - Dimension ID
 * @param {string} state - Dimension state
 * @param {string} ambition - User's selected ambition
 * @returns {string} - Refinement recommendation
 */
export const getRefiningRecommendation = (dimensionId, state, ambition) => {
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
        Recognition: "Your contemplative approach provides depth to your work. Refine it by focusing reflection specifically on aspects that enhance recognition.",
        Precision: "Your thoughtful nature serves precision well. Consider scheduling dedicated 'precision reviews' to systematize this strength.",
        Movement: "Your reflective approach supports authentic autonomy. Develop practices to translate insights into self-directed pathways.",
        Innovation: "Your contemplative nature excellently serves innovation. Create specific reflection frameworks focused on breakthrough thinking.",
        Sustainability: "Your measured approach supports sustainability. Implement reflection cycles that specifically support long-term vision."
      },
      balanced: {
        Recognition: "Your balanced action approach serves recognition well. Clarify which recognition goals need immediate action versus thoughtful positioning.",
        Precision: "Your balance between action and reflection is ideal for precision. Develop clearer criteria for when each approach serves accuracy best.",
        Movement: "Your balanced action orientation supports autonomy. Refine your understanding of when movement versus pause enhances true freedom.",
        Innovation: "Your balanced approach supports innovation. Create clearer guidelines for action phases versus incubation phases in your creative process.",
        Sustainability: "Your balanced action orientation supports sustainability. Establish clearer rhythms of engagement and restoration."
      },
      right: {
        Recognition: "Your action orientation powerfully drives recognition. Refine it by focusing your consistent action on highest-visibility opportunities.",
        Precision: "While maintaining your bias for action, implement strategic pauses at key decision points to enhance precision.",
        Movement: "Your decisive approach strongly supports autonomy. Focus your energy on actions that specifically enhance your sense of freedom.",
        Innovation: "Your action-driven approach provides momentum. Targeted 'reflection sprints' might enhance innovation quality.",
        Sustainability: "Your bias for action supports progress. Implement measurement systems to ensure your efforts build upon each other."
      }
    },
    intuitionStrategy: {
      left: {
        Recognition: "Your intuitive approach brings authenticity to your work. Refine it by tuning your intuition specifically to recognition opportunities.",
        Precision: "Your instinctual nature can serve precision well. Consider documenting intuitive hits to track patterns that enhance accuracy.",
        Movement: "Your intuitive navigation supports genuine autonomy. Develop practices to distinguish true intuition from habitual responses.",
        Innovation: "Your spontaneous approach excellently serves innovation. Create light frameworks to capture and develop intuitive breakthroughs.",
        Sustainability: "Your intuitive approach provides adaptability. Implement simple tracking to identify patterns that support long-term progress."
      },
      balanced: {
        Recognition: "Your balanced approach to intuition and strategy serves recognition well. Clarify which visibility goals benefit from structure versus spontaneity.",
        Precision: "Your integration of intuition and methodology is ideal for precision. Develop clearer criteria for when to rely on each approach.",
        Movement: "Your balanced approach supports autonomy. Refine your understanding of when structure versus intuition enhances true freedom.",
        Innovation: "Your balanced approach supports innovation. Create clearer guidelines for methodical phases versus intuitive phases in your creative process.",
        Sustainability: "Your balanced approach supports sustainability. Establish clearer frameworks for when planning versus intuitive navigation best serves long-term goals."
      },
      right: {
        Recognition: "Your methodical approach provides consistency to your work. Refine it by ensuring your strategic plans specifically target recognition opportunities.",
        Precision: "Your strategic nature strongly supports precision. Focus on enhancing your methodologies with even more specific validation metrics.",
        Movement: "While maintaining your structured approach, identify aspects of your autonomy that might benefit from more intuitive navigation.",
        Innovation: "Your methodical approach provides structure. Scheduled 'intuition sessions' might enhance breakthrough thinking.",
        Sustainability: "Your strategic approach supports sustainability. Implement regular reviews to ensure your methodologies remain effective."
      }
    },
    emotionalAlignment: {
      left: {
        Recognition: "Your emotional expressiveness brings authenticity to your work. Refine it by channeling emotional energy specifically toward recognition opportunities.",
        Precision: "Your emotional depth can serve precision well. Consider tracking which emotional states enhance versus detract from accuracy.",
        Movement: "Your emotional range supports genuine autonomy. Develop practices to harness emotional energy as fuel for self-directed action.",
        Innovation: "Your emotional expressiveness excellently serves innovation. Create frameworks to translate emotional insights into concrete creative outputs.",
        Sustainability: "Your emotional depth provides richness and authenticity. Implement practices to ensure emotional resources remain renewable."
      },
      balanced: {
        Recognition: "Your balanced emotional approach serves recognition well. Clarify which visibility goals benefit from expression versus calibration.",
        Precision: "Your integration of emotional awareness and regulation is ideal for precision. Develop clearer criteria for when to emphasize each approach.",
        Movement: "Your balanced emotional approach supports autonomy. Refine your understanding of when expression versus regulation enhances true freedom.",
        Innovation: "Your balanced approach supports innovation. Create clearer guidelines for emotionally expressive phases versus regulated phases in your creative process.",
        Sustainability: "Your balanced emotional approach supports sustainability. Establish clearer frameworks for emotional cycles that serve long-term goals."
      },
      right: {
        Recognition: "Your emotional calibration provides consistency to your work. Refine it by ensuring your emotional regulation specifically supports recognition opportunities.",
        Precision: "Your emotional stability strongly supports precision. Focus on maintaining this consistency even in challenging situations.",
        Movement: "While maintaining your regulated approach, identify aspects of your autonomy that might benefit from more emotional expression.",
        Innovation: "Your emotional calibration provides stability. Scheduled 'emotional exploration' sessions might enhance creative breakthrough.",
        Sustainability: "Your regulated approach supports sustainability. Implement practices that ensure emotional resources remain renewable."
      }
    }
  };
  
  // Return specific recommendation if available
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
};

/**
 * Generate recommendation based on transition type
 * @param {string} dimensionId - Dimension ID
 * @param {string} currentState - Current dimension state
 * @param {string} targetState - Target dimension state
 * @param {string} ambition - User's selected ambition
 * @param {string} creativeState - User's selected creative state
 * @returns {string} - Personalized recommendation
 */
export const getRecommendation = (dimensionId, currentState, targetState, ambition, creativeState) => {
  // If no change in state, suggest refinement
  if (currentState === targetState) {
    return getRefiningRecommendation(dimensionId, currentState, ambition);
  }
  
  // Generate transition-specific recommendation
  const transitionKey = `${currentState}To${targetState.charAt(0).toUpperCase() + targetState.slice(1)}`;
  return getTransitionRecommendation(dimensionId, transitionKey, ambition, creativeState);
};
