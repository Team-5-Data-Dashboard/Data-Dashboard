import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import NYCOpenDataAPI from '../api/NYCOpenDataAPI';

const RACES = {
  AMERICAN_INDIAN_ALASKAN_NATIVE: {
    text: 'American Indian/Alaskan Native',
    bar_color: 'rgba(255, 99, 132, 1)',
  },
  BLACK: {
    text: 'Black',
    bar_color: 'rgba(54, 162, 235, 1)',
  },
  BLACK_HISPANIC: {
    text: 'Black Hispanic',
    bar_color: 'rgba(255, 206, 86, 1)',
  },
  WHITE_HISPANIC: {
    text: 'White Hispanic',
    bar_color: 'rgba(75, 192, 192, 1)',
  },
  WHITE: {
    text: 'White',
    bar_color: 'rgba(153, 102, 255, 1)',
  },
  ASIAN_PACIFIC_ISLANDER: {
    text: 'Asian/Pacific Islander',
    bar_color: 'rgba(255, 159, 64, 1)',
  },
  UNKNOWN: {
    text: 'Unknown',
    bar_color: 'rgba(255, 159, 64, 1)',
  },
};

class ShootingRacialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: [],
    };
  }

  componentDidMount() {
    // TODO: handle error case when we have API
    // NYCOpenDataAPI.fetchShootingIncidence().done((data) => this.setState({ data }));
  }

  render() {
    // const { data } = this.state;
    return (
      <div
        className="map-shooting-incidence"
        style={{ padding: '20px', textAlign: 'left', width: '400px' }}
      >
        <h4>NYC Shootings by Race/Ethnicity</h4>
        <Bar
          data={{
            labels: Object.values(RACES).map((race) => race.text),
            datasets: [{
              label: '# of Shootings',
              data: [12, 19, 5, 8, 2, 3, 2],
              backgroundColor: Object.values(RACES).map((race) => race.bar_color),
            }],
          }}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
        <p>Descriptive subtext goes here. Descriptive subtext goes here.</p>
      </div>
    );
  }
}

export default ShootingRacialChart;
