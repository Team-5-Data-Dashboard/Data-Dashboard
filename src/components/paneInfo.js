import React from 'react';
import ShootingRacialChart from './shootingRacialChart';

function PaneInfo(props) {
  const { year } = this.props;
  return (
    <div className="info">
      <ShootingRacialChart year={2018} />
    </div>
  );
}

export default PaneInfo;
