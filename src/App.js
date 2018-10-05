import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App' id='drum-machine'>
        <Display />
        <DrumKeys />
        Hello
      </div>
    );
  }
}

class Display extends Component {
  render() {
    return <div id='display'>Display here!</div>
  }
}

class DrumKeys extends Component {
  render() {
    const keyboard = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const drumKeys = keyboard.map((letter) => {
      return <div className='drum-pad'>{letter}</div>
    })
    
    return <div id='drum-keys'>{drumKeys}</div>
  }
}

export default App;
