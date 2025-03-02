// components/results/ProfileCard.jsx
'use client';

import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card mb-8">
      <h2 
        className="text-xl font-thin tracking-widest text-center mb-4 gradient-text"
      >
        Your Overall Style: {profile.name}
      </h2>
      
      <p className="text-sm text-center mb-6" style={{ color: "#2359FF" }}>
        {profile.description}
      </p>
      
      {/* Things to Celebrate */}
      <div className="mb-6">
        <h3 
          className="text-base font-light mb-4 text-center"
          style={{ color: "#2359FF" }}
        >
          Things to Celebrate
        </h3>
        <ul className="space-y-2">
          {profile.celebrate.map((item, index) => (
            <li 
              key={index}
              className="p-3 rounded-xl text-sm"
              style={{
                background: "rgba(235,240,180,0.3)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(220,255,200,0.4)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(193,191,132,0.2)",
                color: "#2359FF"
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      {/* What Will Support Your Process */}
      <div>
        <h3 
          className="text-base font-light mb-4 text-center"
          style={{ color: "#2359FF" }}
        >
          What Will Support Your Process
        </h3>
        <ul className="space-y-2">
          {profile.support.map((item, index) => (
            <li 
              key={index}
              className="p-3 rounded-xl text-sm"
              style={{
                background: "rgba(220,230,255,0.2)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05), 0 0 5px rgba(35,89,255,0.1)",
                color: "#2359FF"
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
