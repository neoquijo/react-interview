import { Button, Empty } from "antd"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { ListAddress } from "../DisplayAddress/ListAddress"
import { DisplayRequests } from "../DisplayRequests/DisplayRequests"
import { NewRequestModal } from "../NewRequestModal/NewRequestModal"
import MapState from "../Store/MapState"
import ReqState from "../Store/ReqState"


export const MapControls = observer(() => {
    const [requesModal, setRequestModalDisplay]=useState(false)
    return(
        <div className='map-controls'>
            <div className='requests-tab'>
                <div onClick={()=>console.log(ReqState.requests, ReqState.requestList)} className='title'>
                    Список заявок:
                </div>
                <DisplayRequests/>
                {MapState.addressList.length===0 ?
                <Empty description={<div className='title'>Список пуст! Добавьте новый маршрут!</div>} />:
                 <ListAddress/>
                 } 
                
            </div>
            <div className='buttons'>
                
                 <Button onClick={()=>setRequestModalDisplay(true)}>Создать заявку</Button>
                 <NewRequestModal visible={requesModal} onCancel={()=>setRequestModalDisplay(false)}/>
                 <Button onClick={()=>MapState.setAction('addRoute')}>Добавить маршрут</Button>
            </div>
        </div>
    )
})