import React, { Component } from 'react';

import LoginDialog from './LoginDialog/LoginDialog'
import MapExample from '../containers/MapExample'
import FileChoiceList from '../containers/FileChoiceList'

class App extends Component {
  
  render() {

    return (
      <div>
        <LoginDialog />
        <MapExample />
        <FileChoiceList />
      </div>
    );
  }
}

export default App;
