import React from 'react';
import './App.scss';
import DashComponent from './components/dashComponent';
import NavBar from './components/navBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <DashComponent headline='Shootings' compType='map' />
      <DashComponent
        headline='8 tasks completed out of 10'
        compType='calendar'
      />
    </div>
  );
}

export default App;
