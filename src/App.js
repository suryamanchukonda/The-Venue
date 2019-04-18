import React, { Component } from 'react';
import './resources/styles.css';

import Header from './Components/Header_footer/Header';
import Featured from './Components/Featured/Index';
import VenueNfo from './Components/VenueNfo/Index';
import Highlight from './Components/Highlights/Index';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px"}}>
          <Header/>
          <Featured/>
          <VenueNfo/>
          <Highlight/>
      </div>
    );
  }
}

export default App;
