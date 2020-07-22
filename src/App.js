import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Profile from './Components/Profile';
import Skills from './Components/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Presentation />
        <Profile />
        <Skills />
      </div>
    );
  }
}

export default App;
