import React, { memo } from 'react';
import TestMap from '../img/TestMap.jpeg';

const Map = () => (
  <div className="map">
    <img src={TestMap} alt="testlogo" />
  </div>
);

export default memo(Map);
