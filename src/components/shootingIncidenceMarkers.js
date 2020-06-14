import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import SVGIcon from '../assets/circle.svg';

export const racePoint = new L.Icon({
  iconUrl: SVGIcon,
});

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
        icon={racePoint}
      />
    ));
  }
}

ShootingIncidenceMarkers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShootingIncidenceMarkers;
