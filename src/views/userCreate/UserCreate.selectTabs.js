import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styles from './UserCreate.style';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class SelectRoleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes, selectAdmin, selectUser, selectSuperUser
    } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Tabs
            className={classes.tabsRoot}
            value={value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="RUOLI ADMIN" />
            <Tab label="RUOLI USER" />
            <Tab label="RUOLI SUPERUSER" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{selectAdmin}</TabContainer>}
        {value === 1 && <TabContainer>{selectUser}</TabContainer>}
        {value === 2 && <TabContainer>{selectSuperUser}</TabContainer>}
      </div>
    );
  }
}

SelectRoleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectRoleTabs);
