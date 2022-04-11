import { toJS } from "mobx"
import { Select, Tag } from 'antd'
import { observer } from "mobx-react-lite"
import MapState from "../Store/MapState"
import ReqState from "../Store/ReqState"

//Отрисовка заявок в колонке с лева

export const DisplayRequests = observer(() => {
    const { Option } = Select
    return (
        <div className='requests-list'>
            {ReqState.requestList?.map(req => {
                return (

                    <div
                        onMouseOver={() => MapState.setAddressDisplay({
                            source: toJS(req.routes.source),
                            destination: toJS(req.routes.destination),
                            routes: toJS(req.routes.routes)
                        })}
                        onMouseOut={() => MapState.setAddressDisplay(null)}
                        className='request-line'>

                        <div>{req.ID}</div>
                        {req.action}
                        <Tag color='cyan'>Смотреть на карте</Tag>

                    </div>

                )
            })}
        </div>
    )
})