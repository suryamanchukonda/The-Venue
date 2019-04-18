import React, { Component } from 'react';
import './resources/styles.css';

import Header from './Components/Header_footer/Header';
import Featured from './Components/Featured/Index';
import VenueNfo from './Components/VenueNfo/Index';
import Highlight from './Components/Highlights/Index';
import Pricing from './Components/Pricing/Index';
import Location from './Components/Location/Index';
import Footer from './Components/Header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px"}}>
          <Header/>
          <Featured/>
          <VenueNfo/>
          <Highlight/>
          <Pricing/>
          <Location/>
          <Footer/>
      </div>
    );
  }
}

export default App;
