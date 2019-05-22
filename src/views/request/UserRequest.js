import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TableCells from './UserRequests.tableCells';
import { rowsSmallSize, rowsLargeSize } from './UserRequest.header';
import styles from './UserRequest.style';
import getPagedRequests from '../../api/userRequest';
import DataTable from '../../components/dataTable/dataTable/DataTable';
import debounce from '../../utils/debounce';

class UserRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      headerRows: rowsLargeSize,
      windowWidth: window.innerWidth || 960
    };

    window.addEventListener('resize', debounce(this.handleResize, 100));
  }

  componentDidMount() {
    this.handleResize();
    getPagedRequests({
      skip: 0,
      take: 10
    }).then(res => {
      console.log(res);
      this.setState({ requests: res });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { windowWidth } = this.state;
    this.setState({
      windowWidth: window.innerWidth
    });
    console.log(windowWidth);
    if (windowWidth <= 959) {
      this.setState({ headerRows: rowsSmallSize });
    } else if (windowWidth >= 960) {
      this.setState({ headerRows: rowsLargeSize });
    }
  };

  render() {
    const { classes } = this.props;
    const { requests, headerRows } = this.state;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Ultime richieste effettuate
          </Typography>

          <DataTable rows={headerRows} data={requests} toolbarTitle="Ultime richieste">
            {requests.map(request => (
              <TableCells isCheckable={false} item={request} key={request.id} />
            ))}
          </DataTable>
        </div>
      </React.Fragment>
    );
  }
}

UserRequest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserRequest);
