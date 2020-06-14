import React, { memo } from 'react';
import TestMap from '../img/TestMap.jpeg';
const Map = () => {
  return (
    <div className='map'>
      <img src={TestMap} alt='testlogo'></img>
    </div>
  );
};

export default memo(Map);
