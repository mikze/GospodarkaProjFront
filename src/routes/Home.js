import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView from '../components/MapView';
import TableOfPlaces from '../components/TableOfPlaces';
import FilesList from '../components/FilesList';
import FileUpload from '../components/FileUpload';
import { uploadFile } from '../actions/actions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: emptyFile };
        console.log(this.state.selectedFile);
    }

    onFileUpload = (file) => {
        this.props.uploadFile(file);
    };

    onChooseFile = (selectedFile) => {
        this.setState({ selectedFile });
    };

    render() {
        return (
            <div>
                <div className="block">
                    <MapView file={this.state.selectedFile} />
                    <div>
                        <FileUpload onFileUpload={file => this.onFileUpload(file)} type="file" accept='.zip' />
                        <FilesList
                            files={this.props.files}
                            onItemClicked={selectedFile => this.onChooseFile(selectedFile)}
                        />
                    </div>
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

const ConnectedHome = connect(mapStateToProps, { uploadFile })(Home);
export { ConnectedHome as Home };