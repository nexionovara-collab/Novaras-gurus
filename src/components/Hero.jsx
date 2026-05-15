import React from "react";
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
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-[linear-gradient(135deg,#0b1a3b_0%,#0f2251_40%,#152d6e_70%,#0d2060_100%)]"
    >
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute bg-white rounded-full"
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[60px] flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left lg:gap-[40px] py-16 lg:py-0 lg:min-h-[calc(100vh-72px)]">

        {/* Left — Text */}
        <div className="flex flex-col items-center lg:items-start w-full lg:max-w-[480px] order-2 lg:order-1 lg:pb-[80px]">
          <h1 className="mb-5 font-sans text-[32px] font-extrabold leading-tight tracking-tight text-white md:text-[42px] lg:text-[52px]">
            Explore Our Solar
            <br />
            System Through Data
          </h1>

          <p className="mb-8 font-sans text-[14px] leading-[1.75] text-white/65 max-w-[320px] lg:max-w-[380px]">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 lg:justify-start w-full">
            <a
              href="#data"
              className="inline-flex items-center justify-center px-5 py-3 rounded-[6px] font-sans text-[14px] font-medium text-white no-underline whitespace-nowrap bg-[#1a5dd4] border-2 border-[#1a5dd4] transition-all duration-200 hover:bg-[#1650b8] hover:border-[#1650b8] active:scale-95"
            >
              Explore the Data
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-[6px] font-sans text-[14px] font-medium text-white no-underline whitespace-nowrap bg-transparent border-2 border-white/55 transition-all duration-200 hover:border-white/90 hover:bg-white/5 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right — Earth Image */}
        <div
          className="relative flex items-center justify-center flex-shrink-0 order-1 lg:order-2 w-[240px] h-[240px] md:w-[340px] md:h-[340px] lg:w-[480px] lg:h-[480px]"
          aria-label="Earth from space"
        >
          <div
            className="absolute inset-0 rounded-full blur-[24px] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(74,144,226,0.22)_0%,rgba(26,93,212,0.12)_50%,transparent_75%)]"
            aria-hidden="true"
          />
          <img
            src={earthImg}
            alt="Earth from space — Blue Marble"
            className="relative z-10 object-contain block w-full h-full drop-shadow-[-20px_20px_60px_rgba(0,0,60,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
