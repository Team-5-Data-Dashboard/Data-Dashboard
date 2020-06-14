import React from 'react';
import './App.scss';
import Main from './components/Main.js';
import DashComponent from './components/DashComponent.js'
import NavBar from './components/NavBar.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <DashComponent
        headline="Shootings"
        compType="map" 
      />
      <DashComponent 
        headline="8 tasks completed out of 10"
        compType="calendar" 
      />

    </div>
  );
}

export default App;
