import React, {} from 'react';
import './App.scss';
import './assets/circle.svg';
import NavBar from './components/navBar';
import MapComponent from './components/mapComponent';
import YearContextProvider from './contexts/yearContext';

function App() {
  return (
    <div className="App">
      <YearContextProvider>
        <NavBar />
        <MapComponent />
      </YearContextProvider>
    </div>
  );
}

export default App;
