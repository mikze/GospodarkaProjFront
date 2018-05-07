import React, { Component } from 'react';
import { connect } from 'react-redux'
import Map from './components/Map'
import NaviBar from './containers/NaviBar'
import TableOfPlaces from './components/TableOfPlaces'
import './style.css'
import FilesList from './components/FilesList';
import { setSelectedFile } from './actions/actions'

class App extends Component {


  onChooseFile = (file) => {
    console.log('file', file);
    setSelectedFile(file);
  };

  render() {

    return (
      <div>
        <NaviBar />
        <div className="block">
          <Map
            file={this.props.selectedFile}
          />
          <FilesList
            files={this.props.files}
            onItemClicked={file => this.onChooseFile(file)}
          />
        </div>
        <TableOfPlaces
          file={this.props.selectedFile}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ FileResult, SelectedFile }) => {
  console.log(FileResult);
  return { files: FileResult, selectedFile: SelectedFile };
};

const ConnectedApp = connect(mapStateToProps, { setSelectedFile })(App);
export { ConnectedApp as App };
