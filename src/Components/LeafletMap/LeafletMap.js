
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { MapContainer, Polyline, Marker,  TileLayer, useMap, } from 'react-leaflet'
import { MapHelper } from '../MapHelpers/MapHelper'
import {RenderSingleAddress} from '../DisplayAddress/RenderSingleAddress'
import MapState from '../Store/MapState'

export const LeafletMap = observer(() => {

  const MapResizer = () => {
    const myMap = useMap()
    myMap.invalidateSize()
    return null
  }

  return (
    <div>
      <MapContainer style={{ width: '100%', height: '100vh', }} center={[40.416775, -3.703790]} zoom={6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapResizer />
      <Polyline positions={toJS(MapState.currentRoute)} pathOptions={{color:'red'}}/>
        {MapState.action ? <MapHelper /> : <RenderSingleAddress/>}
       {MapState.displayAddress && <Marker position={[MapState.displayAddress.source.lat,MapState.displayAddress.source.lng]}/>  }
      </MapContainer></div>
  
  )
})