import { toJS } from "mobx"
import MapState from "../Store/MapState"

export const savePath = () => {
    const name = prompt('Введите название или идентификатор маршрута')
    const routes = toJS(MapState.currentRoute)
    const source = toJS(MapState.currentSource)
    const destination = toJS(MapState.currentDestination)
    const distance = toJS(MapState.currentDistance)
    const id = new Date().getTime()
    const address = {
      id, name, source, destination, routes, distance
    }
    MapState.addAddress(address)
    removePath()
   
  }

 export const parseRoutes = (routes) => {
    const temp = []
    routes.map(route=>{
        temp.push([route[1], route[0]])
        return null 
      })
    MapState.setCurrentRoute(temp)
}

export const parseDistancee = distance => {
    const meters = distance/10
    if (meters>1000) MapState.setCurrentDistance(`${(meters/100).toFixed(2)+(meters>4000?' километров':' километра')}`)
    else MapState.setCurrentDistance(meters.toFixed(0)+(meters>4?' метров':meters.toFixed(0)===1?' метр': 'метра'))
}

 export const removePath = () =>{
    
    MapState.removeCurrent()
    
  }