import { toJS } from "mobx"
import { useEffect, useState } from "react"
import { Marker, Polyline, useMap } from "react-leaflet"
import MapState from "../Store/MapState"

//Компонент отрисовка путей на карте

const FlyHome = ({value})=>{
   const myMap = useMap()
   myMap.flyTo(value)
   // myMap.getBoundsZoom(value)
   return null
}

export const RenderSingleAddress = (adress) => {


const [element, setElement] = useState(null)

useEffect(()=>{
   
   setElement(MapState.displayAddress?MapState.displayAddress:null)},
   [MapState.displayAddress?.source?.lat])

return(<>
      {element && <>
       <Marker position={[element.source.lat, element.source.lng]}/>
       <FlyHome value={[element.source.lat, element.source.lng]}/>
       <Polyline positions={element.routes} pathOptions={{color:'red'}}/>
       <Marker position={[element.destination.lat, element.destination.lng]}/>
       </>}  
   </> )
}