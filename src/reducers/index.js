import { combineReducers } from 'redux';
import { FileResult } from './FileResult';
import { Dictionaries } from './Dictionaries';

const Reducers = combineReducers({
    FileResult,
    Dictionaries
})

export default Reducers