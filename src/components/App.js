import React, { Component } from 'react';
import { FlatButton, CircularProgress } from 'material-ui';
import MapExample from '../containers/MapExample'
import FileChoiceList from '../containers/FileChoiceList'
import TableOfPlaces from '../containers/TableOfPlaces'
import '../style.css'
import { callBackend } from '../actions/actions';
import { connect } from 'react-redux'

class App extends Component {


  buttonClicked = () => {
    this.props.callBackend();
  };

  showProgress = () => {
    return this.props.loading ? <CircularProgress /> : null
  }

  render() {

    return (
      <div>
        <div className="block">
          <MapExample />
          <FileChoiceList />
        </div>
        <FlatButton
          label="Demo"
          onClick={this.buttonClicked.bind(this)}
        />
        <TableOfPlaces />
      </div>
    );
  }
}

const mapStateToProps = ({ BackendReducer }) => {
  const { loading } = BackendReducer;
  return ({ loading });
};

export default connect(mapStateToProps, { callBackend })(App);
