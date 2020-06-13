import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import NYCOpenDataAPI from '../api/NYCOpenDataAPI';

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
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
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
