import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import '../../style.css'


const TableOfPlacesComponent = props => {

  const {filename,cities,countries } = props.File;

  console.log('sadsadsadasd', File);
  return(
  <div className = 'bigSize'>
   File Name: {filename}
   <br/>
   Cites: {cities.map( x => `${x.name}, `)}
   <br/>
   Countries: {countries.map( x => `${x.name}, `)}
   <br/>

  </div>
)};

export default TableOfPlacesComponent;