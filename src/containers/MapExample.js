import MapExampleComponent from '../components/MapExample/MapExampleComponent'
import { connect } from 'react-redux'


const MapExample = connect(state => ({File : state.SelectedFile}))(MapExampleComponent);


export default MapExample;
