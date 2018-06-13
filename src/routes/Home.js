import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView from '../components/MapView';
import ListOfTasks from '../components/ListOfTasks';
import FilesList from '../components/FilesList';
import FileUpload from '../components/FileUpload';
import { setTaskId, removeTask, getResolvedTask, setRange, fetchTaskDictionaries } from '../actions/actions';
import { ClipLoader } from 'react-spinners';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: emptyFile,
            range1: 1,
            range2: 3,
            selectedOption: 'Global',
            isPrivate: false
        };
        console.log(this.state.selectedFile);
    }

    componentDidMount() {
        localStorage.setItem("user_details", "test@gmail.com|Jan|Nowak")
        this.props.fetchTaskDictionaries();
    }

    onFileUpload = (file) => {
        if (this.state.selectedOption === 'Global') {
            this.props.setTaskId(file, 'global', null);
        } else {
            this.props.setTaskId(file, this.state.isPrivate ? 'private' : 'public', this.state.selectedOption);
        }
    };

    removeTask = (taskId) => {
        this.props.removeTask(taskId);
        console.log(`removing ${taskId}`);
    };

    onChooseFile = (selectedFile) => {
        this.setState({ selectedFile });
    };

    getResolvedTask = (taskId) => {
        this.props.getResolvedTask(taskId);
    };

    setRange = (r1, r2, textName) => {
        console.log('SubmitingRANGE HOME ' + r1 + ' ' + r2);

        this.setState({ range1: r1 });
        this.setState({ range2: r2 });
    };

    handleDictionaryChange = (dictionary) => {
        console.log(dictionary);
        this.setState({
            selectedOption: dictionary.value,
            isPrivate: this.contains(this.props.dictionaries.privateDictionaries, dictionary.value)
        });
        console.log(this.state.selectedOption);
    };

    contains = (array, dictionaryName) => {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === dictionaryName) {
                return true;
            }
        }
        return false;
    }

    render() {
        console.log(this.props.dictionaries);
        return this.props.dictionaries !== null ?
            <div>
                <div className="block">
                    <MapView file={this.state.selectedFile} range1={this.state.range1} range2={this.state.range2} />
                    <div>
                        <FileUpload onFileUpload={file => this.onFileUpload(file)} />
                        <Dropdown options={[
                            {value: "Global", label: "Global"},
                            {
                                type: 'group',
                                name: 'Publiczne',
                                items: this.props.dictionaries.publicDictionaries.map(function (value) {
                                    return {value: value, label: value}
                                })
                            }, {
                                type: 'group',
                                name: 'Prywatne',
                                items: this.props.dictionaries.privateDictionaries.map(function (value) {
                                    return {value: value, label: value}
                                })
                            }]} value={"Global"} onChange={this.handleDictionaryChange} placeholder="Select dictionary"/>
                        <FilesList
                            sentencesCount={this.state.selectedFile.sentencesCount}
                            files={this.props.files}
                            setRange={(r1, r2, textName) => this.setRange(r1, r2, textName)}
                            onItemClicked={selectedFile => this.onChooseFile(selectedFile)}
                        />
                    </div>
                    <ListOfTasks tasks={this.props.TaskId} removeTask={taskId => this.removeTask(taskId)} getResolvedTask={taskId => this.getResolvedTask(taskId)} />
                </div>
                
            </div>
            :
            <div className="loading">
                <ClipLoader
                    size={300}
                    color={'#028dd1'}
                    loading={true}
                />
            </div>;

    }
}

const emptyFile = {
    filename: "No selected file",
    cities: [],
    countries: []
};

const mapStateToProps = ({ FileResult, TaskId, Dictionaries }) => {
    const files = FileResult.receivedJSON;
    const dictionaries = Dictionaries.taskDictionaries;
    console.log('mapState', dictionaries);
    return { files, TaskId, dictionaries };
};

const ConnectedHome = connect(mapStateToProps, { setTaskId, removeTask, getResolvedTask, setRange, fetchTaskDictionaries })(Home);

export { ConnectedHome as Home };