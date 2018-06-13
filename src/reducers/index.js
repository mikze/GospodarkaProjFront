import { combineReducers } from 'redux';
import { FileResult } from './FileResult';
import { Dictionaries } from './Dictionaries';
import { TaskId } from './TaskId';
import { Loading } from './Loading';

const Reducers = combineReducers({
    FileResult,
    Dictionaries,
    TaskId,
    Loading
})

export default Reducers