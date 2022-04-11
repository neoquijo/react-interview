
import { observer } from "mobx-react-lite"
import {Tag} from 'antd'
import MapState from "../Store/MapState"
import { toJS } from "mobx"
//Компонент отрисовки путей в списке левой колонки
export const ListAddress = observer(() => {

    return(
        <div className='address-list'>
            {MapState.addressList?.map(el=>{
                console.log(toJS(el))
                return <div key={el.id}
                 onMouseOver={()=> MapState.setAddressDisplay(el)} 
                 onMouseOut={()=>MapState.setAddressDisplay(null)}
                 className='address-line'>
                    <div className='title'>{el.name} - {el.distance}</div>
                    <div > <Tag onClick={()=>MapState.removeAdress(el.id)} color='red'>Удалить</Tag> </div>
                </div>  
            })}
        </div>
    )
})