import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import NYCOpenDataLogo from '../NYCOpenDataLogo.png';
import ShootingIncidenceMarkers from './shootingIncidenceMarkers';
import { YearContext } from '../contexts/yearContext';

const DATA_SRC = 'https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Historic-/833y-fsy8';

function PaneMap() {
  const [data, setData] = useState([]);
  const { year } = useContext(YearContext);

  const fetchData = (year) => {
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/data-dashboard-ipfkx/service/Shootings/incoming_webhook/getAllByYear?year=${year}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error: ', err));
  };

  useEffect(() => {
    fetchData(year);
  }, [year]);

  return (

    <div className="map">
      <Map center={[40.7128, -74.006]} zoom={11}>
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {data.length && <ShootingIncidenceMarkers data={data} />}
      </Map>
      <div
        className="map-credit"
      >
        <a
          href={DATA_SRC}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={NYCOpenDataLogo}
            className="nyc-data-logo"
            alt="logo"
            style={{ height: 40 }}
          />
        </a>
      </div>
    </div>
  );
}

PaneMap.props = {
  year: PropTypes.number.isRequired,
};

export default PaneMap;
