import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { parse } from 'date-fns';
import Form from './UserCreate.form';
import history from '../../router/history';
import userSchema from './UserCreate.validation.schema';
import createUser from '../../api/createUser';
import styles from './UserCreate.style';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitValues = ({
    email,
    firstName,
    lastName,
    fiscalCode,
    adminOptions,
    userOptions,
    superUserOptions,
    dateOfBirth,
    password
  }) => {
    const rolesToConcat = [];
    const rolesArr = rolesToConcat.concat(adminOptions, userOptions, superUserOptions);
    const role = rolesArr.join();
    const createEmployeeObj = {
      email,
      firstName,
      lastName,
      fiscalCode,
      role,
      dateOfBirth: parse(dateOfBirth),
      password
    };
    createUser({ ...createEmployeeObj })
      .then(data => {
        if (data && data.success === true) {
          console.log(data);
          history.push({
            pathname: 'user-posted',
            state: {
              title: 'Utente creato',
              body: 'Utente creato con successo nel database',
              mainAction: 'Ok'
            }
          });
        }
      })
      .catch(error => {
        console.log(`error! ${error}`);
      });
  };

  render() {
    const { classes } = this.props;
    const values = {
      firstName: '',
      lastName: '',
      email: '',
      fiscalCode: '',
      adminOptions: [],
      userOptions: [],
      superUserOptions: [],
      dateOfBirth: '',
      confirmPassword: '',
      password: ''
    };
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Crea Utente
            </Typography>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={userSchema}
              onSubmit={this.submitValues}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

UserCreate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserCreate);
