import React from 'react';
import './PlanetaryDataSection.css';   // We'll create this next

const PlanetaryDataSection = () => {
  return (
    <section className="planetary-data-section">
      <div className="section-container">
        <div className="content-wrapper">
    <div className="video-card">
      <video
        src="https://pixabay.com/videos/earth-spinning-globe-hud-computer-258542/"   
        autoPlay
        loop
        muted
        playsInline
        className="video"
      />
      <div className="play-overlay">
        <div className="play-button">
          <div className="triangle"></div>
        </div>
      </div>
    </div>
          <div className="written-content">
            <div className ="caption">
              <h2 className="section-title">
              How Planetary Data Helps Us Understand Space
              </h2>
            </div>
              <div className="p-section">
                <p className="section-subtitle">
                  Planetary science goes beyond images. Comparing <span>mass, diameter, gravity, and density</span> 
                  ,we gain insight into how planets form, behave, and interact within the solar system.
                </p>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlanetaryDataSection;
