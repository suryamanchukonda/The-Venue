import React, { Component } from 'react';
import './resources/styles.css';

import Header from './Components/Header_footer/Header';
import Featured from './Components/Featured/index';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px", background: "cornflowerblue"}}>
          <Header/>
          <Featured/>
      </div>
    );
  }
}

export default App;
