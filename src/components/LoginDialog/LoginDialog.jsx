import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class LoginDialog extends React.Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Login with Google"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Login with Facebook"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Choose Login Option"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          LOREM IPSUM SADSADSADSADASDSADSADSA
        </Dialog>
      </div>
    );
  }
}