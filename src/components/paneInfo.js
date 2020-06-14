import React from 'react';
import ShootingRacialChart from './shootingRacialChart';
import About from './about';

class PaneInfo extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    const { year } = this.props;
    return (

      <div className="info">
        <ShootingRacialChart year={year} />
        <About />
      </div>
    );
  }
  
}

export default PaneInfo;
