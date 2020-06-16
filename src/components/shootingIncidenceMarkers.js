import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import AmericanIndianSVG from '../assets/americanIndian.svg';
import BlackSVG from '../assets/black.svg';
import BlackHispanicSVG from '../assets/blackHispanic.svg';
import WhiteHispanicSVG from '../assets/whiteHispanic.svg';
import WhiteSVG from '../assets/white.svg';
import AsianPISVG from '../assets/asianPI.svg';
import UnknownSVG from '../assets/unknown.svg';

export const americanIndian = new L.Icon({
  iconUrl: AmericanIndianSVG,
});
export const black = new L.Icon({
  iconUrl: BlackSVG,
});
export const blackHispanic = new L.Icon({
  iconUrl: BlackHispanicSVG,
});
export const whiteHispanic = new L.Icon({
  iconUrl: WhiteHispanicSVG,
});
export const white = new L.Icon({
  iconUrl: WhiteSVG,
});
export const asianPI = new L.Icon({
  iconUrl: AsianPISVG,
});
export const unknown = new L.Icon({
  iconUrl: UnknownSVG,
});

const determineColor = (incident, race) => {
  let iconURL = '';
  if (race === 'AMERICAN INDIAN/ALASKAN NATIVE') {
    iconURL = americanIndian;
  }
  if (race === 'BLACK') {
    iconURL = black;
  }
  if (race === 'BLACK HISPANIC') {
    iconURL = blackHispanic;
  }
  if (race === 'WHITE HISPANIC') {
    iconURL = whiteHispanic;
  }
  if (race === 'WHITE') {
    iconURL = white;
  }
  if (race === 'ASIAN / PACIFIC ISLANDER') {
    iconURL = asianPI;
  }
  if (race === 'UNKNOWN') {
    iconURL = unknown;
  }

  return (
    <Marker
      key={incident._id.$oid}
      position={[
        parseFloat(incident.Latitude.$numberDouble),
        parseFloat(incident.Longitude.$numberDouble),
      ]}
      icon={iconURL}
    />
  );
};

// PureComponent ensures that the markers are only rerendered when data changes
function ShootingIncidenceMarkers(props) {
  const { data } = props;
  return data.map((incident) => (
    determineColor(incident, incident.VIC_RACE)
  ));
}

ShootingIncidenceMarkers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShootingIncidenceMarkers;
