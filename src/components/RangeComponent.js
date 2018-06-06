import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Slider from 'material-ui/Slider'

export default class RangeComponent extends Component {

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
       {
           console.log('SubmitingRANGE');
           this.props.setRange(this.state.range1, this.state.range2 , this.props.textName);
        }
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

    const sentenceCount = this.props.sentencesCount;

  return (
    <div>
        <Slider
        min={1}
        max={sentenceCount}
        step={1}
        value={this.state.range1}
            onChange = { (x,y) => this.setRange1(x,y)}
        />
        <Slider
        min={1}
        max={sentenceCount}
        step={1}
        value={this.state.range2}
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