import React, { Component } from 'react';
import LoginDialog from './LoginDialog/LoginDialog'
import MapExample from './MapExample/MapExample'

class App extends Component {
  render() {
    return (
      <div>
        <LoginDialog/>
        <MapExample/>
      </div>
    );
  }
}

export default App;
