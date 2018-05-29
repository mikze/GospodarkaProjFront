import React from 'react';
import '../style.css'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import CircularProgress from 'material-ui/CircularProgress';


const ListOfTasks = ({ tasks,classes,removeTask }) => {

  const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

  return (
    <div className='taskList'>

          {tasks ?  tasks.map(x =>
            
               <Chip
                  key={x.taskId}
                  onRequestDelete={() => removeTask(x.taskId)}
                  style={styles.chip}
                >
        {x.fileName}
      </Chip>
            
          ) : <CircularProgress size={80} thickness={5} />}

    </div>
  )
};

export default ListOfTasks;