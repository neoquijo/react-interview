import { makeAutoObservable } from "mobx";

class ReqState{
    constructor(){
        makeAutoObservable(this)
       
    }
    requests = []
    get requestList (){
        return this.requests
    }
    addRequest(value){
        this.requests.push(value)
    }
    delRequest(id){
       
        this.requests=this.requests.filter(el => el.ID!==id)
    }
    updateRequest(id, newValue){

        this.requests = this.requests.map(req => req.id === id ? newValue : req)
  
    }
}



export default new ReqState()