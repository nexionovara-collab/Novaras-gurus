// const PlanetCard = ({planet})=>{
//     console.log(planet)
//     const imagePath = planet.image.replace("../images/","/images/")

//     return(
//         <figure className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
//             <img src={imagePath} alt={planet.planet} className="w-full h-56 object-cover"/>

//             <figcaption className="p-6 text-center">
//                 <h2 className="text-lg font-semibold text-gray-900">
//                     {planet.planet}
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-2">
//                     {planet.distanceFromSun} million km from sun
//                 </p>
//             </figcaption>
//         </figure>
//     )
// }

// export default PlanetCard



const PlanetCard = ({ planet }) => {
  return (
    <figure className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      {/* Planet Image */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={planet.image}
          alt={planet.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <figcaption className="w-full px-3 py-4 text-center">
        <p className="text-gray-900 font-semibold text-sm md:text-base mb-1">
          {planet.name}
        </p>
        <p className="text-gray-500 text-xs md:text-sm leading-snug">
          Distance
          <br />
          from Sun
        </p>
        {planet.distanceFromSun && (
          <p className="text-[#1d4fb8] text-xs md:text-sm font-medium mt-1">
            {planet.distanceFromSun}
          </p>
        )}
      </figcaption>
    </figure>
  );
};

export default PlanetCard;
