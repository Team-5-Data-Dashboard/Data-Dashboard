import React from 'react';
import './App.scss';
import Main from './components/Main';
import DashComponent from './components/DashComponent';
import ShootingRacialChart from './components/shootingRacialChart';

function App() {
  return (
    <div className='App'>
      <Main />
      <DashComponent />
      <ShootingRacialChart year={2018} />
    </div>
  );
}

export default App;
