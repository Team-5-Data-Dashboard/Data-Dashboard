import React from 'react';
import PaneInfo from './paneInfo';
import PaneMap from './paneMap';

class MapComponent extends React.Component {
  render() {
    return (

      <div className="container-map">
        <PaneInfo year={this.props.year} />
        <PaneMap year={this.props.year} />
      </div>
    );
  }
}

export default MapComponent;
