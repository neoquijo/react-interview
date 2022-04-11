import { Button } from "antd"
import { toJS } from "mobx"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Marker, useMapEvents} from 'react-leaflet'
import { getPatch } from '../../api'
import MapState from "../Store/MapState"
import { parseDistancee, parseRoutes, removePath, savePath } from "./Helpers"



export const MapHelper = observer(() => {

  const [source, setSource] = useState()
  const [destination, setDestination] = useState()

  useEffect(()=>{
    setSource(toJS(MapState.currentSource))
    setDestination(toJS(MapState.currentDestination))
  }, [MapState.currentSource, MapState.currentDestination])

  

    const MapController = () => {
        const thisMap = useMapEvents({
          click:(e)=>clickHandler(e),
        })
       
      return null
      }
      

      
      const clickHandler = (e) =>{
          if(destination) return null
        if(!source){
            MapState.setCurrentSource({lat:e.latlng.lat,lng:e.latlng.lng})
        } else {
            MapState.setCurrentDestination({lat:e.latlng.lat,lng:e.latlng.lng})
              getPatch(MapState.currentSource, {lat:e.latlng.lat,lng:e.latlng.lng}).then(res=>{
              parseRoutes(res.geometry.coordinates)
              parseDistancee(res.distance)
            })
        }
      }



    return(
        <div className='info'>
            {!source && <div className='title'>Поставьте маркер на карту для выбора точки загрузки</div>}
            {source && !destination && <div className='title'>Выберете точку для разгрузки кликнув по карте</div>}
            <MapController/>
            {source && <Marker position={[source.lat, source.lng]}/>}
            
            {destination && <Marker position={[destination.lat, destination.lng]}/>}
            {destination && <div className='buttons'>
              
                <Button onClick={()=>removePath()} danger>Стереть путь</Button>
                <Button onClick={()=>savePath()}>Сохранить путь</Button></div>}
        </div>
    )
})
