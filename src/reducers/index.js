import { combineReducers } from 'redux'
import {SelectedFile} from './SelectedFile'
import { FileResult } from './FileResult'

const Reducers = combineReducers({
    SelectedFile,
    FileResult
})

export default Reducers