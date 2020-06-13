import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';

// PureComponent ensures that the markers are only rerendered when data changes
export default class ShootingIncidenceMarkers extends PureComponent {
  render() {
    const { data } = this.props;
    return data.map(
      (incident) => (
        <Marker position={[parseFloat(incident.latitude), parseFloat(incident.longitude)]} />
      ),
    );
  }
}

ShootingIncidenceMarkers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
