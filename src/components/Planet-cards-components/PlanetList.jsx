import { useEffect, useState } from "react"
import PlanetCard from "./PlanetCard"
import PlanetCardHeader from "./PlanetCardHeader"

const PlanetList = ()=>{
    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://anurella.github.io/json/planets.json")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setPlanets(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.error(err)
            setLoading(false)
        })
    },[])
    if(loading){
        return(
            <p className="text-center mt-10 text-gray-600">
                Loading planets...
            </p>
        )
    }
    return(
        <main className="max-w-7xl mx-auto px-6 py-12 bg-[#F2F7FF]">
            <PlanetCardHeader />
            <div className="max-w-[324px] mx-auto px-4 py-8 grid grid-cols-2 sm:max-w-[600px] lg:max-w-[1200px] lg:grid-cols-3 gap-5">
                {planets.map((planet,index)=>{
                    return<PlanetCard key={index} planet={planet} />
                })}
            </div>
        </main>  
    )
}

export default PlanetList