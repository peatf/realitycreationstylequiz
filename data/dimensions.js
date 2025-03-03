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
        description: 'Strengths: Sharp critical thinking and a rigorous, questioning approach. Potential Challenges: Over-analysis may lead to hesitation or cynicism. Everyday Manifestations: You tend to scrutinize new ideas, seeking evidence before fully committing.',
        frameworks: 'Hermeticism, Stoicism, Rational Buddhism',
        practices: 'Journaling for pattern recognition, shadow work',
        tools: 'Tarot (as a pattern-mirroring tool rather than divination), To Be Magnetic (for belief reprogramming with neuroscience elements)'
      },
      balanced: {
        name: 'Balanced Manifester',
        description: 'Strengths: Integrates healthy skepticism with optimism; flexible and open-minded. Potential Challenges: Might sometimes struggle to decisively embrace new perspectives. Everyday Manifestations: You weigh pros and cons thoughtfully while remaining open to possibilities.',
        frameworks: 'Jungian Depth Psychology, Human Design, Quantum Mechanics applied to manifestation, Realization Toolkit',
        practices: 'EFT tapping for subconscious rewiring, Sigil Magic (bridges logic and the unknown), Visionary meditation',
        tools: 'Gene Keys (for unlocking potential), Neville Goddard (law of assumption)'
      },
      right: {
        name: 'Affirmative Visionary',
        description: 'Strengths: Embraces possibilities with confidence and a positive, expansive outlook. Potential Challenges: Can overlook details or act impulsively in the excitement of new ideas. Everyday Manifestations: You quickly adopt new concepts and trust in the process to bring opportunities to life.',
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
        description: 'Strengths: Highly adaptable and creative, comfortable with evolving ideas. Potential Challenges: May struggle with setting concrete, actionable goals. Everyday Manifestations: Your goals naturally shift over time, and you're at ease with ambiguity and change.',
        frameworks: 'Taoism, Shamanic Journeying, Akashic Records',
        practices: 'Automatic writing, Dream interpretation, Astrocartography (exploring the role of place in their path)',
        tools: 'Oracle cards for organic guidance, Sound healing, Somatic Flow (movement-based intuition)'
      },
      balanced: {
        name: 'Adaptive Visionary',
        description: 'Strengths: Balances clear goals with the flexibility to adapt as circumstances change. Potential Challenges: Occasionally caught between staying focused and remaining adaptable. Everyday Manifestations: You set a clear overall direction but are willing to adjust plans when new opportunities arise.',
        frameworks: 'Human Design (especially Strategy/Authority), Buddhist Middle Way, Realization Toolkit',
        practices: 'Timeline jumping, Reality scripting, Structured visualization (for maintaining adaptability while manifesting clear goals)',
        tools: 'Tarot for navigating next steps, Astrology (progressions & transits for timing clarity)'
      },
      right: {
        name: 'Focused Visionary',
        description: 'Strengths: Exceptional at defining precise, actionable goals and maintaining a strong direction. Potential Challenges: May become rigid or resistant to unexpected changes. Everyday Manifestations: You consistently plan with clarity and pursue your objectives with determination.',
        frameworks: 'Esoteric Kabbalah, Mystery Schools, Solar Magic (harnessing sun cycles for clarity)',
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
        description: 'Strengths: Thoughtful and reflective; you consider all angles before acting. Potential Challenges: Tendency to delay decisions or overthink, which can slow progress. Everyday Manifestations: You often pause to reflect deeply, ensuring actions are well-considered and measured.',
        frameworks: 'Zen Buddhism, Depth Hypnosis, Divination Systems (for indirect guidance)',
        practices: 'Bibliomancy (random book wisdom), Lucid Dreaming for pre-experiencing outcomes, Ancestral Connection for deep-rooted insight',
        tools: 'I Ching for calculated movement, Shamanic drumming'
      },
      balanced: {
        name: 'Measured Mover',
        description: 'Strengths: Strikes a healthy balance between reflection and decisive action. Potential Challenges: May occasionally hesitate if caught between overthinking and impulsivity. Everyday Manifestations: You take well-timed actions that are informed by careful thought while staying responsive to opportunities.',
        frameworks: 'Esoteric Christianity, Alchemy (transmuting thought into action), Realization Toolkit (align actions with energetic clarity)',
        practices: 'Movement rituals (Qigong, Kundalini), Automatic action-taking (habit stacking to create momentum), Strategy tarot spreads',
        tools: 'Rune readings, To Be Magnetic for structured energetic shifts'
      },
      right: {
        name: 'Decisive Doer',
        description: 'Strengths: Bold, proactive, and results-oriented in making things happen. Potential Challenges: Risk of acting too quickly without full analysis, which might lead to missteps. Everyday Manifestations: You're known for quickly seizing opportunities and translating ideas into action with confidence.',
        frameworks: 'Chaos Magick (harnessing momentum), Theurgy (divine manifestation techniques)',
        practices: 'Ritual baths for energetic resets, Mars or Solar invocations (for sustained action), Daily alignment statements',
        tools: 'Crystal grids for motivation, Sacred Contracts (Caroline Myss), Timeline Jumping'
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
        description: 'Strengths: Creative, spontaneous, and highly innovative. Potential Challenges: May lack structure and consistency, leading to unpredictable outcomes. Everyday Manifestations: You rely on gut feelings and are open to unexpected insights, often improvising rather than planning extensively.',
        frameworks: 'Animism, Mysticism, Ecstatic Practices',
        practices: 'Dance divination, Plant spirit communication, Surrender meditations',
        tools: 'Tea leaf readings, Intuitive tarot'
      },
      balanced: {
        name: 'Integrative Thinker',
        description: 'Strengths: Blends gut instincts with logical planning for well-rounded decision-making. Potential Challenges: Sometimes experiences internal conflict when intuition and strategy pull in different directions. Everyday Manifestations: You combine spontaneous ideas with structured plans, ensuring creativity is balanced by order.',
        frameworks: 'Jungian Alchemy, The Kybalion (Hermetic Principles), Biocentrism, Realization Toolkit',
        practices: 'Energetic time mapping, Hybrid manifestation techniques (grounding intuition with strategy), Astral work with specific goals, Timeline Jumping',
        tools: 'Sacred geometry grids, Dream incubation for solutions'
      },
      right: {
        name: 'Methodical Planner',
        description: 'Strengths: Highly organized and systematic, excelling in detailed planning. Potential Challenges: Can become overly rigid, potentially missing out on creative leaps. Everyday Manifestations: You create thorough, step-by-step plans and rely on structure to achieve your goals consistently.',
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
        description: 'Strengths: Highly expressive, energetic, and passionate—great for creative inspiration. Potential Challenges: Emotional intensity might lead to volatility or burnout if not managed. Everyday Manifestations: You wear your heart on your sleeve, using deep, vivid emotions as a driving force in your creative process.',
        frameworks: 'Tantra, Archetypal Psychology, Ecstatic Dance',
        practices: 'Fire magic for passion, Sound toning for energy balance, Theatrical shadow work',
        tools: 'Color therapy, Drumming meditations'
      },
      balanced: {
        name: 'Harmonized Heart',
        description: 'Strengths: Emotionally balanced and aware; you maintain stability while still connecting with your feelings. Potential Challenges: May sometimes hold back full expression in favor of maintaining equilibrium. Everyday Manifestations: You respond to situations with calm and thoughtful emotion, aligning your feelings with reason and practicality.',
        frameworks: 'Taoist Inner Alchemy, Reiki, The Law of Rhythm, Realization Toolkit',
        practices: 'Emotional frequency attunement, Embodied visualization, Forest bathing, Timeline Jumping',
        tools: 'Singing bowls, Emotion-focused tarot spreads'
      },
      right: {
        name: 'Consistently Calibrated',
        description: 'Strengths: Steady, composed, and resilient in the face of emotional challenges. Potential Challenges: Can appear overly controlled or detached, missing the nuance of raw emotional expression. Everyday Manifestations: You manage stress and emotions with consistency, using your steady state to guide decisions and maintain clarity under pressure.',
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
