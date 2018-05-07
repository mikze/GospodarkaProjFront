import React, { Component } from 'react';
import { connect } from 'react-redux'
import MapExample from './containers/MapExample'
import NaviBar from './containers/NaviBar'
import TableOfPlaces from './containers/TableOfPlaces'
import './style.css'
import FilesList from './components/FilesList';
import { setSelectedFile } from './actions/actions'

class App extends Component {


  onChooseFile = (file) => {
    setSelectedFile(file);
  };

  render() {

    return (
      <div>
        <NaviBar />
        <div className="block">
          <MapExample />
          <FilesList
            files={this.props.files}
            onItemClicked={file => this.onChooseFile(file)}
          />
        </div>
        <TableOfPlaces />
      </div>
    );
  }
}

const mapStateToProps = ({ FileResult }) => {
  return { files: FileResult };
};

const ConnectedApp = connect(mapStateToProps, { setSelectedFile })(App);
export { ConnectedApp as App };
