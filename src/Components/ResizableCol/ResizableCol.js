import { useState } from 'react';
import { LeafletMap } from '../LeafletMap/LeafletMap';
import { MapControls } from '../MapControls/MapControls';

const ResizableCol = () => {

    const [initialPos, setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const [controlWidth, setControlWidth] = useState()
    const [mapWidth, setMapWidth] = useState()

    const initial = (e) => {

        let resizable = document.getElementsByClassName('control-div')[0];
        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);

    }

    const resize = (e) => {
        setControlWidth(parseInt(initialSize) + parseInt(e.clientX - initialPos))
        setMapWidth(window.innerWidth - controlWidth )
    }

    return (
        <div className='resizable-col-wrapper'>
            <div style={{ width: controlWidth?controlWidth:`50` }} className='control-div' >
               <MapControls/>
            </div>
            
            <div className='spacer'
                draggable='true'
                onDragStart={initial}
                onDrag={resize}
            >

            </div>
            <div className='resizable-col-map' style={{ width: mapWidth?mapWidth: `50` }}>
                <LeafletMap />
            </div>
        </div>
    );

}

export default ResizableCol;