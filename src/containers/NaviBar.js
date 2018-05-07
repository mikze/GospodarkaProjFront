import NaviBarComponent from '../components/NaviBarComponent'
import { connect } from 'react-redux'
import {setRecJSON} from '../actions/actions.js'

const UploadFile = dispatch => ({
    dispatch: JSON => {
      dispatch(setRecJSON(JSON))
    }
  })

const NaviBar = connect(null, UploadFile)(NaviBarComponent);


export default NaviBar;
