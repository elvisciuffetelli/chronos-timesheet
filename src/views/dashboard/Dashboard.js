import React from 'react';
import UserRequest from '../request/UserRequest';
import UserRefunds from '../refunds/UserRefunds';

const Dashboard = () => (
  <React.Fragment>
    <UserRequest />
    <UserRefunds />
  </React.Fragment>
);

export default Dashboard;
