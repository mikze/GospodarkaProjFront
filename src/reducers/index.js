import { combineReducers } from 'redux';
import { FileResult } from './FileResult';
import { Dictionaries } from './Dictionaries';
import { TaskId } from './TaskId';

const Reducers = combineReducers({
    FileResult,
    Dictionaries,
    TaskId
})

export default Reducers