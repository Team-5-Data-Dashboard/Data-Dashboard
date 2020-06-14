import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';

const RACES = {
  'AMERICAN INDIAN/ALASKAN NATIVE': {
    text: 'American Indian/Alaskan Native',
    bar_color: 'rgba(255, 99, 132, 1)',
  },
  BLACK: {
    text: 'Black',
    bar_color: 'rgba(54, 162, 235, 1)',
  },
  'BLACK HISPANIC': {
    text: 'Black Hispanic',
    bar_color: 'rgba(255, 206, 86, 1)',
  },
  'WHITE HISPANIC': {
    text: 'White Hispanic',
    bar_color: 'rgba(75, 192, 192, 1)',
  },
  WHITE: {
    text: 'White',
    bar_color: 'rgba(153, 102, 255, 1)',
  },
  'ASIAN / PACIFIC ISLANDER': {
    text: 'Asian/Pacific Islander',
    bar_color: 'rgba(255, 159, 64, 1)',
  },
  UNKNOWN: {
    text: 'Unknown',
    bar_color: 'rgba(0, 0, 0, 0.1)',
  },
};

class ShootingRacialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { year } = this.props;
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/data-dashboard-ipfkx/service/Shootings/incoming_webhook/getAllCountByRace?year=${year}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const countMap = {};
        data.forEach((d) => {
          // eslint-disable-next-line no-underscore-dangle
          countMap[d._id] = parseInt(d.count.$numberLong, 10);
        });
        this.setState({ data: countMap });
      })
      .catch((err) => console.error('Error: ', err));
  }

  render() {
    const { data } = this.state;
    return (
      <div
        className='map-shooting-incidence'
        style={{ padding: '20px', textAlign: 'left', width: '50vw' }}
      >
        <h4>NYC Shootings by Race/Ethnicity</h4>
        <HorizontalBar
          data={{
            labels: Object.values(RACES).map((race) => race.text),
            datasets: [
              {
                label: '# of Shootings',
                data: Object.keys(RACES).map((race) => data[race]),
                backgroundColor: Object.values(RACES).map(
                  (race) => race.bar_color
                ),
              },
            ],
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

ShootingRacialChart.props = {
  year: PropTypes.number.isRequired,
};

export default ShootingRacialChart;