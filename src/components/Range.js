import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class Range extends Component {

    constructor(props)
    {
      super(props)
  
      this.state = {
          range1: 1,
          range2: Number.MAX_SAFE_INTEGER,
          error: null
      }
    }

    setRange1 = (obj, range) => 
    {
        if(range === '')
           { this.setState({range1: 1});}
        else
        {console.log(`range1 = ${range}`);
        this.setState({range1: Number(range)});}
    }

    setRange2 = (obj, range) => 
    {
        if(range === '')
           { this.setState({range2: Number.MAX_SAFE_INTEGER});}
        else
        {console.log(`range2 = ${range}`);
        this.setState({range2: Number(range)});}
    }
    
    validate = () =>
    {
        if(!isNaN(this.state.range1) && !isNaN(this.state.range2))
        {
            if(this.state.range1 > 0 && this.state.range2 > 0)
            {
                if(this.state.range1 <= this.state.range2)
                {   
                    return true;
                }
                else{
                        this.setState({error : "Range 1 cannot be bigger than Range 2!"})
                        return false;
                }
            }
            else{
                this.setState({error : "Range 1 and Range 2 have to be more than 0!"})
                return false;
        }
            
        }
        else{
            this.setState({error : "Is not a number!"})
            return false;
        }
    }

    submitRange = () =>
    {
       if(this.validate())
       console.log(`Range1 = ${parseInt(this.state.range1)} Range2 = ${parseInt(this.state.range2)}`);
       else
       console.log('Validation did not pass');
    }

    handleClose = () => {
        this.setState({error : null})
      };

  render()
  {

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />
    ]

  return (
    <div>
        <TextField
            style={{fontSize: 12,width: 50,marginRight: 5}}
            hintText="RANGE1"
            onChange = { (x,y) => this.setRange1(x,y)}
        />
        <TextField
            style={{fontSize: 12,width: 50}}
            hintText="RANGE2"
            onChange = {(x,y) => this.setRange2(x,y)}
        />
        <FlatButton label="Load" onClick = { this.submitRange } disabled={this.state.error}/>

        <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            onRequestClose={this.handleClose}
            open={this.state.error}
            >
            {this.state.error}
        </Dialog>
    </div>
     )
    }
};