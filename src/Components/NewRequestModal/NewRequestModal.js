import { Button, Empty, Modal, Select } from "antd"
import ReqState from "../Store/ReqState"
import MapState from '../Store/MapState'
import {Tag} from 'antd'
import { useState } from "react"
import { toJS } from "mobx"
const { Option } = Select


export const NewRequestModal = ({ visible, onCancel }) => {
    const [selectedRoute, setSelectedRoute] = useState(null)


    const addReq = () =>{
        const id = new Date().getTime()
        const req = {
            ID: id,
            routes: {
                id: toJS(MapState.getAdress(selectedRoute).id),
                routes: toJS(MapState.getAdress(selectedRoute).routes),
                name: toJS(MapState.getAdress(selectedRoute).name),
                source: toJS(MapState.getAdress(selectedRoute).source),
                destination: toJS(MapState.getAdress(selectedRoute).destination),
            },
            action: <Tag onClick={()=>ReqState.delRequest(id)} color='red'>Удалить</Tag>
        }
        ReqState.addRequest(req)
        console.log(toJS(ReqState.requestList))
        onCancel()
    }
    


    return (
        <Modal title='Добавить заявку' visible={visible} onOk={()=>addReq()} onCancel={onCancel}>
            <div className='address-list'>
                <Select onSelect={e=>setSelectedRoute(e)} notFoundContent={
                    <Empty description={<>
                        <div className='title'>Нет доступных маршрутов</div>
                        <Button onClick={() => {
                            MapState.setAction('addRoute')
                            onCancel()
                        }} style={{ margin: '30px' }}>Добавить</Button>
                    </>} />
                }>
                    {MapState.addressList?.map(el => {
                        return <Option  key={el.id}>ID: {el.id} Название: {el.name}</Option>
                    })
                    }
                </Select>
            </div>
        </Modal>
    )
}