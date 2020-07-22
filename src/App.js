import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Profile from './Components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Presentation />
        <Profile />
      </div>
    );
  }
}

export default App;
