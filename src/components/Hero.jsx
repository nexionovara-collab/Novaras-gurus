import React from 'react';
import './Hero.css';
import earthImg from '../assets/earth.png';

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Star field background dots */}
      <div className="hero__stars" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className="hero__star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.6 + 0.2,
          }} />
        ))}
      </div>

      <div className="hero__content">
        {/* Left — text */}
        <div className="hero__text">
          <h1 className="hero__heading">
            Explore Our Solar<br />
            System Through Data
          </h1>
          <p className="hero__subtext">
            Understand the planets not just by name, but by measurable
            facts. From size and mass to gravity and density, this page
            breaks down the solar system in a clear, data-driven way.
          </p>
          <div className="hero__actions">
            <a href="#data" className="hero__btn hero__btn--primary">
              Explore the Data
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right — Earth */}
        <div className="hero__earth-wrapper" aria-label="Earth from space">
          <div className="hero__earth-glow" aria-hidden="true" />
          <img
            src={earthImg}
            alt="Earth from space — Blue Marble"
            className="hero__earth-img"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
