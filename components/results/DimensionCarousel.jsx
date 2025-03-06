// components/results/DimensionCarousel.jsx
'use client';

import React, { useState, useEffect } from 'react';

const DimensionCarousel = ({ dimensions, dimensionStates, dimensionPercentages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
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
    if (direction === 'prev') {
      setActiveIndex((prev) => (prev === 0 ? dimensions.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === dimensions.length - 1 ? 0 : prev + 1));
    }
  };
  
  if (dimensions.length === 0) return null;
  
  const currentDimension = dimensions[activeIndex];
  const currentState = dimensionStates[currentDimension.id];
  const currentStateData = currentDimension.states[currentState];
  const currentPercentage = dimensionPercentages[currentDimension.id] || 50;
  
  return (
    <div className="mb-8">
      {/* Carousel header with navigation buttons */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => navigate('prev')} 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(235,240,180,0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(220,255,200,0.6)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1), 0 0 5px rgba(193,191,132,0.3)",
            color: "#2359FF",
            transform: "none",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "none"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="text-center flex-1">
          <h3 className="text-base font-light text-[#2359FF]">{currentDimension.title}</h3>
          <div className="flex justify-center mt-2 space-x-1">
            {dimensions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="w-2 h-2 rounded-full"
                style={{
                  background: idx === activeIndex ? "#2359FF" : "rgba(35,89,255,0.3)",
                  transition: "background 0.3s"
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => navigate('next')} 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(235,240,180,0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(220,255,200,0.6)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1), 0 0 5px rgba(193,191,132,0.3)",
            color: "#2359FF",
            transform: "none",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "none"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      
      {/* Dimension labels with slider */}
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
              background: "linear-gradient(to right, rgba(193,191,132,0.6), rgba(150,159,30,0.6))"
            }}
          ></div>
          
          {/* Pulse animation */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.2,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              animation: "pulse 3s infinite"
            }}
          ></div>
          
          {/* Slider thumb */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${currentPercentage}%`,
              width: '16px',
              height: '16px',
              borderRadius: '9999px',
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.3), inset 0 0 4px rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              zIndex: 20,
              display: 'block'
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
                transform: "translate(-50%, -50%)",
                display: 'block'
              }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Main content area with touch support */}
      <div 
        className="carousel-slide"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          padding: '1.5rem',
          borderRadius: '28px',
          background: "rgba(235,240,180,0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(220,255,200,0.6)",
          boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(193,191,132,0.3)",
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'opacity 0.3s',
          willChange: 'opacity',
          animation: 'fadeIn 0.5s'
        }}
      >
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
        
        <div>
          <h3 className="text-base font-light mb-2 text-[#2359FF]">
            {currentDimension.title}: 
            <span className="font-normal ml-1">
              {currentStateData?.name || 'Balanced'}
            </span>
          </h3>
          
          <p className="text-sm text-[#2359FF] mb-3">
            {currentStateData?.description || 'Your approach is balanced in this dimension.'}
          </p>
        </div>
        
        <div>
          {/* Show frameworks, practices, and tools if they exist */}
          {currentStateData?.frameworks && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Frameworks you may be interested in:</h4>
              <p className="text-xs text-[#2359FF]">
                {currentStateData.frameworks}
              </p>
            </div>
          )}
          
          {currentStateData?.practices && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Practices you may be interested in:</h4>
              <p className="text-xs text-[#2359FF]">
                {currentStateData.practices}
              </p>
            </div>
          )}
          
          {currentStateData?.tools && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[#2359FF] mb-1">Tools you may be interested in:</h4>
              <p className="text-xs text-[#2359FF]">
                {currentStateData.tools}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation indicators - dimension name with counter */}
      <div className="mt-4 text-center">
        <p className="text-sm text-[#2359FF]">
          <span className="font-light">Dimension {activeIndex + 1}/{dimensions.length}:</span> {currentDimension.title}
        </p>
      </div>
    </div>
  );
};

export default DimensionCarousel;
