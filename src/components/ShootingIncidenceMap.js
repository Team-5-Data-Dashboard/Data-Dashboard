import React, { Component, PureComponent } from 'react';
import NYCOpenDataLogo from '../NYCOpenDataLogo.png';
import { fetchShootingIncidence } from '../api/NYCOpenDataAPI';
import { Map, TileLayer, Marker } from 'react-leaflet';

const DATA_SRC = 'https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Historic-/833y-fsy8';

// PureComponent ensures that the markers are only rerendered when data changes
class ShootingIncidenceMarkers extends PureComponent {
    render() {
      const { data } = this.props;
      return data.map(
        (incident, index) =>
          <Marker
              key={index}
              position={[parseFloat(incident.latitude), parseFloat(incident.longitude)]}
          />
      )
    }
  }

class ShootingIncidenceMap extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
        }
    }

    componentDidMount() {
        // TODO: handle error case when we have API
        fetchShootingIncidence().done(data => {
          console.log(data);
          this.setState({ data });
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="map-shooting-incidence" style={{'padding': '20px', 'textAlign': 'left'}}>
                <h4>NYC Shooting Incidence (2010-2018)</h4>
                <Map center={[40.7128, -74.0060]} zoom={10}>
                    <TileLayer
                        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
                        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    {data.length &&
                        <ShootingIncidenceMarkers data={data}/>
                    }
                </Map>
                <a href={DATA_SRC} target="_blank" rel="noopener noreferrer">
                    <img
                        src={NYCOpenDataLogo}
                        className="nyc-data-logo"
                        alt="logo"
                        style={{"height": 40}}
                    />
                </a>
            </div>
          );
    }
}

export default ShootingIncidenceMap;