import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Presentation />
      </div>
    );
  }
}

export default App;
