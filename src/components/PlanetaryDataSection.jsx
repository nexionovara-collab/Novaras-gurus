import React from 'react';

const PlanetaryDataSection = () => {
  return (
    <section className="w-full min-h-[757px] py-16 px-5 bg-[#f5f7fa] flex items-center justify-center sm:py-[60px] sm:px-4">
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col items-center justify-between gap-[60px] lg:flex-row lg:text-left">
          
          {/* VIDEO SECTION */}
          <div className="relative w-[300px] h-[300px] rounded-[25px] overflow-hidden shadow-lg">
            <video
              src="https://pixabay.com/videos/download/earth-spinning-globe-hud-computer-258542_tiny.mp4"   
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center sm:w-[65px] sm:h-[65px]">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-left-[18px] border-l-[#2563eb] ml-1"></div>
              </div>
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-[1.5rem] leading-[1.3] font-bold color-[#173b6b] sm:text-[1.9rem] lg:text-[2.3rem]">
                How Planetary Data Helps Us Understand Space
              </h2>
            </div>
            <div>
              <p className="text-[0.95rem] leading-[1.7] color-[#5f6b7a] lg:text-[1rem] lg:leading-[1.9]">
                Planetary science goes beyond images. Comparing{" "}
                <span className="text-[#2563eb] font-bold">
                  mass, diameter, gravity, and density
                </span>
                , we gain insight into how planets form, behave, and interact within the solar system.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlanetaryDataSection;
