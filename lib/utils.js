// lib/utils.js

/**
 * Generates a unique ID for tracking quiz sessions
 * 
 * @returns {string} - A unique session ID
 */
export const generateSessionId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

/**
 * Creates a shareable URL for quiz results
 * 
 * @param {Object} dimensionScores - The user's dimension scores
 * @param {string} profileId - The user's profile ID
 * @returns {string} - A shareable URL
 */
export const createShareableUrl = (dimensionScores, profileId) => {
  // Create URL-safe parameters
  const params = new URLSearchParams();
  
  // Add dimension scores
  Object.entries(dimensionScores).forEach(([dimension, score]) => {
    params.append(`dim_${dimension}`, score.toString());
  });
  
  // Add profile ID
  params.append('profile', profileId);
  
  // Get the base URL (adjust as needed for production)
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}/results`
    : 'https://www.peathefeary.com/realitycreationstyle';
  
  return `${baseUrl}?${params.toString()}`;
};

/**
 * Parses result parameters from URL
 * 
 * @param {URLSearchParams} searchParams - The URL search parameters
 * @returns {Object|null} - Parsed result data or null if invalid
 */
export const parseResultsFromUrl = (searchParams) => {
  try {
    const dimensionScores = {};
    const profileId = searchParams.get('profile');
    
    // Extract dimension scores
    for (const [key, value] of searchParams.entries()) {
      if (key.startsWith('dim_')) {
        const dimension = key.replace('dim_', '');
        dimensionScores[dimension] = parseFloat(value);
      }
    }
    
    // Validate the data
    const requiredDimensions = [
      'beliefMindset',
      'clarityVision',
      'actionOrientation',
      'intuitionStrategy',
      'emotionalAlignment'
    ];
    
    const hasAllDimensions = requiredDimensions.every(dim => 
      dimensionScores[dim] !== undefined && !isNaN(dimensionScores[dim])
    );
    
    if (!hasAllDimensions || !profileId) {
      return null;
    }
    
    return {
      dimensionScores,
      profileId
    };
  } catch (error) {
    console.error('Error parsing results from URL:', error);
    return null;
  }
};

/**
 * Generates text for social media sharing
 * 
 * @param {string} profileName - The name of the user's profile
 * @returns {string} - Social media share text
 */

export const generateShareText = (profileName) => {
  return `I took the Reality Creation Style Assessment and discovered I'm "${profileName}". Take the assessment to reveal your unique manifestation approach:`;
};


/**
 * Sanitizes user input to prevent XSS attacks
 * 
 * @param {string} input - The input string to sanitize
 * @returns {string} - The sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Checks if the app is running in an iframe
 * 
 * @returns {boolean} - True if in iframe, false otherwise
 */
export const isInIframe = () => {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

/**
 * Creates a cookie with the given name, value and expiration days
 * 
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} days - Days until expiration
 */
export const setCookie = (name, value, days) => {
  if (typeof window === 'undefined') return;
  
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Strict`;
};

/**
 * Gets a cookie by name
 * 
 * @param {string} name - Cookie name
 * @returns {string|null} - Cookie value or null if not found
 */
export const getCookie = (name) => {
  if (typeof window === 'undefined') return null;
  
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  
  return null;
};
