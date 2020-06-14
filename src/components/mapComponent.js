import React from 'react';
import PaneInfo from './paneInfo';
import PaneMap from './paneMap';

function MapComponent(props) {
  const { year } = props;
  return (
    <div className='container-map'>
      <PaneInfo year={year} />
      <PaneMap year={year} />
    </div>
  );
}

export default MapComponent;
