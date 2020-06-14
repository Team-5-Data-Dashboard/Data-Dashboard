import React from 'react';
import PaneInfo from './paneInfo';
import PaneMap from './paneMap';

class MapComponent extends React.Component {
  render() {
    return (
      <div className="container-map">
        <PaneInfo year={2018} />
        <PaneMap year={2018} />
      </div>
    );
  }
}

export default MapComponent;
