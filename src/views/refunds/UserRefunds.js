import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TableCells from './UserRefunds.tableCells';
import rows from './UserRefunds.header';
import styles from './UserRefunds.style';
import getPagedRefunds from '../../api/userRefunds';
import DataTable from '../../components/dataTable/dataTable/DataTable';

class UserRefunds extends Component {
  state = {
    refunds: []
  };

  componentDidMount() {
    getPagedRefunds({
      skip: 0,
      take: 5
    }).then(res => {
      console.log(res);
      this.setState({ refunds: res });
    });
  }

  render() {
    const { classes } = this.props;
    const { refunds } = this.state;
    console.log(this.state);

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom className={classes.refundTitle}>
            Ultimi rimborsi
          </Typography>

          <DataTable rows={rows} data={refunds} toolbarTitle="Ultimi rimborsi">
            {refunds.map(request => (
              <TableCells isCheckable={false} item={request} key={refunds.id} />
            ))}
          </DataTable>
        </div>
      </React.Fragment>
    );
  }
}

UserRefunds.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserRefunds);
