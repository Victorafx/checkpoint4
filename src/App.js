import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Presentation />
        <Profile />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
