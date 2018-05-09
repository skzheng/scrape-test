import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scraper from './Components/Scraper/Scraper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scraper />
      </div>
    );
  }
}

export default App;
