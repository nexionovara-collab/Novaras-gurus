// src/components/Hero.jsx

import "./Hero.css";
import earthImg from "../assets/earth.png";

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: `${(i * 17) % 100}%`,
  left: `${(i * 13) % 100}%`,
  size: `${(i % 3) + 1}px`,
  opacity: ((i % 5) + 2) / 10,
}));

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Star field background dots */}
      <div
        className="hero__stars"
        aria-hidden="true"
      >
        {stars.map((star) => (
          <span
            key={star.id}
            className="hero__star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        {/* Left — text */}
        <div className="hero__text">
          <h1 className="hero__heading">
            Explore Our Solar
            <br />
            System Through Data
          </h1>

          <p className="hero__subtext">
            Understand the planets not just by name,
            but by measurable facts. From size and
            mass to gravity and density, this page
            breaks down the solar system in a clear,
            data-driven way.
          </p>

          <div className="hero__actions">
            <a
              href="#Planets"
              className="hero__btn hero__btn--primary"
            >
              Explore the Planets
            </a>
            <a
              href="#data"
              className="hero__btn hero__btn--primary"
            >
              Explore the Data
            </a>

            <a
              href="#contact"
              className="hero__btn hero__btn--outline"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right — Earth */}
        <div
          className="hero__earth-wrapper"
          aria-label="Earth from space"
        >
          <div
            className="hero__earth-glow"
            aria-hidden="true"
          />

          <img
            src={earthImg}
            alt="Earth from space — Blue Marble"
            className="hero__earth-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;