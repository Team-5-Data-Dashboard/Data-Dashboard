import React from 'react';
import NavBar from './NavBar';
import Map from '../containers/Map';
import Info from '../containers/Info';

function Main() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Info />
        <Map />
      </div>
    </div>
  );
}

export default Main;
