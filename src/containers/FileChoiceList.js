import FileChoiceListComponent from '../components/FlieChoiceList/FileChoiceListComponent'
import { connect } from 'react-redux'
import {setSelectedFile} from '../actions/actions.js'

const SetFile = dispatch => ({
    dispatch: file => {
      dispatch(setSelectedFile(file))
    }
  })

const FileChoiceList = connect(state => ({FileResult : state.FileResult}), SetFile)(FileChoiceListComponent);


export default FileChoiceList;
