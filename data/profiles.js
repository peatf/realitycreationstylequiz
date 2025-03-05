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
    name: "The Balanced Manifester",
    description: "You have a remarkably balanced approach to reality creation, drawing on multiple methods and flexibly adapting your approach based on the situation. This versatility allows you to navigate various manifestation scenarios with ease, drawing from a diverse toolkit of beliefs, visions, actions, intuitions, and emotional states.",
    celebrate: [
      "You are naturally adaptable, able to flow between different approaches without getting stuck in rigidity",
      "This means you can draw from multiple strategies depending on what's needed, making you a flexible and resourceful creator",
      "Your ability to integrate critical thinking with intuition, action with reflection, and belief with skepticism allows you to move in ways that are fluid yet grounded",
      "Your even-keeled energy means you don't get easily derailed by highs or lows, you maintain steady momentum"
    ],
    support: [
      "Since your power comes from integration rather than extremes, focus on honoring the unique rhythm of your business evolution rather than looking for a single 'perfect' strategy",
      "Your ability to continuously create spaces for yourself will be key",
      "When you feel resistance, see it as a tool for refining your preferences, not a signal that something is wrong",
      "Because you don't over-identify with one extreme, stay attuned to where your dominant focus is leading your results"
    ]
  },
  
  // Belief & Mindset extreme profiles
  "beliefMindset_left": {
    name: "The Inquisitive Skeptic",
    description: "Your inquisitive, evidence-based approach to reality creation gives you a solid foundation built on personal verification. While you value the power of belief, you prefer to build it through direct experience and logical understanding rather than faith alone. This analytical approach helps you refine your techniques and build genuine confidence over time.",
    celebrate: [
      "Your analytical approach keeps you from falling into wishful thinking or jumping onto bandwagons that don't actually support you",
      "You refine ideas through rigorous testing, meaning that when you do commit to something, it is deeply solid and resilient",
      "Your skepticism isn't a block, it's a powerful discernment tool that prevents wasted energy on ideas that don't hold up under scrutiny"
    ],
    support: [
      "Since your natural tendency is to question, use that as a means of deepening your clarity rather than reinforcing doubt",
      "Your resistance is trying to tell you something about your preferences",
      "Instead of dismissing manifestation principles outright, approach them like an experiment",
      "Test, track, and evaluate results based on your direct experience rather than secondhand beliefs",
      "If you ever find yourself stuck in hesitation, remember that action doesn't require absolute certainty, it only requires enough information to take the next step"
    ]
  },
  "beliefMindset_right": {
    name: "The Affirmative Believer",
    description: "Your unwavering belief and optimistic mindset create a powerful foundation for manifestation. You naturally embrace the unlimited possibilities of reality creation with enthusiasm and conviction. This affirmative approach allows you to transcend limitations that might hold others back and create rapid shifts through the power of your belief.",
    celebrate: [
      "Your faith in the manifestation process is an energetic amplifier",
      "Your ability to see the best possible outcome and lean into trust creates a magnetic pull toward opportunities and resources",
      "You operate with an openness that allows for more synchronicity, unexpected doors opening, and the ability to turn setbacks into stepping stones",
      "Others may hesitate, waiting for proof, but your energy fuels momentum before the proof even arrives"
    ],
    support: [
      "Your gift is belief, so your focus should be on refining what that belief is tethered to",
      "Instead of adopting money or business goals based on external definitions, ask yourself what your ability to manifest success means to you and then what having that success means",
      "Doing this will anchor your belief in an intrinsic reality rather than borrowed desires",
      "Continue to let reality reflect things back to you without expecting a linear exchange, trust isn't about 'I believe, therefore it happens immediately'; it's about holding belief through the unknown"
    ]
  },
  
  // Clarity of Vision extreme profiles
  "clarityVision_left": {
    name: "The Fluid Dreamer",
    description: "Your fluid, adaptable approach to visioning allows your manifestations to take shape organically. Rather than locking into one specific outcome, you keep your options open and allow your desires to evolve naturally. This open-ended approach helps you remain receptive to unexpected opportunities that may be even better than your original concept.",
    celebrate: [
      "You have a natural openness to evolution, allowing your dreams to shift and grow as new insights show up",
      "Unlike those who cling rigidly to a fixed vision, you embrace the freedom of possibility, which makes you exceptionally creative and adaptable",
      "You don't get stuck in outdated goals, you allow your desires to refine themselves over time, leading to a more authentic and customized reality"
    ],
    support: [
      "Your greatest strength is also your greatest challenge, your fluidity is powerful, but only when it's rooted in a stable connection with yourself",
      "Your external reality is reflecting back to you ways to communicate with yourself beyond your mind's understanding",
      "Instead of seeking certainty, trust that clarity will emerge as you move",
      "Your job isn't to force a fixed path but to pay attention to what keeps calling you back",
      "Rather than fearing 'structure' identify your favorite support systems that allow space for your evolution rather than limiting it"
    ]
  },
  "clarityVision_right": {
    name: "The Focused Visionary",
    description: "Your crystal-clear vision and detailed focus create a powerful template for your manifestations. You excel at defining exactly what you want with specific clarity, which allows the universe to respond with matching precision. This focused approach helps you create exactly what you envision without ambiguity or confusion.",
    celebrate: [
      "Your clarity is a powerful directive force, once you set your sights on something, you move toward it with conviction",
      "You don't waste time on distractions because you know exactly what you want",
      "This focused energy creates internal agreement between your desires and your actions, making it easier for you to recognize and act on opportunities",
      "Your vision holds weight, pulling reality toward you like a gravitational force"
    ],
    support: [
      "Since your strength lies in clarity, the key for you is ensuring that clarity is coming from within, not external projections",
      "A goal disconnected from you will feel like a point of contention inside of you",
      "Before committing to a vision, ask yourself: Is this something I deeply desire, or is it something I think I should want?",
      "Clarity should be symbolically rich and emotionally meaningful to you",
      "If doubt arises, don't mistake it for a block, see it as an opportunity to fine-tune your vision rather than abandon it"
    ]
  },
  
  // Action Orientation extreme profiles
  "actionOrientation_left": {
    name: "The Contemplative Observer",
    description: "Your contemplative approach to manifestation prioritizes inner alignment before outer action. You understand that the quality of your consciousness and state of being ultimately determines your results more than quantity of action. This reflective approach helps ensure your actions are aligned with your true desires and taken from an optimal energetic state.",
    celebrate: [
      "You bring depth, reflection, and wisdom to the reality-creation process",
      "Unlike those who rush into action, you take time to fully understand what's unfolding, which allows you to make more intentional and well-thought-out decisions",
      "Your ability to sit with uncertainty instead of forcing answers makes you a deeply receptive creator"
    ],
    support: [
      "Because you are naturally contemplative, your path isn't about rushing action but rather about trusting the unfolding process",
      "Giving reality space to show you to yourself requires openness",
      "If you ever feel like you're 'waiting too long,' check in: Am I avoiding action due to fear, or am I honoring my natural timing?",
      "Your process and timing is meant to look only like yours, your success comes from moving at the speed of internal harmony over urgency"
    ]
  },
  "actionOrientation_right": {
    name: "The Decisive Doer",
    description: "Your action-oriented approach to manifestation creates powerful momentum toward your desires. You understand that consistent, decisive action sends a clear message to the universe about your intentions and opens doors that contemplation alone cannot. This proactive approach helps you create tangible results and rapid progress toward your goals.",
    celebrate: [
      "You take immediate, impactful action, transforming ideas into reality without overthinking",
      "Where others get lost in hesitation, you create momentum through movement",
      "Your ability to act on inspiration in the moment makes you a fast manifester, opportunities don't sit and wait for you, and you don't wait for them either"
    ],
    support: [
      "While speed is your gift, ensure that your actions are aligned rather than just abundant",
      "Your dominant focus creates the results you experience moving forward",
      "Ask yourself: Am I moving toward something I want, or am I just moving?",
      "The key to harnessing your energy is ensuring that movement serves your bigger vision rather than distracting from it",
      "If you feel 'stuck', rather than pushing harder, pause and ask what genuinely feels in agreement before making your next move"
    ]
  },
  
  // Intuition vs Strategy extreme profiles
  "intuitionStrategy_left": {
    name: "The Instinctual Explorer",
    description: "Your intuition-led approach to manifestation allows you to follow the path of least resistance toward your desires. Rather than rigid planning, you navigate by feel, following internal guidance and synchronistic signs. This intuitive approach helps you remain flexible and responsive to the universe's feedback during your manifestation process.",
    celebrate: [
      "Your gut-driven approach to manifestation makes you an intuitive creator, able to sense and move towards opportunities as they arise",
      "You trust yourself in the moment, allowing spontaneity and inspiration to guide you in ways that cannot be predicted or forced",
      "Your ability to see patterns before they fully emerge makes you uniquely equipped to discovering paths others might overlook"
    ],
    support: [
      "Because your strength is acting on instinct, your the game you're playing in reality is less about forcing yourself into rigid plans than it is about strengthening your ability to trust what feels right",
      "Your external reality is reflecting back to you ways to communicate with yourself beyond your mind's understanding",
      "The key to your success is allowing your instincts to refine themselves over time, rather than seeing them as random impulses",
      "Instead of looking for proof before moving, track the patterns in how your intuition leads you to aligned opportunities"
    ]
  },
  "intuitionStrategy_right": {
    name: "The Methodical Planner",
    description: "Your methodical, strategic approach to manifestation creates reliable, consistent results. You excel at creating effective frameworks and processes that systematically move you toward your desires. This structured approach helps you track your progress clearly and make adjustments based on tangible feedback.",
    celebrate: [
      "Your ability to bring structure and strategy to reality creation makes it so that ideas don't stay abstract concepts, they become real, tangible outcomes",
      "You thrive when there's a clear roadmap, and your meticulous planning maximizes certainty, allowing for steady progress",
      "Your gift is creating frameworks that transform ideas into reality with precision"
    ],
    support: [
      "While strategy is your strength, ensure that you're not using planning as a substitute for movement",
      "Structure is an organized framework that provides order and clarity, but resistance informs you of your preferences",
      "Instead of planning just for control, let your structure be flexible enough to support evolution",
      "If you feel frozen in over-planning, ask: Am I creating clarity, or am I trying to eliminate all uncertainty?",
      "Your genius plans exist to act as scaffolding for creativity, not cages that confine your possibilities"
    ]
  },
  
  // Emotional Alignment extreme profiles
  "emotionalAlignment_left": {
    name: "The Expressively Dynamic",
    description: "Your emotionally expressive approach to manifestation embraces the full spectrum of your feelings as part of the creative process. Rather than bypassing 'negative' emotions, you work with them authentically, allowing them to inform your desires and fuel your creations. This dynamic approach creates a rich emotional landscape that attracts experiences of matching depth and authenticity.",
    celebrate: [
      "Your intense emotional energy is a manifestation amplifier, when you feel something deeply, you channel that into creative power",
      "Unlike those who suppress their emotions, you allow yourself to experience them fully, which can lead to profound artistic breakthroughs and passionate action",
      "Your emotions are more than just experiences, they are creative forces that shape your reality"
    ],
    support: [
      "Because your emotions are so central to your reality creations style, the key is learning to direct them without suppressing or getting lost in them",
      "Resistance and limitation are not enemies, they inform what your preferences are",
      "Instead of fearing emotional intensity, ask: How can I use this feeling as creative fuel, how does this tell me more about what I want next?",
      "Your emotions are energy sources that can be intentionally shaped into action and alignment rather than seen as unpredictable forces that control you"
    ]
  },
  "emotionalAlignment_right": {
    name: "The Consistently Calibrated",
    description: "Your emotionally calibrated approach to manifestation creates a stable, consistent vibrational state that supports your desires. You excel at deliberately cultivating and maintaining the emotional frequencies that match your intended outcomes. This calibrated approach helps you create a reliable energetic container for your manifestations to take form.",
    celebrate: [
      "Your ability to stay emotionally steady in your manifestation process allows you to navigate reality without becoming derailed",
      "While others may get lost in emotional highs and lows, you maintain an inner equilibrium that keeps you focused and composed",
      "This stability ensures that your manifestations are grounded and sustainable rather than reactionary"
    ],
    support: [
      "Because emotional balance is your strength, your growth comes from deepening your relationship with power and control in a way that feels good to you",
      "Your personal power is unique to you and is not determined by the beliefs of others",
      "Instead of focusing only on keeping emotions in check, explore: What emotions do I want to amplify in my process?",
      "Emotional regulation is not just about maintaining neutrality, it can also be about learning how to hold and expand the emotions that magnetize what you desire"
    ]
  },
  
  // GROUP 2: Two Extreme Dimensions (9 profiles - examples)
  
  "beliefMindset_left_clarityVision_left": {
    name: "The Critical Dreamer",
    description: "You combine a questioning, evidence-based mindset with a fluid, evolving vision for what you're creating. This combination allows you to remain both grounded and adaptable, carefully analyzing possibilities while remaining open to how they might unfold. Your approach favors experimentation and iteration rather than fixed beliefs or rigid plans.",
    celebrate: [
      "You have an incredible ability to question assumptions while keeping your vision flexible, making you one of the most dynamic thinkers in reality creation",
      "You don't just accept things at face value, you refine your goals based on deep inquiry and evolving insights",
      "This means that when you do commit to a vision, it is truly aligned with who you are, not just an illusion borrowed from others"
    ],
    support: [
      "Your ability to see through illusion is a gift, but make sure your skepticism is a tool for refinement rather than a barrier to action",
      "I have found that when business owners or creatives set goals based on an illusion of external reality, they disconnect from their own creation process",
      "The key for you is releasing goals that feel hollow and replacing them with ones that feel symbolically meaningful",
      "If you find yourself questioning endlessly, ask: What would I believe if I fully trusted that I was capable of shaping my reality?",
      "Your skepticism is here to serve your creation, not stall it"
    ]
  },
  "beliefMindset_right_actionOrientation_right": {
    name: "The Conviction Activator",
    description: "You combine unwavering belief with decisive action, creating a powerful force for rapid manifestation. Your confident mindset fuels your courageous action-taking, while your consistent action reinforces your optimistic beliefs. This dynamic combination allows you to move mountains through the alignment of your thoughts and deeds.",
    celebrate: [
      "You combine unwavering belief with decisive action, creating a powerful force for rapid manifestation",
      "Your confident mindset fuels your courageous action-taking, while your consistent action reinforces your optimistic beliefs",
      "This dynamic combination allows you to move mountains through the alignment of your thoughts and deeds"
    ],
    support: [
      "Your strength is your unwavering focus, but make sure that you are allowing room for new possibilities rather than assuming you already know how things must unfold",
      "Reality is a mirror, but we don't fully understand how it reflects… trying to be transactional with it will create suffering",
      "This means you can hold your vision firmly while remaining open to unexpected paths",
      "Instead of forcing reality into a mold, allow it to reflect insights back to you that refine and expand your vision"
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
  
  // Additional Group 2 profiles (two extreme dimensions)
  "beliefMindset_right_clarityVision_right": {
    name: "The Visionary Activator",
    description: "You combine unwavering belief with crystal-clear vision, creating a powerful foundation for reality creation. Your confidence in possibilities together with precise visualization allows you to manifest with exceptional clarity and conviction.",
    celebrate: [
      "You combine unwavering belief, crystal-clear vision, and decisive action in a powerful triad for manifestation",
      "With complete confidence in possibilities, precise visualization of what you want, and consistent action toward your goals, you create a formidable force for bringing your desires into reality quickly and powerfully"
    ],
    support: [
      "Creating space for intuitive guidance within your focused framework",
      "Developing flexibility for when the universe offers even better possibilities",
      "Finding balance between your driven approach and necessary periods of rest"
    ]
  },
  
  "beliefMindset_left_actionOrientation_right": {
    name: "The Skeptical Doer",
    description: "You combine sharp critical thinking with decisive action, creating a powerful blend of analysis and momentum. Your skepticism refines your approach while your action orientation ensures continuous forward progress.",
    celebrate: [
      "Your combination of sharp critical thinking and decisive action makes you wildly discerning",
      "You don't fumble around with ideas that don't hold weight, ensuring that every move you make is backed by real substance",
      "Your skepticism doesn't slow you down, it refines your process, making your results more precise and resilient"
    ],
    support: [
      "Your challenge isn't speed; it's trusting the unfolding of what you've already set in motion",
      "A lot of people are trying to control material reality to guarantee success, but true power comes from realizing you are the creator, not the conditions",
      "While questioning is your strength, notice when you are analyzing to the point where you're unintentionally undermining your own manifestations",
      "Waiting for absolute certainty, when you know certainty is an illusion, before acting is avoidance",
      "Test, refine, and adjust as you go"
    ]
  },
  
  "beliefMindset_right_intuitionStrategy_left": {
    name: "The Affirmative Explorer",
    description: "You combine optimistic belief with intuitive guidance, creating a powerful synergy between faith and inner knowing. Your confidence in possibilities enhances your intuitive insights, while your intuition provides a natural path for your beliefs to manifest.",
    celebrate: [
      "You have a yummy mix of optimism and intuition, allowing you to move with ease and flow rather than force",
      "Your trust in the process, combined with your ability to follow spontaneous insights, creates serendipitous breakthroughs that others might miss",
      "You excel at letting reality surprise you in the best ways"
    ],
    support: [
      "Because you operate on trust, it's crucial to ensure that your faith is rooted in deep knowing rather than bypassing necessary clarity",
      "Giving reality space to show you to yourself requires openness",
      "If you ever feel uncertain, notice urges to immediately push forward or overcompensate with forced positivity",
      "Instead, pause and ask yourself what reality is reflecting back to you",
      "You're designed to be fluid, let that be your power rather than a source of avoidance"
    ]
  },
  
  "clarityVision_right_actionOrientation_right": {
    name: "The Focused Activator",
    description: "You combine crystal-clear vision with decisive action, creating a powerful momentum toward your specific goals. Your precise focus works in perfect harmony with your bias toward action, allowing you to manifest your desires with exceptional efficiency.",
    celebrate: [
      "You are an unyielding force of clarity, belief, and action, making you one of the most potent manifesters",
      "You don't hesitate, you see the vision, trust in its possibility, and move toward it without second-guessing",
      "This ability to operate with certainty and momentum creates rapid results and inspires others to believe in what's possible"
    ],
    support: [
      "Your strength is your unwavering focus, but make sure that you are allowing room for new possibilities rather than assuming you already know how things must unfold",
      "Reality is a mirror, but we don't fully understand how it reflects… trying to be transactional with it will create suffering",
      "This means you can hold your vision firmly while remaining open to unexpected paths",
      "Instead of forcing reality into a mold, allow it to reflect insights back to you that refine and expand your vision"
    ]
  },
  
  "clarityVision_right_intuitionStrategy_right": {
    name: "The Focused Planner",
    description: "You combine crystal-clear vision with methodical planning, creating a powerful approach to structured manifestation. Your precise clarity works in harmony with your strategic mind, allowing you to create detailed roadmaps to your desired outcomes.",
    celebrate: [
      "You combine sharp clarity of vision with methodical execution, making you a master at bridging big-picture thinking with structured action",
      "Your ability to define a clear goal and systematically bring it to life makes you an efficient and effective creator",
      "While others may get lost in ambiguity, you bring practical strategy to bold ideas"
    ],
    support: [
      "Your biggest asset is your ability to create frameworks for action, but it's important that your structure remains a tool, not a cage",
      "Strategy is not something to be worshiped—it's a framework that exists to serve you",
      "Notice the urge to rigidly stick to a plan at the cost of evolving insights",
      "Your success comes from striking a balance between trusting your structure and allowing for strategic pivots when reality reflects new data back to you"
    ]
  },
  
  "actionOrientation_right_emotionalAlignment_right": {
    name: "The Dynamic Calibrator",
    description: "You combine decisive action with emotional stability, creating a powerful balance between movement and calm. Your ability to take swift action while maintaining emotional equilibrium allows you to navigate reality creation with both momentum and composure.",
    celebrate: [
      "You move with power and precision while maintaining an emotionally steady internal state",
      "This unique combination ensures that your momentum is strong yet intentional, making you someone who not only acts decisively but also sustains long-term success without burnout",
      "Your ability to remain centered allows you to handle pressure with grace"
    ],
    support: [
      "Your ability to regulate your emotions is a superpower, but be mindful that stability doesn't turn into emotional dodging",
      "You have power over how things work out for you",
      "You have the ability to bend and change and shift things in a way that allows you to be even better off",
      "This means you can actively expand the emotional states that fuel your manifestations rather than just focusing on staying balanced",
      "Ask yourself: What emotions do I want to amplify in my process?"
    ]
  },
  
  "actionOrientation_left_emotionalAlignment_left": {
    name: "The Passionate Observer",
    description: "You combine contemplative observation with emotional expressiveness, creating a rich inner landscape for reality creation. Your reflective nature works in harmony with your emotional depth, allowing you to manifest from a place of authentic feeling and thoughtful consideration.",
    celebrate: [
      "Your ability to deeply reflect and feel emotions intensely gives you a rich internal world that fuels creativity",
      "While others may rush into action, you take time to process, ensuring that your choices are meaningful and deeply aligned",
      "Your emotional depth allows you to bring authenticity, texture and resonance into everything you create"
    ],
    support: [
      "Your emotions are a source of creative power, but they can also lead to being frozen in analysis",
      "Your resistance is not self-sabotage, it is an ally offering you insight",
      "Instead of seeing hesitation as a block, explore what your emotions are revealing about your needs",
      "Rather than getting stuck in endless contemplation, translate those emotions into movement, even if it's small steps toward creative expression"
    ]
  },
  
  "intuitionStrategy_right_emotionalAlignment_right": {
    name: "The Strategic Stabilizer",
    description: "You combine methodical planning with emotional stability, creating a powerful foundation for consistent manifestation. Your strategic approach works in harmony with your emotional regulation, allowing you to create reliable results without getting derailed by emotional fluctuations.",
    celebrate: [
      "You bring structure and emotional steadiness to manifestation, making you a powerful long-term builder",
      "While others may rely purely on inspiration, you ensure that there is a reliable system in place to sustain success",
      "Your ability to balance strategy with emotional stability allows you to keep moving forward, even in uncertain conditions"
    ],
    support: [
      "Because you thrive on structure, your challenge is allowing space for intuitive shifts without feeling like you're losing control",
      "Personal power is unique to you and is not determined by the beliefs of others",
      "It is determined by the combination of your beliefs and your desires",
      "Instead of seeing uncertainty as a problem, see it as an invitation to expand what stability means for you",
      "Your goal isn't to rigidly control the process, it's to build a foundation so strong and YOU you that it can hold your expansion"
    ]
  },
  
  "intuitionStrategy_left_emotionalAlignment_left": {
    name: "The Expressive Explorer",
    description: "You combine intuitive guidance with emotional expressiveness, creating a powerfully authentic approach to manifestation. Your intuitive nature works in harmony with your emotional depth, allowing you to create from a place of raw authenticity and spontaneous inspiration.",
    celebrate: [
      "Your ability to follow intuition while fully embracing your emotions makes you a force of raw, creative energy",
      "You don't just manifest with logic, you manifest through feeling, intuition, and spontaneous expression",
      "This means that when you align with something deeply, your ability to call it into reality is extremely potent"
    ],
    support: [
      "Because your emotions and instincts are so strong, your work is about ensuring that you are not avoiding stability out of fear that it will stifle your creative flow",
      "I am not saying you even necessarily need stability",
      "But be sure to shift movements made from escapism into movements driven by your passion for life",
      "Your intuition and emotions are meant to be expressed, just notice your motivations and what you direction you are being called to"
    ]
  },
  
  // GROUP 3: Three Extreme Dimensions (10 profiles - examples)
  
  "beliefMindset_right_clarityVision_right_actionOrientation_right": {
    name: "The Trailblazing Visionary",
    description: "You combine unwavering belief, crystal-clear vision, and decisive action in a powerful triad for manifestation. With complete confidence in possibilities, precise visualization of what you want, and consistent action toward your goals, you create a formidable force for bringing your desires into reality quickly and powerfully.",
    celebrate: [
      "You are an unyielding force of clarity, belief, and action, making you one of the most potent manifesters",
      "You don't hesitate, you see the vision, trust in its possibility, and move toward it without second-guessing",
      "This ability to operate with certainty and momentum creates rapid results and inspires others to believe in what's possible"
    ],
    support: [
      "Your strength is your unwavering focus, but make sure that you are allowing room for new possibilities rather than assuming you already know how things must unfold",
      "Reality is a mirror, but we don't fully understand how it reflects… trying to be transactional with it will create suffering",
      "This means you can hold your vision firmly while remaining open to unexpected paths",
      "Instead of forcing reality into a mold, allow it to reflect insights back to you that refine and expand your vision"
    ]
  },
  
  "beliefMindset_left_clarityVision_left_actionOrientation_left": {
    name: "The Reflective Innovator",
    description: "You combine a questioning mindset, fluid vision, and contemplative approach to action, creating a deeply thoughtful and flexible approach to manifestation. Your skepticism refines your understanding, your fluid vision allows for continuous evolution, and your contemplative nature ensures that your actions are well-considered.",
    celebrate: [
      "You bring a rare combination of skepticism, fluid vision, and deep contemplation to manifestation",
      "Unlike those who move impulsively, you take your time, analyze deeply, and allow ideas to evolve before committing",
      "This means that when you do take action, it is profoundly aligned and innovative"
    ],
    support: [
      "Your greatest gift is your ability to question everything, but be mindful that you're not using doubt to delay movement",
      "The beauty of doubt is that it creates space from meaning, but that space is not meant to keep you stuck",
      "Doubt is a tool for refinement, not an excuse for paralysis",
      "If you find yourself hesitating too long, ask: What information do I need to feel comfortable taking the next step?",
      "You don't have to be 100% certain, you only need enough certainty to move forward"
    ]
  },
  
  "beliefMindset_right_actionOrientation_right_intuitionStrategy_left": {
    name: "The Intuitive Doer",
    description: "You combine unwavering belief, decisive action, and intuitive guidance, creating a powerful approach to inspired manifestation. Your confidence in possibilities fuels your action-taking, while your intuition ensures that your actions are aligned with your deeper knowing.",
    celebrate: [
      "You move with a mix of trust, speed, and gut instinct, allowing for rapid manifestations that feel almost effortless",
      "Your ability to act quickly while staying attuned to your inner knowing means that you are often ahead of the curve, spotting opportunities before others see them"
    ],
    support: [
      "Your challenge isn't action, it's making sure your action is guided by your deepest intuition, not just momentum",
      "Your spirit is the lead here yes, and you are the one supplying the energy and the overall vision",
      "Instead of acting just to stay in motion, ask yourself: Am I moving because it feels right, or because I feel like I should be doing something?",
      "Let your actions be fueled by intuitive knowing rather than external pressure"
    ]
  },
  
  "beliefMindset_left_intuitionStrategy_right_emotionalAlignment_right": {
    name: "The Analytical Manifestor",
    description: "You combine a questioning mindset, methodical planning, and emotional stability, creating a grounded and systematic approach to reality creation. Your skepticism ensures thorough analysis, your strategic nature provides clear structure, and your emotional regulation maintains steady progress despite challenges.",
    celebrate: [
      "You blend critical thinking with structured execution, making sure that your manifestations are backed by deep analysis and thoughtful strategy",
      "Different than those who may act on blind faith, you make decisions based on measured, well-reasoned steps, which creates results that are sustainable and deeply in internal agreement"
    ],
    support: [
      "Your strength is your ability to analyze deeply, but make sure you are using analysis as a tool for clarity, not as a way to delay trust",
      "Trust is not something you have to prove first, it is something you decide to build through action",
      "Instead of looping in analysis to determine whether you have enough information, experiment with small, controlled steps forward",
      "You don't need absolute certainty, just enough data to move",
      "Trust isn't about blind leaps; it's about allowing your methodical nature to build evidence for itself over time"
    ]
  },
  
  "clarityVision_right_actionOrientation_right_intuitionStrategy_right": {
    name: "The Dynamic Strategist",
    description: "You combine crystal-clear vision, decisive action, and methodical planning, creating a powerfully effective approach to manifestation. Your precise clarity defines your goals, your action orientation creates momentum, and your strategic mind ensures optimal execution.",
    celebrate: [
      "You have the rare ability to combine sharp vision, bold action, and structured planning, making you an incredibly efficient and effective manifester",
      "You transcend just setting goals, you chart a clear path and move quickly to bring them into reality",
      "Your ability to balance structured execution with rapid decision-making makes you a natural leader in creative and business spaces"
    ],
    support: [
      "Because you are naturally fast-moving and structured, the key is ensuring that your planning does not become rigid, and your speed does not become reactive",
      "The best strategies are the ones that adapt to new insights, not the ones that try to predict every outcome",
      "Allow yourself moments of reflection amid action, making space for course correction and intuitive pivots",
      "Instead of seeing structure as something fixed, view it as a living system that evolves with you"
    ]
  },
  
  "beliefMindset_right_clarityVision_right_emotionalAlignment_right": {
    name: "The Harmonious Visionary",
    description: "You combine unwavering belief, crystal-clear vision, and emotional stability, creating a powerfully aligned approach to manifestation. Your confidence in possibilities bolsters your clear goals, while your emotional stability ensures consistent progress despite challenges.",
    celebrate: [
      "You have an extraordinary ability to hold a clear vision while maintaining deep emotional alignment and trust",
      "Your grounded belief in your manifestations keeps you centered, allowing you to stay connected to your desires without slipping into doubt or fear",
      "This inner harmony creates a smooth and natural manifestation process"
    ],
    support: [
      "Your ability to trust your reality is powerful, but make sure you are not using emotional stability as a way to avoid discomfort",
      "Uncertainty is not an enemy, it is simply part of the experience",
      "If you ever feel resistance, rather than suppressing it, allow it to inform you",
      "Ask yourself: What is this discomfort pointing me toward?",
      "Emotional stability should support your manifestations, not silence necessary adjustments",
      "Your growth will come from allowing change while maintaining trust in yourself"
    ]
  },
  
  "actionOrientation_right_intuitionStrategy_left_emotionalAlignment_left": {
    name: "The Integrated Creator",
    description: "You combine decisive action, intuitive guidance, and emotional expressiveness, creating a dynamic and authentic approach to manifestation. Your action orientation creates momentum, your intuition ensures alignment with your deeper knowing, and your emotional depth infuses your creations with passion and authenticity.",
    celebrate: [
      "You blend fast, decisive action with intuitive flow and raw emotional energy, making you a force of spontaneous manifestation",
      "Your ability to trust your instincts while allowing your emotions to fuel your creations leads to high-impact breakthroughs that feel almost effortless"
    ],
    support: [
      "Because you rely on deep emotion and instinct, your challenge is ensuring that your energy remains sustainable rather than burning out in bursts",
      "Your emotions are creative forces—let them shape your reality without letting them dictate your entire direction",
      "Ask yourself: Am I using my emotions to propel me forward, or am I being carried away by them?",
      "Your power is in directing, not just riding the waves"
    ]
  },
  
  "clarityVision_left_intuitionStrategy_left_emotionalAlignment_right": {
    name: "The Calibrated Explorer",
    description: "You combine fluid vision, intuitive guidance, and emotional stability, creating a flexible yet grounded approach to manifestation. Your openness to evolving visions allows for continuous refinement, your intuition ensures alignment with your deeper knowing, and your emotional regulation maintains steady progress despite uncertainty.",
    celebrate: [
      "You move through life with a rare mix of fluid vision, deep intuition, and emotional stability",
      "Your ability to trust the unknown while remaining grounded makes you incredibly adaptable to changes in reality",
      "This balance ensures that you manifest in a way that feels natural and unforced"
    ],
    support: [
      "Your biggest strength is allowing things to unfold, but be mindful that you are not mistaking passivity for trust",
      "There is no conflict between surrender and creation, you can accept what is while still directing what will be",
      "If you ever feel stuck, ask: What small, aligned action would deepen my trust in my path?",
      "You don't need to force movement, but you do need to step into co-creation with reality"
    ]
  },
  
  "beliefMindset_left_actionOrientation_right_emotionalAlignment_right": {
    name: "The Reflective Doer",
    description: "You combine a questioning mindset, decisive action, and emotional stability, creating a thoughtful yet effective approach to manifestation. Your skepticism ensures thorough analysis, your action orientation creates momentum, and your emotional regulation maintains steady progress despite challenges.",
    celebrate: [
      "You have a sharp mind that questions everything, yet you are still willing to move forward decisively when the time is right",
      "Your ability to manage emotions while staying grounded in logic ensures that you make thoughtful, well-executed decisions that lead to lasting success"
    ],
    support: [
      "Your challenge is making sure that you don't get caught in the tension between overanalyzing and needing certainty before moving",
      "Uncertainty is not an enemy, it's the natural state of creation",
      "Instead of waiting until you have complete clarity, let action be part of your learning process",
      "Move forward with the understanding that you will refine and adjust as you go"
    ]
  },
  
  "beliefMindset_right_clarityVision_right_emotionalAlignment_left": {
    name: "The Passionate Visionary",
    description: "You combine unwavering belief, crystal-clear vision, and emotional expressiveness, creating a powerfully passionate approach to manifestation. Your confidence in possibilities strengthens your clear goals, while your emotional depth infuses your creations with authentic passion.",
    celebrate: [
      "You combine a strong, unwavering belief in your vision with raw, emotional intensity, making you a magnetic force for your desires",
      "Your ability to channel deep emotions into focused manifestations makes you one of the most powerful energy amplifiers in reality creation"
    ],
    support: [
      "Your emotions are your superpower, but make sure you establish your relationship with them",
      "Harness your intensity, passion is fuel when it is focused, but wildfire when left unchecked",
      "If you feel overwhelmed, ask: Am I letting my emotions run my show, or do I need to remember I am the authority?",
      "Of course you don't need to feel perfectly balanced to move forward, but know who is leading the ship because that will tell you where it's going"
    ]
  },
  
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
// Updated determineProfileId function for data/profiles.js

// This version requires modifying the calculateResults function in lib/scoring.js
// to pass dimensionScores along with dimensionStates to this function

// Updated determineProfileId function for data/profiles.js

/**
 * Determines which profile a user should get based on their dimension states and scores
 * Uses a nearest-neighbor approach to match to one of the 30 defined profiles
 * 
 * @param {Object} dimensionStates - Object mapping dimensions to states (left, balanced, right)
 * @param {Object} dimensionScores - Object mapping dimensions to scores (1-5)
 * @returns {string} - Profile ID of the best matching profile
 */
export const determineProfileId = (dimensionStates, dimensionScores) => {
  // First try exact matching based on number of extreme dimensions
  const exactMatchId = getExactProfileMatch(dimensionStates);
  
  // If we found an exact match that exists in our profiles, return it
  if (exactMatchId && profiles[exactMatchId]) {
    return exactMatchId;
  }
  
  // If no exact match or it doesn't exist in our profiles, find the nearest match
  return findNearestProfile(dimensionStates, dimensionScores);
};

/**
 * Attempts to create an exact profile match ID based on extreme dimensions
 * 
 * @param {Object} dimensionStates - Object mapping dimensions to states
 * @returns {string|null} - Exact profile ID if found, null otherwise
 */
function getExactProfileMatch(dimensionStates) {
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
  }
  
  return null; // No exact match found
}

/**
 * Finds the nearest profile match based on similarity to defined profiles
 * 
 * @param {Object} dimensionStates - User's dimension states
 * @param {Object} dimensionScores - User's dimension scores
 * @returns {string} - ID of the most similar profile
 */
function findNearestProfile(dimensionStates, dimensionScores) {
  // Get all defined profile IDs (excluding 'default')
  const definedProfileIds = Object.keys(profiles).filter(id => id !== 'default');
  
  // Parse each profile ID to determine its dimension states
  const profilePatterns = definedProfileIds.map(id => {
    return {
      id,
      pattern: parseProfileId(id)
    };
  });

  // Create the user's pattern for comparison
  const userPattern = {
    beliefMindset: dimensionStates.beliefMindset,
    clarityVision: dimensionStates.clarityVision,
    actionOrientation: dimensionStates.actionOrientation,
    intuitionStrategy: dimensionStates.intuitionStrategy,
    emotionalAlignment: dimensionStates.emotionalAlignment
  };
  
  // Calculate similarity scores for each profile
  const scoredProfiles = profilePatterns.map(profile => {
    const similarityScore = calculateSimilarity(userPattern, profile.pattern, dimensionScores);
    return {
      id: profile.id,
      score: similarityScore
    };
  });
  
  // Sort by similarity score (highest first)
  scoredProfiles.sort((a, b) => b.score - a.score);
  
  // Return the ID of the most similar profile
  return scoredProfiles[0].id;
}

/**
 * Parses a profile ID to extract its dimension states
 * 
 * @param {string} profileId - Profile ID string
 * @returns {Object} - Object mapping dimensions to states
 */
function parseProfileId(profileId) {
  // Start with all dimensions as 'balanced'
  const pattern = {
    beliefMindset: 'balanced',
    clarityVision: 'balanced',
    actionOrientation: 'balanced',
    intuitionStrategy: 'balanced',
    emotionalAlignment: 'balanced'
  };
  
  // Special case for fully balanced profile
  if (profileId === 'balanced_all') {
    return pattern;
  }
  
  // Parse the profile ID (format: dim1_state1_dim2_state2...)
  const parts = profileId.split('_');
  
  // Process parts in pairs (dimension, state)
  for (let i = 0; i < parts.length; i += 2) {
    const dimension = parts[i];
    const state = parts[i + 1];
    
    // Only update if this is a valid dimension
    if (pattern.hasOwnProperty(dimension)) {
      pattern[dimension] = state;
    }
  }
  
  return pattern;
}

/**
 * Calculates similarity between user pattern and a profile pattern
 * 
 * @param {Object} userPattern - User's dimension states
 * @param {Object} profilePattern - Profile's dimension states
 * @param {Object} dimensionScores - User's dimension scores
 * @returns {number} - Similarity score (higher is more similar)
 */
function calculateSimilarity(userPattern, profilePattern, dimensionScores) {
  let score = 0;
  const dimensions = Object.keys(userPattern);
  
  // Define weights for different aspects of similarity
  const EXACT_MATCH_WEIGHT = 10;       // Weight for exact state match
  const SIMILAR_DIRECTION_WEIGHT = 5;  // Weight for similar direction (both left/right but different magnitude)
  const OPPOSITE_PENALTY = -5;         // Penalty for opposite states (left vs right)
  
  // Give points for each dimension based on matching states
  for (const dimension of dimensions) {
    const userState = userPattern[dimension];
    const profileState = profilePattern[dimension];
    
    // Exact state match
    if (userState === profileState) {
      score += EXACT_MATCH_WEIGHT;
    }
    // Both are extreme but in opposite directions
    else if ((userState === 'left' && profileState === 'right') || 
             (userState === 'right' && profileState === 'left')) {
      score += OPPOSITE_PENALTY;
    }
    // One is balanced, one is extreme
    else {
      // Get the numeric score to see how close to balanced it is
      const numericScore = dimensionScores[dimension];
      
      // If user is balanced but profile is extreme
      if (userState === 'balanced') {
        // Check how close to that extreme the user actually is
        const distanceFromMiddle = Math.abs(numericScore - 3);
        
        // If profile is 'left' and user leans left, or profile is 'right' and user leans right
        const leaningTowardsProfile = 
          (profileState === 'left' && numericScore < 3) || 
          (profileState === 'right' && numericScore > 3);
        
        if (leaningTowardsProfile) {
          // Award partial points based on how close to the extreme they are
          score += SIMILAR_DIRECTION_WEIGHT * (distanceFromMiddle / 2);
        }
      }
      // If user is extreme but profile is balanced 
      else {
        // Less similarity but still give some points for being closer to that balance point
        const extremity = userState === 'left' ? Math.abs(dimensionScores[dimension] - 1) 
                                               : Math.abs(5 - dimensionScores[dimension]);
        
        // The less extreme, the higher the score
        score += SIMILAR_DIRECTION_WEIGHT * (extremity / 4);
      }
    }
  }
  
  // Weight by number of extreme dimensions
  const userExtremeCount = countExtremes(userPattern);
  const profileExtremeCount = countExtremes(profilePattern);
  
  // Add bonus for having the same number of extreme dimensions
  const EXTREME_COUNT_MATCH_BONUS = 8;
  if (userExtremeCount === profileExtremeCount) {
    score += EXTREME_COUNT_MATCH_BONUS;
  } else {
    // Penalize based on difference in extreme dimension count
    score -= Math.abs(userExtremeCount - profileExtremeCount) * 2;
  }
  
  return score;
}

/**
 * Counts extreme dimensions in a pattern
 * 
 * @param {Object} pattern - Dimension states pattern
 * @returns {number} - Count of extreme dimensions
 */
function countExtremes(pattern) {
  return Object.values(pattern).filter(state => state === 'left' || state === 'right').length;
}
