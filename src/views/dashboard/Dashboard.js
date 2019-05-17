import React, { Component } from 'react';
import withUnmounted from '@ishawnwang/withunmounted';
import API from '../../backendApi/api/Api';
import DataTable from '../../components/dataTable/dataTable/DataTable';
import rows from './Dashboard.headerMock';
import urls from '../../backendApi/url.constants';
import UserModel from '../../backendApi/models/users/users.model';

class Dashboard extends Component {
  hasUnmounted = false;

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: null,
    };
  }

  componentDidMount() {
    const getUsersApi = new API({ url: urls.USERS });
    getUsersApi.createEntity({ name: 'users' });
    getUsersApi.endpoints.users
      .getAll()
      .then(response => response.map(user => UserModel.fromBackend(user)))
      .then((data) => {
        if (this.hasUnmounted) {
          return;
        }
        this.setState({
          users: data,
        });
      })
      .catch((error) => {
        console.log(`error! ${error}`);
        this.setState({ error });
      });
  }

  render() {
    const { users, error } = this.state;

    return (
      <React.Fragment>
        {error ? <p style={{ color: 'red' }}>{error.message}</p> : null}
        {users.length !== 0 && <DataTable isCheckable rows={rows} data={users} />}
      </React.Fragment>
    );
  }
}

export default withUnmounted(Dashboard);
