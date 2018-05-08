import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView from '../components/MapView';
import TableOfPlaces from '../components/TableOfPlaces';
import FilesList from '../components/FilesList';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: emptyFile };
        console.log(this.state.selectedFile);
    }

    onChooseFile = (selectedFile) => {
        this.setState({ selectedFile });
    };

    render() {
        return (
            <div>
                <div className="block">
                    <MapView file={this.state.selectedFile} />
                    <FilesList
                        files={this.props.files}
                        onItemClicked={selectedFile => this.onChooseFile(selectedFile)}
                    />
                </div>
                <TableOfPlaces
                    file={this.state.selectedFile}
                />
            </div>
        );
    }
}

const emptyFile = {
    filename: "No selected file",
    cities: [],
    countries: []
};

const mapStateToProps = ({ FileResult }) => {
    const files = FileResult.receivedJSON;
    return { files };
};

const ConnectedHome = connect(mapStateToProps, {})(Home);
export { ConnectedHome as Home };