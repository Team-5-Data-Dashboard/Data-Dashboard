import React from 'react';
import PaneInfo from './paneInfo';
import PaneMap from './paneMap';

function MapComponent() {
  return (
    <div className="container-map">
      <PaneInfo />
      <PaneMap />
    </div>
  );
}

export default MapComponent;
