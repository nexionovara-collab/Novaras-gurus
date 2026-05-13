import React from 'react';
import './PlanetaryDataSection.css';

const PlanetaryDataSection = () => {
  return (
    <section className="planetary-data-section">
      <div className="section-container">
        {/* We put Text first so it stacks on top for mobile! */}
        <div className="content-wrapper">
          
          {/* TEXT SECTION */}
          <div className="written-content">
            <h2 className="section-title">
              How Planetary Data Helps Us Understand Space
            </h2>
            <p className="section-subtitle">
              Planetary science goes beyond images. Comparing{" "}
              <span className="blue-text">
                mass, diameter, gravity, and density
              </span>
              , we gain insight into how planets form, behave, and interact within the solar system.
            </p>
          </div>

          {/* VIDEO SECTION */}
          <div className="video-card">
            <video
              src="https://pixabay.com/videos/download/earth-spinning-globe-hud-computer-258542_tiny.mp4"   
              autoPlay
              loop
              muted
              playsInline
              className="video"
            />

            {/* Play Button Overlay */}
            <div className="play-overlay">
              <div className="play-button">
                <div className="triangle"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlanetaryDataSection;
