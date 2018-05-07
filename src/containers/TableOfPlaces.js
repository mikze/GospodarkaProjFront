import TableOfPlacesComponent from '../components/TableOfPlacesComponent'
import { connect } from 'react-redux'


const TableOfPlaces = connect(state => ({File : state.SelectedFile}))(TableOfPlacesComponent);


export default TableOfPlaces;
