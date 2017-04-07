import React, { Component } from 'react';
import logo from './logo.svg';
import SimpleMap from './simpleMap';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hotspots: []
    }
  }

  render() {
    return (
      <div className="App">
        <SimpleMap />
      </div>
    );
  }
}

export default App;
