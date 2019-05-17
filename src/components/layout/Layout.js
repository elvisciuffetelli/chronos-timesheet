import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SidebarLayout from '../customSidebar/sidebarLayout/SidebarLayout';
import styles from './Layout.style';

const Layout = ({ children, classes }) => (
  <div>
    <SidebarLayout>
      <div className={classes.inner}>{children}</div>
    </SidebarLayout>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
