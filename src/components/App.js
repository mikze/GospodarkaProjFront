import React, { Component } from 'react';

import LoginDialog from './LoginDialog/LoginDialog'
import MapExample from '../containers/MapExample'
import NaviBar from '../containers/NaviBar'
import FileChoiceList from '../containers/FileChoiceList'
import TableOfPlaces from '../containers/TableOfPlaces'
import '../style.css'

class App extends Component {
  
  render() {

    return (
      <div>
        <NaviBar />
        <LoginDialog />
        <div className="block">
        <MapExample />
        <FileChoiceList />
        </div>
        <TableOfPlaces />
        
      </div>
    );
  }
}

export default App;
