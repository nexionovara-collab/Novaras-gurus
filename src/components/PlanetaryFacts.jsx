// // src/components/PlanetaryFacts.jsx

// import "./PlanetaryFacts.css";

// function PlanetaryFacts() {
//   return (
//     <section className="facts-section">
//       {/* Heading */}
//       <h1 className="facts-title">
//         Planetary Facts at a Glance
//       </h1>

//       <p className="facts-description">
//         Below is a comparative table of major planets in our solar system.
//         The data highlights key physical properties used by astronomers
//         and researchers worldwide.
//       </p>

//       <h3 className="facts-subtitle">
//         Data about the planets of our solar system
//         (Planetary facts taken from NASA)
//       </h3>

//       {/* Table */}
//       <div className="table-wrapper">
//         <table className="planet-table">
//           <thead>
//             <tr>
//               <th></th>

//               <th>Name</th>
//               <th>Mass (10 24kg)</th>
//               <th>Diameter (km)</th>
//               <th>Density (kg/m3)</th>
//               <th>Gravity (m/s2)</th>
//             </tr>
//           </thead>

//           <tbody>
//             {/* Terrestrial Planets */}
//             <tr>
//               <td
//                 rowSpan="4"
//                 className="category-cell"
//               >
//                 Terrestrial Planets
//               </td>

//               <td>Mercury</td>
//               <td>0.330</td>
//               <td>4,878</td>
//               <td>5427</td>
//               <td>3.7</td>
//             </tr>

//             <tr>
//               <td>Venus</td>
//               <td>4.87</td>
//               <td>12,104</td>
//               <td>5243</td>
//               <td>8.9</td>
//             </tr>

//             <tr>
//               <td>Earth</td>
//               <td>5.97</td>
//               <td>12,756</td>
//               <td>5514</td>
//               <td>9.8</td>
//             </tr>

//             <tr>
//               <td>Mars</td>
//               <td>0.642</td>
//               <td>6,792</td>
//               <td>3933</td>
//               <td>3.7</td>
//             </tr>

//             {/* Jovian Planets */}
//             <tr>
//               <td
//                 rowSpan="4"
//                 className="category-cell"
//               >
//                 Jovian Planets
//               </td>

//               <td>Jupiter</td>
//               <td>1898</td>
//               <td>142,984</td>
//               <td>1326</td>
//               <td>23.1</td>
//             </tr>

//             <tr>
//               <td>Saturn</td>
//               <td>568</td>
//               <td>120,536</td>
//               <td>687</td>
//               <td>9.0</td>
//             </tr>

//             <tr>
//               <td>Uranus</td>
//               <td>86.8</td>
//               <td>51,118</td>
//               <td>1271</td>
//               <td>8.7</td>
//             </tr>

//             <tr>
//               <td>Neptune</td>
//               <td>102</td>
//               <td>49,528</td>
//               <td>1638</td>
//               <td>11.0</td>
//             </tr>

//             {/* Dwarf Planets */}
//             <tr>
//               <td className="category-cell">
//                 Dwarf Planets
//               </td>

//               <td>Pluto</td>
//               <td>0.0146</td>
//               <td>2,377</td>
//               <td>1850</td>
//               <td>0.7</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default PlanetaryFacts;



// src/components/PlanetaryFacts.jsx


function PlanetaryFacts() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 md:px-8 py-14 bg-white overflow-x-auto planetary-facts-section"
      style={{ display: "none" }}
    >
      {/* Heading */}
      <h2 className="text-[#1f4fb8] text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
        Planetary Facts at a Glance
      </h2>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mb-8 text-center md:text-left">
        Below is a comparative table of major planets in our solar system. The
        data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>

      <p className="text-gray-700 font-semibold text-sm md:text-base mb-5 text-center md:text-left">
        Data about the planets of our solar system (Planetary facts taken from NASA)
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl">
        <table
          style={{ borderCollapse: "separate", borderSpacing: "3px" }}
          className="w-full min-w-[600px] bg-white"
        >
          <thead>
            <tr>
              <th className="bg-white p-3"></th>
              <th className="bg-[#1f4fb8] text-white font-semibold text-sm text-center py-4 px-4 rounded-tl-xl">Name</th>
              <th className="bg-[#1f4fb8] text-white font-semibold text-sm text-center py-4 px-4">Mass (10 24kg)</th>
              <th className="bg-[#1f4fb8] text-white font-semibold text-sm text-center py-4 px-4">Diameter (km)</th>
              <th className="bg-[#1f4fb8] text-white font-semibold text-sm text-center py-4 px-4">Density (kg/m3)</th>
              <th className="bg-[#1f4fb8] text-white font-semibold text-sm text-center py-4 px-4 rounded-tr-xl">Gravity (m/s2)</th>
            </tr>
          </thead>
          <tbody>
            {/* Terrestrial Planets */}
            <tr>
              <td rowSpan="4" className="bg-[#c5d9f0] font-bold text-gray-900 text-sm text-center align-middle px-4 py-4">
                Terrestrial Planets
              </td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Mercury</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">0.330</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">4,878</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">5427</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">3.7</td>
            </tr>
            <tr>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Venus</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">4.87</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">12,104</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">5243</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">8.9</td>
            </tr>
            <tr>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Earth</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">5.97</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">12,756</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">5514</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">9.8</td>
            </tr>
            <tr>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Mars</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">0.642</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">6,792</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">3933</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">3.7</td>
            </tr>

            {/* Jovian Planets */}
            <tr>
              <td rowSpan="4" className="bg-[#c5d9f0] font-bold text-gray-900 text-sm text-center align-middle px-4 py-4">
                Jovian Planets
              </td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Jupiter</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">1898</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">142,984</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">1326</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">23.1</td>
            </tr>
            <tr>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Saturn</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">568</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">120,536</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">687</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">9.0</td>
            </tr>
            <tr>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Uranus</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">86.8</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">51,118</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">1271</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">8.7</td>
            </tr>
            <tr>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Neptune</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">102</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">49,528</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">1638</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">11.0</td>
            </tr>

            {/* Dwarf Planets */}
            <tr>
              <td className="bg-[#c5d9f0] font-bold text-gray-900 text-sm text-center align-middle px-4 py-4 rounded-bl-xl">
                Dwarf Planets
              </td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">Pluto</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">0.0146</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">2,377</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4">1850</td>
              <td className="bg-[#ddeaf8] text-center text-gray-900 text-sm py-4 px-4 rounded-br-xl">0.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PlanetaryFacts;
