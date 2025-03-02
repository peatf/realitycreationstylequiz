// data/dimensions.js

// This file contains the dimension definitions and their state descriptions

export const dimensions = {
  beliefMindset: {
    id: 'beliefMindset',
    title: 'Belief & Mindset',
    leftLabel: 'Inquisitive Skeptic',
    rightLabel: 'Affirmative Visionary',
    states: {
      left: {
        name: 'Inquisitive Skeptic',
        description: 'You approach reality creation with a naturally questioning mind, valuing evidence and logical understanding. This analytical approach helps you refine techniques and build a solid foundation for your practice based on what demonstrably works for you.',
        frameworks: 'Hermeticism, Stoicism, Rational Buddhism',
        practices: 'Journaling for pattern recognition, shadow work',
        tools: 'Tarot (as a pattern-mirroring tool rather than divination), To Be Magnetic (for belief reprogramming with neuroscience elements)'
      },
      balanced: {
        name: 'Balanced Thinker',
        description: 'You blend healthy skepticism with open-minded belief, allowing you to question when needed while embracing possibilities. This balanced approach gives you flexibility to critically evaluate new ideas while maintaining the positive mindset necessary for effective manifestation.',
        frameworks: 'Jungian Depth Psychology, Human Design, Quantum Mechanics applied to manifestation, Realization Toolkit',
        practices: 'EFT tapping for subconscious rewiring, Sigil Magic (bridges logic and the unknown), Visionary meditation',
        tools: 'Gene Keys (for unlocking potential), Neville Goddard (law of assumption)'
      },
      right: {
        name: 'Affirmative Visionary',
        description: 'You wholeheartedly embrace the possibilities of reality creation with enthusiasm and conviction. Your strong belief system and affirmative mindset create a powerful foundation for manifesting your desires through unwavering faith in the process.',
        frameworks: 'Reality Transurfing, New Thought Movement, Chaos Magick',
        practices: 'Future scripting, Realization Toolkit for embodying energetics, Deity Work (working with archetypes like Lakshmi, Hermes, or The Magician)',
        tools: 'Oracle cards, Affirmation Grids, Rapid Manifestation Techniques, Timeline Jumping'
      }
    }
  },
  
  clarityVision: {
    id: 'clarityVision',
    title: 'Clarity of Vision',
    leftLabel: 'Fluid Dreamer',
    rightLabel: 'Focused Visionary',
    states: {
      left: {
        name: 'Fluid Dreamer',
        description: 'You keep your visions flexible and open to evolution, allowing your manifestations to take shape organically. This fluid approach lets you adapt quickly to new possibilities and embrace unexpected opportunities that may be even better than your original concept.',
        frameworks: 'Taoism, Shamanic Journeying, Akashic Records',
        practices: 'Automatic writing, Dream interpretation, Astrocartography (exploring the role of place in their path)',
        tools: 'Oracle cards for organic guidance, Sound healing, Somatic Flow (movement-based intuition)'
      },
      balanced: {
        name: 'Adaptive Visioner',
        description: 'You balance clear intention with openness to possibilities, combining focused vision with flexibility. This adaptive approach allows you to maintain direction while remaining receptive to intuitive adjustments and unexpected opportunities along your manifestation journey.',
        frameworks: 'Human Design (especially Strategy/Authority), Buddhist Middle Way, Realization Toolkit',
        practices: 'Timeline jumping, Reality scripting, Structured visualization (for maintaining adaptability while manifesting clear goals)',
        tools: 'Tarot for navigating next steps, Astrology (progressions & transits for timing clarity)'
      },
      right: {
        name: 'Focused Visionary',
        description: 'You create with crystal-clear vision and unwavering focus on your specific desired outcomes. This focused approach helps you manifest exactly what you want through detailed visualization and persistent concentration on your clearly defined goals.',
        frameworks: 'Esoteric Kabbalah, Mystery Schools, Solar Magic (harnessing sun cycles for clarity), Realization Toolkit',
        practices: 'Precision goal-setting with planetary cycles, Candle magic for focus, Neuro-somatic rewiring',
        tools: 'Sigils for goal embodiment, Stoic journaling, Realization Toolkit for refinement and alignment'
      }
    }
  },
  
  actionOrientation: {
    id: 'actionOrientation',
    title: 'Action Orientation',
    leftLabel: 'Contemplative Observer',
    rightLabel: 'Decisive Doer',
    states: {
      left: {
        name: 'Contemplative Observer',
        description: 'You prioritize inner alignment and reflection before taking physical action on your intentions. This contemplative approach helps you ensure your actions are aligned with your true desires and that you\'re moving from an energetically optimal state.',
        frameworks: 'Zen Buddhism, Depth Hypnosis, Divination Systems (for indirect guidance)',
        practices: 'Bibliomancy (random book wisdom), Lucid Dreaming for pre-experiencing outcomes, Ancestral Connection for deep-rooted insight',
        tools: 'I Ching for calculated movement, Shamanic drumming'
      },
      balanced: {
        name: 'Measured Mover',
        description: 'You harmonize thoughtful consideration with decisive action, knowing when to reflect and when to move. This balanced approach helps you take inspired action while maintaining the inner alignment necessary for effective manifestation.',
        frameworks: 'Esoteric Christianity, Alchemy (transmuting thought into action), Realization Toolkit (align actions with energetic clarity)',
        practices: 'Movement rituals (Qigong, Kundalini), Automatic action-taking (habit stacking to create momentum), Strategy tarot spreads',
        tools: 'Rune readings, To Be Magnetic for structured energetic shifts'
      },
      right: {
        name: 'Decisive Doer',
        description: 'You take immediate, consistent action toward your manifestations once you set an intention. This action-oriented approach helps you create momentum and tangible results through persistent effort and proactive engagement with your goals.',
        frameworks: 'Chaos Magick (harnessing momentum), Theurgy (divine manifestation techniques)',
        practices: 'Ritual baths for energetic resets, Mars or Solar invocations (for sustained action), Daily alignment statements',
        tools: 'Crystal grids for motivation, Realization Toolkit for high-speed refinement, Sacred Contracts (Caroline Myss), Timeline Jumping'
      }
    }
  },
  
  intuitionStrategy: {
    id: 'intuitionStrategy',
    title: 'Intuition vs. Strategy',
    leftLabel: 'Instinctual Explorer',
    rightLabel: 'Methodical Planner',
    states: {
      left: {
        name: 'Instinctual Explorer',
        description: 'You navigate your reality creation process primarily through intuition and inner guidance. This instinctual approach helps you remain responsive to subtle energetic shifts and follow the path of least resistance toward your manifestations.',
        frameworks: 'Animism, Mysticism, Ecstatic Practices',
        practices: 'Dance divination, Plant spirit communication, Surrender meditations',
        tools: 'Tea leaf readings, Intuitive tarot'
      },
      balanced: {
        name: 'Intuitive Strategist',
        description: 'You combine structured approaches with intuitive guidance, using both your analytical and intuitive faculties. This balanced approach helps you create effective frameworks while remaining flexible enough to follow intuitive nudges and synchronicities.',
        frameworks: 'Jungian Alchemy, The Kybalion (Hermetic Principles), Biocentrism, Realization Toolkit',
        practices: 'Energetic time mapping, Hybrid manifestation techniques (grounding intuition with strategy), Astral work with specific goals, Timeline Jumping',
        tools: 'Sacred geometry grids, Dream incubation for solutions'
      },
      right: {
        name: 'Methodical Planner',
        description: 'You employ systematic strategies and structured techniques in your manifestation practice. This methodical approach helps you create reliable results through consistent processes and well-planned steps toward your desired outcomes.',
        frameworks: 'Saturnian Mysticism (structuring the unseen), Sacred Geometry, Kabbalistic Pathworking',
        practices: 'Lunar goal mapping, Strategic breathwork, Color magic for productivity',
        tools: 'Oracle cards for precise direction, Solomonic Rituals'
      }
    }
  },
  
  emotionalAlignment: {
    id: 'emotionalAlignment',
    title: 'Emotional Alignment',
    leftLabel: 'Expressively Dynamic',
    rightLabel: 'Consistently Calibrated',
    states: {
      left: {
        name: 'Expressively Dynamic',
        description: 'You embrace the full spectrum of your emotional experience as part of your manifestation process. This expressive approach helps you work authentically with your emotions as powerful creative forces without suppressing or bypassing them.',
        frameworks: 'Tantra, Archetypal Psychology, Ecstatic Dance',
        practices: 'Fire magic for passion, Sound toning for energy balance, Theatrical shadow work',
        tools: 'Color therapy, Drumming meditations'
      },
      balanced: {
        name: 'Emotionally Flexible',
        description: 'You balance emotional authenticity with intentional calibration, honoring feelings while guiding them productively. This flexible approach helps you process emotions healthily while cultivating the emotional states that best support your manifestations.',
        frameworks: 'Taoist Inner Alchemy, Reiki, The Law of Rhythm, Realization Toolkit',
        practices: 'Emotional frequency attunement, Embodied visualization, Forest bathing, Timeline Jumping',
        tools: 'Singing bowls, Emotion-focused tarot spreads'
      },
      right: {
        name: 'Consistently Calibrated',
        description: 'You deliberately maintain consistent, positive emotional states to support your manifestations. This calibrated approach helps you create stable energetic conditions through emotional management techniques and practiced emotional regulation.',
        frameworks: 'Zen Stoicism, Raja Yoga, Cosmic Ordering, Realization Toolkit',
        practices: 'Sacred neutrality practices, Slow manifestation techniques, Candle meditations for emotional grounding',
        tools: 'Chronomancy (aligning life timing), Ritual incense for stability'
      }
    }
  }
};

// Helper function to get all dimensions
export const getAllDimensions = () => Object.values(dimensions);

// Helper function to get dimension by ID
export const getDimensionById = (id) => dimensions[id];

// Helper function to get dimension state
export const getDimensionState = (dimensionId, score) => {
  // Bin the score into left, balanced, or right
  if (score >= 1.0 && score <= 2.4) {
    return 'left';
  } else if (score >= 2.5 && score <= 3.9) {
    return 'balanced';
  } else if (score >= 4.0 && score <= 5.0) {
    return 'right';
  }
  return 'balanced'; // Default fallback
};
