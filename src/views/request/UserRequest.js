import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import styles from './UserRequest.style';
import getPagedRequests from '../../api/userRequest';
import DataTable from '../../components/dataTable/dataTable/DataTable';

const rowHeaders = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: '#'
  },
  {
    id: 'fromDay',
    numeric: false,
    disablePadding: false,
    label: 'Da'
  },
  {
    id: 'toDay',
    numeric: false,
    disablePadding: false,
    label: 'A'
  }
];

const requestTypeEnum = {
  0: 'Creata',
  1: 'Accettata',
  2: 'Rifiutata'
};

class UserRequest extends Component {
  state = {
    requests: []
  };

  componentDidMount() {
    getPagedRequests({
      skip: 0,
      take: 10,
      requestState: 2
    }).then(res => {
      console.log(res);
      this.setState({ requests: res.requests });
    });
  }

  render() {
    const { classes } = this.props;
    const { requests } = this.state;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              W i datatable
            </Typography>
          </Paper>

          <DataTable rows={rowHeaders} data={requests} />
        </div>
      </React.Fragment>
    );
  }
}

UserRequest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserRequest);
