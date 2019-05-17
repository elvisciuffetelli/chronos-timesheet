import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { AuthenticationConsumer } from '@axa-fr/react-oidc-context';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import history from '../../../router/history';
import LinksList from '../linksList/LinksList';
import styles from './SidebarLayout.style';

class SidebarLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleLogout = logoutFn => () => {
    history.push('/');
    logoutFn();
  };

  render() {
    const { classes, theme, children } = this.props;
    const {
      state: { open }
    } = this;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Tooltip title="Home" placement="right">
                <img
                  src="http://gestionale-aesystech.it/img/logo-azienda.png"
                  alt="Logo"
                  className={classes.logo}
                />
              </Tooltip>
            </Link>
            <AuthenticationConsumer>
              {props => (
                <div className={classes.actionButton}>
                  {props.oidcUser || !props.isEnabled ? (
                    <Button color="secondary" onClick={this.handleLogout(props.logout)}>
                      logout
                    </Button>
                  ) : (
                    <Button color="primary" onClick={props.login}>
                      login
                    </Button>
                  )}
                </div>
              )}
            </AuthenticationConsumer>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <LinksList />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

SidebarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles, { withTheme: true })(SidebarLayout);
