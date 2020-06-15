import React from 'react';
import ShootingRacialChart from './shootingRacialChart';
import About from './about';

function PaneInfo(props) {
  const { year } = props;
  return (
    <div className="info">
      <ShootingRacialChart year={year} />
      <About />
    </div>
  );
}

export default PaneInfo;
