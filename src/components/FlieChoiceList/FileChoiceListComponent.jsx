import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';


const FileChoiceListComponent = props => {

  const Files = props.FileResult;

  return(
  <div>
  <Table onCellClick={e => {props.dispatch(Files[e])}}>
    <TableHeader>
      
      <TableRow>

        <TableHeaderColumn>File Name</TableHeaderColumn>

      </TableRow>
    </TableHeader>
    <TableBody>

      
      {Files.map(
        x => <TableRow>

        <TableHeaderColumn>{x.filename}</TableHeaderColumn>

      </TableRow>
      )}


    </TableBody>
  </Table>
  </div>
)};

export default FileChoiceListComponent;