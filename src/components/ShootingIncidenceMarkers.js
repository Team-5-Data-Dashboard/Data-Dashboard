import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';

// PureComponent ensures that the markers are only rerendered when data changes
class ShootingIncidenceMarkers extends PureComponent {
  render() {
    const { data } = this.props;
    return data.map((incident) => (
      <Marker
        key={incident._id.$oid}
        position={[
          parseFloat(incident.Latitude.$numberDouble),
          parseFloat(incident.Longitude.$numberDouble),
        ]}
      />
    ));
  }
}

ShootingIncidenceMarkers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShootingIncidenceMarkers;
