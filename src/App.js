import React from 'react';
import './App.scss';
import MapComponent from './components/mapComponent';

class App extends React.Component {
  /*
  constructor(props){
    super(props)
    this.state = {
      year:2018
    };
  }*/

  state = {
    year: ""
  }
  handleSort = (e) => {
    console.log('event', e.target.value);
    this.setState({
      year: e.target.value
    })
  };

  NavBar = () => {
    return (
      <div className='navbar'>
        Data Dashboard{' '}
        <select onChange={this.handleSort}>
          <option value='2006'> 2006 </option>
          <option value='2007'> 2007 </option>
          <option value='2008'> 2008 </option>
          <option value='2009'> 2009 </option>
          <option value='2010'> 2010 </option>
          <option value='2011'> 2011 </option>
          <option value='2012'> 2012 </option>
          <option value='2013'> 2013 </option>
          <option value='2014'> 2014 </option>
          <option value='2015'> 2015 </option>
          <option value='2016'> 2016 </option>
          <option value='2017'> 2017 </option>
          <option value='2018'> 2018 </option>
          <option value='2019'> 2019 </option>
        </select>{' '}
      </div>
    );
  };

  render(){
  
  return (
    <div className='App'>
      <NavBar />
      <MapComponent />
    </div>
  )}
}

export default App;
