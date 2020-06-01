import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatTextBoxComonent extends React.Component {
  
  render() {

    const { classes } = this.props;
    return(
      <div className={classes.chatTextBoxContainer}>
        hello from chat text box
      </div>
    )
  }
}

export default withStyles(styles)(ChatTextBoxComonent);