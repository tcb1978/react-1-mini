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

  updatePicture(value) {
    this.setState({
      picture: value
    })
  }

  updateName(value) {
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <div>
        Picture:
        <input onChange={event => this.updatePicture(event.target.value)} value={this.state.picture}/>
        
        Name:
        <input onChange={event => this.updateName(event.target.value)} value={this.state.name} />
        <button>Add friend</button>

        <div>State: {JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default App;