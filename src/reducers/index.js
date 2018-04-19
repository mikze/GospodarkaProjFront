import { combineReducers } from 'redux';
import { SelectedFile } from './SelectedFile';
import { FileResult } from './FileResult';
import { BackendReducer } from './BackendReducer';

const Reducers = combineReducers({
    SelectedFile,
    FileResult,
    BackendReducer
})

export default Reducers