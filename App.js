import React, { Component } from 'react'

export default class App extends Component {
   handleButton = async () => {
    let API = 'http://localhost:3001/' //url the backend stuff is being sent to
   }
    
  render() {
    return (
      <div>
        This is where weather data will appear
        <button onClick={this.handleButton}>talk to our backend</button>
      </div>
    )
  }
}
