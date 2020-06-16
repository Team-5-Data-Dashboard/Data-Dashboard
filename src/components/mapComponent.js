import React from 'react';
import PaneInfo from './paneInfo';
import PaneMap from './paneMap';

function MapComponent(props) {
  const { year } = props;

  return (
    <div className="container-map">
      <PaneInfo />
      <PaneMap />
    </div>
  );
}

export default MapComponent;
