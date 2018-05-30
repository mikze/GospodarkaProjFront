import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import Range from './Range'


const FilesList = ({ files, onItemClicked }) => {

  return (
    <div>
      <Table onCellClick={index => { onItemClicked(files[index]) }}>
        <TableBody>
          {(files !== 'nothing' && files !== 'loading') ? files.map(file =>
            <TableRow>
              <TableHeaderColumn> <div className='block'> {file.filename} <Range/> </div> </TableHeaderColumn>
            </TableRow>
          ) : files !== 'nothing' ? <CircularProgress size={80} thickness={5} /> : null}
          
        </TableBody>
      </Table>
    </div>
  )
};

export default FilesList;