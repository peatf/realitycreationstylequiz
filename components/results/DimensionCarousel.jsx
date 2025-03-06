// components/results/DimensionCarousel.jsx
'use client';

import React, { useState, useEffect } from 'react';

const DimensionCarousel = ({ dimensions, dimensionStates, dimensionPercentages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // For handling arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        navigate('prev');
      } else if (e.key === 'ArrowRight') {
        navigate('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, dimensions.length]);
  
  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 70) {
      // Swipe left (next)
      navigate('next');
    } else if (touchStart - touchEnd < -70) {
      // Swipe right (prev)
      navigate('prev');
    }
  };
  
  const navigate = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (direction === 'prev') {
      setActiveIndex((prev) => (prev === 0 ? dimensions.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === dimensions.length - 1 ? 0 : prev + 1));
    }
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };
  
  if (dimensions.length === 0) return null;
  
  const currentDimension = dimensions[activeIndex];
  const currentState = dimensionStates[currentDimension.id];
  const currentStateData = currentDimension.states[currentState];
  const currentPercentage = dimensionPercentages[currentDimension.id] || 50;
  
  // Get previous and next indices for preview
  const prevIndex = activeIndex === 0 ? dimensions.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === dimensions.length - 1 ? 0 : activeIndex + 1;
  
  return (
    <div className="relative pb-8">
      {/* Dimension Name and Progress Indicators */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-[#2359FF] mb-1">
          {currentDimension.title}
        </h3>
        <p className="text-sm text-[#2359FF] mb-3">
          <span className="font-medium">{currentStateData?.name || 'Balanced'}</span>
        </p>
        
        {/* Page indicators */}
        <div className="flex justify-center items-center gap-1 my-3">
          {dimensions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'w-4 bg-[#2359FF]' 
                  : 'bg-[rgba(35,89,255,0.3)]'
              }`}
              aria-label={`Go to dimension ${idx + 1}: ${dimensions[idx].title}`}
            />
          ))}
        </div>
      </div>
      
      {/* Dimension Slider */}
      <div className="mb-6">
        {/* Labels */}
        <div className="flex justify-between mb-2 px-2">
          <span className="text-sm text-[#2359FF]">{currentDimension.leftLabel}</span>
          <span className="text-sm text-[#2359FF]">{currentDimension.rightLabel}</span>
        </div>
        
        {/* Slider track */}
        <div className="relative h-5 w-full mb-4">
          <div
            style={{
              height: '20px',
              borderRadius: '9999px',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              background: "linear-gradient(to right, rgba(193,191,132,0.3), rgba(150,159,30,0.3))",
              boxShadow: "inset 2px 2px 3px rgba(166,167,161,0.3), inset -2px -2px 3px rgba(255,255,250,0.3)"
            }}
          >
            {/* Filled portion */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                borderRadius: '9999px',
                width: `${currentPercentage}%`,
                background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))",
                transition: 'width 0.4s ease-out'
              }}
            ></div>
            
            {/* Slider thumb */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${currentPercentage}%`,
                width: '18px',
                height: '18px',
                borderRadius: '9999px',
                transform: "translate(-50%, -50%)",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.2)",
                zIndex: 20,
                transition: 'left 0.4s ease-out'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '4px',
                  height: '4px',
                  borderRadius: '9999px',
                  background: 'white',
                  opacity: 0.6,
                  transform: "translate(-50%, -50%)"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Container with Preview */}
      <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        {/* Navigation buttons */}
        <button 
          onClick={() => navigate('prev')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          style={{
            background: "rgba(235,240,180,0.8)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(220,255,200,0.8)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15), 0 0 5px rgba(193,191,132,0.5)",
            color: "#2359FF",
            transform: "translateX(-5px) translateY(-50%)",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateX(-2px) translateY(-50%) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2), 0 0 8px rgba(193,191,132,0.6)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateX(-5px) translateY(-50%)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15), 0 0 5px rgba(193,191,132,0.5)";
          }}
          aria-label="Previous dimension"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <button 
          onClick={() => navigate('next')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          style={{
            background: "rgba(235,240,180,0.8)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(220,255,200,0.8)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15), 0 0 5px rgba(193,191,132,0.5)",
            color: "#2359FF",
            transform: "translateX(5px) translateY(-50%)",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateX(2px) translateY(-50%) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2), 0 0 8px rgba(193,191,132,0.6)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateX(5px) translateY(-50%)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15), 0 0 5px rgba(193,191,132,0.5)";
          }}
          aria-label="Next dimension"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        
        {/* Previous Item Preview (smaller and dimmed) */}
        <div
          className="hidden md:block absolute top-0 left-0 w-1/5 opacity-30"
          style={{
            transform: "translateX(-75%) scale(0.85)",
            pointerEvents: "none",
            transition: "opacity 0.3s",
            height: "100%",
            zIndex: 1
          }}
        >
          <div 
            className="h-full w-full flex items-center"
            style={{
              padding: '0.5rem',
              opacity: 0.7
            }}
          >
            <div 
              className="h-full w-full rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(235,240,180,0.3)",
                backdropFilter: "blur(2px)",
                border: "1px solid rgba(220,255,200,0.3)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(193,191,132,0.2)"
              }}
            >
              <p className="text-center text-sm text-[#2359FF]">
                {dimensions[prevIndex].title}
              </p>
            </div>
          </div>
        </div>
        
        {/* Current Item */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="carousel-slide mx-auto"
          style={{
            padding: '1.5rem',
            borderRadius: '28px',
            background: "rgba(235,240,180,0.65)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(220,255,200,0.6)",
            boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)",
            transition: 'opacity 0.4s, transform 0.4s',
            maxWidth: "90%",
            width: "100%",
            margin: "0 auto",
            opacity: isTransitioning ? 0.7 : 1,
            transform: isTransitioning ? 'scale(0.98)' : 'scale(1)'
          }}
        >
          <div className="mb-4">
            <p className="text-base text-[#2359FF] mb-4">
              {currentStateData?.description || 'Your approach is balanced in this dimension.'}
            </p>
          </div>
          
          <div className="space-y-4">
            {/* Show frameworks, practices, and tools if they exist */}
            {currentStateData?.frameworks && (
              <div className="bg-white/20 p-3 rounded-xl">
                <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Frameworks you may be interested in:</h4>
                <p className="text-xs text-[#2359FF]">
                  {currentStateData.frameworks}
                </p>
              </div>
            )}
            
            {currentStateData?.practices && (
              <div className="bg-white/20 p-3 rounded-xl">
                <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Practices you may be interested in:</h4>
                <p className="text-xs text-[#2359FF]">
                  {currentStateData.practices}
                </p>
              </div>
            )}
            
            {currentStateData?.tools && (
              <div className="bg-white/20 p-3 rounded-xl">
                <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Tools you may be interested in:</h4>
                <p className="text-xs text-[#2359FF]">
                  {currentStateData.tools}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Next Item Preview (smaller and dimmed) */}
        <div
          className="hidden md:block absolute top-0 right-0 w-1/5 opacity-30"
          style={{
            transform: "translateX(75%) scale(0.85)",
            pointerEvents: "none",
            transition: "opacity 0.3s",
            height: "100%",
            zIndex: 1
          }}
        >
          <div 
            className="h-full w-full flex items-center"
            style={{
              padding: '0.5rem',
              opacity: 0.7
            }}
          >
            <div 
              className="h-full w-full rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(235,240,180,0.3)",
                backdropFilter: "blur(2px)",
                border: "1px solid rgba(220,255,200,0.3)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(193,191,132,0.2)"
              }}
            >
              <p className="text-center text-sm text-[#2359FF]">
                {dimensions[nextIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dimension counter & swipe hint */}
      <div className="text-center mt-6">
        <p className="text-sm text-[#2359FF] font-light">
          Dimension {activeIndex + 1} of {dimensions.length}
        </p>
        <p className="text-xs text-[#2359FF] mt-1 opacity-70">
          Swipe or use arrows to navigate
        </p>
      </div>
    </div>
  );
};

export default DimensionCarousel;
