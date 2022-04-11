import axios from "axios";
import MapState from "./Components/Store/MapState";

const parseRoutes = (routes) => {
    const temp = []
    routes.map(route=>{
        temp.push([route[1], route[0]])
    })
    MapState.setCurrentRoute(temp)
}

const parseDistancee = distance => {
    const meters = distance/10
    if (meters>1000) return `${(meters/1000).toFixed(2)}километров`
    else return meters+' метров'
}

export const getPatch = async (source, destination) => {
    try {
        const token = `?access_token=pk.eyJ1IjoiZGV2ZXF1aWpvIiwiYSI6ImNsMG92MWJncjB3b2Qzam50eGZ6NjN5eDgifQ.PCKzx-PgclxwQvfyQZXANQ`
        const src = `${source.lng.toFixed(5)+','+source.lat.toFixed(5)}`
        const dest = `${destination.lng.toFixed(5)+','+destination.lat.toFixed(5)}`
        const coordinates=`${src+';'+dest}`
        const res = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates}${token}&geometries=geojson`)
        return res.data.routes[0]
        
    } catch (error) {
        
    }
}
