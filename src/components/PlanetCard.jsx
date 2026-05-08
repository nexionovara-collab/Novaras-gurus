const PlanetCard = ({planet})=>{
    console.log(planet)
    const imagePath = planet.image.replace("../images/","/images/")

    return(
        <figure className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img src={imagePath} alt={planet.planet} className="w-full h-56 object-cover"/>

            <figcaption className="p-6 text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                    {planet.planet}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                    {planet.distanceFromSun} million km from sun
                </p>
            </figcaption>
        </figure>
    )
}

export default PlanetCard