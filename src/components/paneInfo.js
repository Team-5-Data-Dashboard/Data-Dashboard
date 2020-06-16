import React from 'react';
import ShootingRacialChart from './shootingRacialChart';
import About from './about';

function PaneInfo() {
  return (
    <div className="info">
      <ShootingRacialChart />
      <About />
    </div>
  );
}

export default PaneInfo;
