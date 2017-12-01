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

  addFriend() {
    this.setState({
      picture: '',
      name: '',
      friends: [...this.state.friends, {
        picture: this.state.picture,
        name: this.state.name
      }]
    })
  }

  render() {
    // const friends = this.state.friends.map((friend, i) => (
    //   <div key={`friend-${i}-${friend.name}`}>
    //     <img width="100px" src={friend.picture} />
    //     <span>{friend.name}</span>
    //   </div>
    // ));
    return (
      <div>
        Picture:
        <input onChange={event => this.updatePicture(event.target.value)} value={this.state.picture}/>
        
        Name:
        <input onChange={event => this.updateName(event.target.value)} value={this.state.name} />
        <button onClick={() => this.addFriend()}>Add friend</button>
    
        <div>
          {this.state.friends.map(friend => (
            <div>
              <img src={friend.picture} width="100px"/>
              Name: {friend.name}
            </div>
          ))}
        </div>

        <div>State: {JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default App;