import React, { Component } from 'react';
import axios from 'axios';
import MapView from '../components/MapView';
import TableOfPlaces from '../components/TableOfPlaces';
import FilesList from '../components/FilesList';
import FileUpload from '../components/FileUpload';
import { DemoFile } from '../assets/demoFile';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: emptyFile, files: DemoFile };
    }

    updateList = (data) => {
        this.setState({ files: data });
    };

    onChooseFile = (selectedFile) => {
        this.setState({ selectedFile });
    };

    uploadFile = (file) => {
        console.log(file);
        const formData = new FormData();
        formData.append('file', file)
        axios({
            method: 'POST',
            url: `http://kacperkluka.me/global/file`,
            data: formData
        }).then(response => {
            console.log(response);
            this.updateList(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return (
            <div>
                <div className="block">
                    <MapView file={this.state.selectedFile} />
                    <div>
                        <FileUpload onFileUpload={file => this.uploadFile(file)} type="file" accept='.zip' />
                        <FilesList
                            files={this.state.files}
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

export { Home };