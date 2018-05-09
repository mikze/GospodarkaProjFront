import NaviBarComponent from '../components/NaviBarComponent'
import { connect } from 'react-redux'
import {setReceivedJSON} from '../actions/actions.js'

const UploadFile = dispatch => ({
    dispatch: JSON => {
      dispatch(setReceivedJSON(JSON))
    }
  })

const NaviBar = connect(null, UploadFile)(NaviBarComponent);


export default NaviBar;
