import React from 'react';
import './App.scss';
// import DashComponent from './components/dashComponent';
import NavBar from './components/navBar';
import MapComponent from './components/mapComponent';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MapComponent />
    </div>
  );
}

export default App;
