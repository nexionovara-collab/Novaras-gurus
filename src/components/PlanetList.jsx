// import { useEffect, useState } from "react";
// import PlanetCard from "./PlanetCard";
// import PlanetCardHeader from "./PlanetCardHeader";

// const PlanetList = () => {
//   const [planets, setPlanets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://anurella.github.io/json/planets.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setPlanets(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <p className="text-center mt-10 text-gray-600">
//         Loading planets...
//       </p>
//     );
//   }

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-12 bg-[#eef3fb]">
//       {/* Hide header on mobile */}
//       <div className="hidden md:block">
//         <PlanetCardHeader />
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//         {planets.map((planet, index) => (
//           <PlanetCard
//             key={index}
//             planet={planet}
//           />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default PlanetList;


import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-white py-20 flex items-center justify-center">
        <p className="text-center text-gray-500 text-sm">Loading planets...</p>
      </div>
    );
  }

  return (
    <section id="planets" className="w-full bg-white px-4 py-14 md:px-8 lg:px-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-2">
        <h2 className="text-[#1d4fb8] text-2xl md:text-4xl font-bold mb-4">
          Visualizing the Differences Between Planets
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      {/* Grid — 2 cols on mobile, 3 on desktop */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
    </section>
  );
};

export default PlanetList;
