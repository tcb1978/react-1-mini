import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: '',
    }
  }

  render() {
    return (
      <div>
        Picture:
        <input />

        Name:
        <input />

        <button>Add friend</button>
      </div>
    );
  }
}

export default App;