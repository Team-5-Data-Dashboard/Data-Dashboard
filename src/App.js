import React from 'react';
import './App.scss';
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
