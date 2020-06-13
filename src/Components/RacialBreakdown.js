import React, { memo } from 'react';
import Map from '../Containers/Map.js';
import Info from '../Containers/Info.js';


const RacialBreakdown = () => {
    
        return (
            <>
                <div className="container">
                        <Info />
                        <Map />
                </div>
            </>
        )
    
}

export default memo(RacialBreakdown);
