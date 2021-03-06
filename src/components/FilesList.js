import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import RangeComponent from './RangeComponent'

const FilesList = ({ files, onItemClicked, setRange, sentencesCount }) => {

  return (
    <div>
      <Table onCellClick={index => { onItemClicked(files[index]) }}>
        <TableBody>
          {(files !== 'nothing' && files !== 'loading') ? files.map(file =>
            <TableRow>

              <TableHeaderColumn style={{paddingLeft: 4}}>
                <div>
                  <p style={{fontWeight: "bold", marginBottom: 0, fontSize: 14}}>
                    {file.filename}
                  </p>
                  <RangeComponent sentencesCount={sentencesCount} textName = {file.filename} setRange = {(r1,r2,textName) => setRange(r1,r2,textName)}/>
                </div>
              </TableHeaderColumn>
            </TableRow>
          ) : files !== 'nothing' ? <CircularProgress size={80} thickness={5} /> : null}
          
        </TableBody>
      </Table>
    </div>
  )
};

export default FilesList;