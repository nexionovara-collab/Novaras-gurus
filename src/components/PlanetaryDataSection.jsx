import React from 'react';
import './PlanetaryDataSection.css';   // We'll create this next

const PlanetaryDataSection = () => {
  return (
    <section className="planetary-data-section">
      <div className="section-container">
        <div className="content-wrapper">
          <div className="video-container">
            <img 
              src="https://picsum.photos/id/1015/1200/600" 
              alt="Planetary Data Visualization"
              className="data-image"
            />
            <div className="play-button">
              <div className="play-icon">▶️</div>
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
                  Planetary science goes beyond images. Comparing mass, diameter, gravity, and density, 
                  we gain insight into how planets form, behave, and interact within the solar system.
                </p>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlanetaryDataSection;