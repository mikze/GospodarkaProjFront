import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView from '../components/MapView';
import TableOfPlaces from '../components/TableOfPlaces';
import ListOfTasks from '../components/ListOfTasks';
import FilesList from '../components/FilesList';
import FileUpload from '../components/FileUpload';
import { setTaskId, removeTask } from '../actions/actions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: emptyFile };
        console.log(this.state.selectedFile);
    }

    componentDidMount() {
        localStorage.setItem("user_details", "test@gmail.com|Jan|Nowak")
    }

    onFileUpload = (file) => {
        this.props.setTaskId(file, 'global');
    };

    removeTask = (taskId) => {
        this.props.removeTask(taskId);
        console.log(`removing ${taskId}`);
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
                        <FileUpload onFileUpload={file => this.onFileUpload(file)} />
                        <FilesList
                            files={this.props.files}
                            onItemClicked={selectedFile => this.onChooseFile(selectedFile)}
                        />
                    </div>
                    <ListOfTasks tasks={this.props.TaskId} removeTask={taskId => this.removeTask(taskId)} />
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

const mapStateAndTaskIdToProps = ({ FileResult, TaskId }) => {
    const files = FileResult.receivedJSON;
    return { files, TaskId };
};

const ConnectedHome = connect(mapStateAndTaskIdToProps, { setTaskId, removeTask })(Home);
export { ConnectedHome as Home };