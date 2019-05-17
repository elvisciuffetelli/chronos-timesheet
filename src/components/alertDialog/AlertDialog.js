import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './AlertDialog.style';

class AlertDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const {
      title, body, mainAction, handleMainAction
    } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Dialog
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          open={open}
          onClose={this.handleClose}
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{body}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleMainAction} color="primary" autoFocus>
              {mainAction}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  mainAction: PropTypes.string.isRequired,
  handleMainAction: PropTypes.func
};

AlertDialog.defaultProps = {
  handleMainAction: () => {}
};

export default withStyles(styles)(AlertDialog);
