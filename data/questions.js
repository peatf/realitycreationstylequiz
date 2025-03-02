// data/questions.js

// This file contains all the questions for the reality creation style quiz

// Array of questions with their properties
const questions = [
  // BELIEF & MINDSET DIMENSION
  {
    id: 'bm1',
    dimension: 'beliefMindset',
    text: 'When it comes to reality creation, what feels more natural to you?',
    leftLabel: 'I need to see or experience something before I fully believe it',
    rightLabel: 'I can believe in possibilities without needing proof first'
  },
  {
    id: 'bm2',
    dimension: 'beliefMindset',
    text: 'When someone shares a manifestation technique that worked for them:',
    leftLabel: 'I analyze why it worked and want to understand the mechanics',
    rightLabel: 'I embrace it with excitement and trust that it can work for me too'
  },
  {
    id: 'bm3',
    dimension: 'beliefMindset',
    text: 'Which approach do you naturally gravitate toward?',
    leftLabel: 'Testing ideas through a questioning, evidence-based approach',
    rightLabel: 'Embracing ideas through a trusting, possibilities-based approach'
  },
  {
    id: 'bm4',
    dimension: 'beliefMindset',
    text: 'When you encounter a new concept about reality creation:',
    leftLabel: 'I carefully examine it against my experience and logic',
    rightLabel: 'I open myself to it and see how it resonates with me'
  },
  {
    id: 'bm5',
    dimension: 'beliefMindset',
    text: 'Which statement feels more like you?',
    leftLabel: 'I build belief through personal verification and understanding',
    rightLabel: 'I believe first, which then creates my experience and understanding'
  },
  {
    id: 'bm6',
    dimension: 'beliefMindset',
    text: 'When faced with statements about how reality works:',
    leftLabel: 'I naturally question and need to test them for myself',
    rightLabel: 'I naturally trust and see how they can work for me'
  },
  
  // CLARITY OF VISION DIMENSION
  {
    id: 'cv1',
    dimension: 'clarityVision',
    text: 'When setting intentions, what feels more natural to you?',
    leftLabel: 'Keeping my desires open-ended and adaptable',
    rightLabel: 'Creating specific, detailed outcomes I want to achieve'
  },
  {
    id: 'cv2',
    dimension: 'clarityVision',
    text: 'Which approach do you prefer when working toward a goal?',
    leftLabel: 'Allowing my vision to evolve as I move forward',
    rightLabel: 'Maintaining a clear, precise vision of my desired outcome'
  },
  {
    id: 'cv3',
    dimension: 'clarityVision',
    text: 'When visualizing your desires:',
    leftLabel: 'I focus on the feeling and leave details open to possibility',
    rightLabel: 'I create specific, vivid images of exactly what I want'
  },
  {
    id: 'cv4',
    dimension: 'clarityVision',
    text: 'Which statement feels more true to you?',
    leftLabel: 'The universe sometimes delivers better options than I could imagine',
    rightLabel: 'The universe delivers exactly what I focus on and visualize'
  },
  {
    id: 'cv5',
    dimension: 'clarityVision',
    text: 'When manifesting something important:',
    leftLabel: 'I prefer to stay flexible about how it might look',
    rightLabel: 'I prefer to be crystal clear about exactly what I want'
  },
  {
    id: 'cv6',
    dimension: 'clarityVision',
    text: 'Which feels more comfortable to you?',
    leftLabel: 'Holding space for my desires to take shape organically',
    rightLabel: 'Defining precisely what I want down to the details'
  },
  
  // ACTION ORIENTATION DIMENSION
  {
    id: 'ao1',
    dimension: 'actionOrientation',
    text: 'After setting an intention, what feels more natural?',
    leftLabel: 'Focusing on inner alignment before taking physical action',
    rightLabel: 'Taking immediate, consistent action toward my goal'
  },
  {
    id: 'ao2',
    dimension: 'actionOrientation',
    text: 'Which approach do you favor in your manifestation process?',
    leftLabel: 'Being in the right state matters more than constant action',
    rightLabel: 'Consistent action matters more than waiting for the perfect state'
  },
  {
    id: 'ao3',
    dimension: 'actionOrientation',
    text: 'Which statement feels more true for you?',
    leftLabel: 'My state of being is what primarily manifests my reality',
    rightLabel: 'My actions are what primarily manifest my reality'
  },
  {
    id: 'ao4',
    dimension: 'actionOrientation',
    text: 'When working to create change in your life:',
    leftLabel: 'I prioritize inner work, trusting outer changes will follow',
    rightLabel: 'I prioritize tangible steps, trusting inner shifts will follow'
  },
  {
    id: 'ao5',
    dimension: 'actionOrientation',
    text: 'Which feels more effective to you?',
    leftLabel: 'Allowing inspiration to arise before taking action',
    rightLabel: 'Taking action to generate momentum and inspiration'
  },
  {
    id: 'ao6',
    dimension: 'actionOrientation',
    text: 'When manifesting something important:',
    leftLabel: 'I focus more on contemplation and alignment',
    rightLabel: 'I focus more on consistent action and momentum'
  },
  
  // INTUITION VS STRATEGY DIMENSION
  {
    id: 'is1',
    dimension: 'intuitionStrategy',
    text: 'Which approach do you naturally favor?',
    leftLabel: 'Following intuitive nudges and spontaneous guidance',
    rightLabel: 'Creating structured plans and systematic approaches'
  },
  {
    id: 'is2',
    dimension: 'intuitionStrategy',
    text: 'When manifesting something important:',
    leftLabel: 'I rely on gut feelings and intuitive knowing',
    rightLabel: 'I rely on careful planning and methodical execution'
  },
  {
    id: 'is3',
    dimension: 'intuitionStrategy',
    text: 'Which feels more natural to your process?',
    leftLabel: 'Flowing with intuitive guidance as it arises',
    rightLabel: 'Following a clear, organized strategy'
  },
  {
    id: 'is4',
    dimension: 'intuitionStrategy',
    text: 'Which statement feels more true for you?',
    leftLabel: 'My best manifestations happen when I follow unexpected inspiration',
    rightLabel: 'My best manifestations happen when I follow well-crafted plans'
  },
  {
    id: 'is5',
    dimension: 'intuitionStrategy',
    text: 'When faced with a manifestation challenge:',
    leftLabel: 'I look for intuitive solutions that feel right',
    rightLabel: 'I develop strategic approaches to overcome the obstacle'
  },
  {
    id: 'is6',
    dimension: 'intuitionStrategy',
    text: 'Which do you trust more in your manifestation process?',
    leftLabel: 'My intuitive senses and instinctual guidance',
    rightLabel: 'My ability to create effective, logical frameworks'
  },
  
  // EMOTIONAL ALIGNMENT DIMENSION
  {
    id: 'ea1',
    dimension: 'emotionalAlignment',
    text: 'What feels more natural to you in your manifestation process?',
    leftLabel: 'Working with all emotions as they arise, seeing them as part of the process',
    rightLabel: 'Deliberately cultivating and maintaining positive emotional states'
  },
  {
    id: 'ea2',
    dimension: 'emotionalAlignment',
    text: 'When it comes to emotions and manifestation:',
    leftLabel: 'I embrace my full emotional spectrum as creative energy',
    rightLabel: 'I focus on maintaining consistent positive emotional states'
  },
  {
    id: 'ea3',
    dimension: 'emotionalAlignment',
    text: 'Which statement feels more true for you?',
    leftLabel: 'Authentically experiencing all emotions is key to my manifestation process',
    rightLabel: 'Deliberately calibrating my emotions is key to my manifestation process'
  },
  {
    id: 'ea4',
    dimension: 'emotionalAlignment',
    text: 'When you encounter challenging emotions:',
    leftLabel: 'I see them as important messengers and work with their energy',
    rightLabel: 'I acknowledge them but shift focus to more supportive states'
  },
  {
    id: 'ea5',
    dimension: 'emotionalAlignment',
    text: 'Which approach resonates more with you?',
    leftLabel: 'Emotional depth and dynamic expression in my manifestation process',
    rightLabel: 'Emotional stability and consistent calibration in my manifestation process'
  },
  {
    id: 'ea6',
    dimension: 'emotionalAlignment',
    text: 'What feels most effective in your experience?',
    leftLabel: 'Working with emotions authentically as they arise',
    rightLabel: 'Deliberately cultivating specific emotional frequencies'
  }
];

// Get all questions
export const getAllQuestions = () => questions;

// Get questions by dimension
export const getQuestionsByDimension = () => {
  return questions.reduce((acc, question) => {
    if (!acc[question.dimension]) {
      acc[question.dimension] = [];
    }
    acc[question.dimension].push(question.id);
    return acc;
  }, {});
};

// Get question by ID
export const getQuestionById = (id) => {
  return questions.find(question => question.id === id);
};
