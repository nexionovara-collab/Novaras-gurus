// import React from 'react';
// import earthVideo from '../assets/258542_tiny.mp4';
// import './PlanetaryDataSection.css';

// const PlanetaryDataSection = () => {
//   return (
//     <section className="planetary-data-section">
//       <div className="section-container">
//         <div className="content-wrapper">
          
//           {/* TEXT SECTION */}
//           <div className="written-content">
//             <h2 className="section-title">
//               How Planetary Data Helps Us Understand Space
//             </h2>
//             <p className="section-subtitle">
//               Planetary science goes beyond images. Comparing{" "}
//               <span className="blue-text">
//                 mass, diameter, gravity, and density
//               </span>
//               , we gain insight into how planets form, behave, and interact within the solar system.
//             </p>
//           </div>

//           {/* VIDEO SECTION */}
//           <div className="video-card">
//             <video
//               src={earthVideo}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="video"
//             />
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlanetaryDataSection;


import React from 'react';
import earthVideo from '../assets/258542_tiny.mp4';
import './PlanetaryDataSection.css';

const PlanetaryDataSection = () => {
  return (
    <section id='data' className="planetary-data-section">
      <div className="section-container">
        <div className="content-wrapper">

          {/* VIDEO SECTION — left */}
          <div className="video-card">
            <video
              src={earthVideo}
              autoPlay
              loop
              muted
              playsInline
              className="video"
            />
          </div>

          {/* TEXT SECTION — right */}
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

        </div>
      </div>
    </section>
  );
};

export default PlanetaryDataSection;
