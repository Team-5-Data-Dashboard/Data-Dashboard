import React, { Component } from 'react';
import NYCOpenDataLogo from '../NYCOpenDataLogo.png';
import { fetchShootingIncidence } from '../api/NYCOpenDataAPI';

class ShootingIncidenceMap extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
        }
    }

    componentDidMount() {
        // TODO: handle error case
        fetchShootingIncidence().done(data => {
          console.log(data);
          this.setState({ data });
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="map-shooting-incidence">
                <img
                    src={NYCOpenDataLogo} 
                    className="nyc-data-logo" 
                    alt="logo" 
                    style={{"height": 100}}
                />
                <p>I'm a map of {Object.keys(data).length}.</p>
            </div>
          );
    }
}

export default ShootingIncidenceMap;