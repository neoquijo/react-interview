import { makeAutoObservable } from "mobx";

class MapState {
    constructor(){
        makeAutoObservable(this)
       
    }
    //Знаю что по канонан поля стейта должны быть не мутабельными и начинаться с _,
    //но писать геттеры долго
    action = '' 
    addressList = []
    currentRoute = []
    currentSource = null
    currentDestination = null
    currentDistance = null
    displayAddress = null
    markers = []
    getAdress(value){
     return value? this.addressList.filter(el=>el.id == value)[0] : 'Не выбрано'
        
    }
    setAddressDisplay(value){
        this.displayAddress = value
    }
    setCurrentSource(value){
        this.currentSource = value
    }
    setCurrentDestination(value){
        this.currentDestination = value
    }
    setCurrentDistance(value){
        this.currentDistance = value
    }
    addAddress(value){
        this.addressList.push(value)
    }
    removeAdress(value){
        this.addressList=this.addressList.filter(el=>el.id!=value)
        this.setAddressDisplay(null)
    }

    setCurrentRoute(value){
        this.currentRoute.push(value)
    }
    removeCurrent(){
        this.currentRoute=[]
        this.currentSource=null
        this.currentDistance=null
        this.currentDestination=null
        this.action = null
    }
    addMarker(value){
        this.markers.push(value)
    }
    setAction(value){
        this.action = value
        
    }
    addAdress (lat, lng){
        this.adressList.push([lat,lng])
    }
   

}

export default new MapState()