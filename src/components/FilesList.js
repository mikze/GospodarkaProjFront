import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';


const FilesList = ({ files, onItemClicked }) => {

  return (
    <div>
      <Table onCellClick={index => { onItemClicked(files[index]) }}>
        <TableBody>
          {files.map(file =>
            <TableRow>
              <TableHeaderColumn>{file.filename}</TableHeaderColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
};

export default FilesList;