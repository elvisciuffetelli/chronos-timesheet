import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import NameIcon from '@material-ui/icons/SupervisorAccount';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import DateRange from '@material-ui/icons/DateRange';
import withStyles from '@material-ui/core/styles/withStyles';
import SelectRoleTabs from './UserCreate.selectTabs';
import SelectRole from './UserCreate.select';
import { adminRoles, userRoles, superUserRoles } from './UserCreate.roles';
import styles from './UserCreate.style';

const Form = props => {
  const {
    values: {
      firstName,
      lastName,
      fiscalCode,
      email,
      password,
      confirmPassword,
      adminOptions,
      userOptions,
      superUserOptions,
      dateOfBirth
    },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="firstName"
        name="firstName"
        autoComplete="on"
        autoFocus
        helperText={touched.firstName ? errors.firstName : ''}
        error={touched.firstName && Boolean(errors.firstName)}
        label="Nome"
        value={firstName}
        onChange={change.bind(null, 'firstName')}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NameIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        id="lastName"
        name="lastName"
        autoComplete="on"
        helperText={touched.lastName ? errors.lastName : ''}
        error={touched.lastName && Boolean(errors.lastName)}
        label="Cognome"
        value={lastName}
        onChange={change.bind(null, 'lastName')}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NameIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        id="fiscalCode"
        name="fiscalCode"
        autoComplete="on"
        helperText={touched.fiscalCode ? errors.fiscalCode : ''}
        error={touched.fiscalCode && Boolean(errors.fiscalCode)}
        label="Codice Fiscale"
        value={fiscalCode}
        onChange={change.bind(null, 'fiscalCode')}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NameIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        id="email"
        name="email"
        autoComplete="on"
        helperText={touched.email ? errors.email : ''}
        error={touched.email && Boolean(errors.email)}
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={change.bind(null, 'email')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        id="dateOfBirth"
        label="Data di nascita"
        type="date"
        autoComplete="on"
        helperText={touched.dateOfBirth ? errors.dateOfBirth : ''}
        error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
        fullWidth
        margin="normal"
        value={dateOfBirth}
        onChange={change.bind(null, 'dateOfBirth')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRange />
            </InputAdornment>
          )
        }}
      />
      <TextField
        id="password"
        name="password"
        autoComplete="new-password"
        helperText={touched.password ? errors.password : ''}
        error={touched.password && Boolean(errors.password)}
        label="Password"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={change.bind(null, 'password')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        autoComplete="new-password"
        helperText={touched.confirmPassword ? errors.confirmPassword : ''}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        label="Conferma Password"
        fullWidth
        margin="normal"
        type="password"
        value={confirmPassword}
        onChange={change.bind(null, 'confirmPassword')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
      />
      <SelectRoleTabs
        id="roleTabs"
        selectAdmin={
          <SelectRole
            handleChange={handleChange('adminOptions')}
            users={adminRoles}
            role={adminOptions}
            touched={touched}
            errors={errors}
            placeholder="Ruoli Admin"
          />
        }
        selectUser={
          <SelectRole
            handleChange={handleChange('userOptions')}
            users={userRoles}
            role={userOptions}
            touched={touched}
            errors={errors}
            placeholder="Ruoli User"
          />
        }
        selectSuperUser={
          <SelectRole
            handleChange={handleChange('superUserOptions')}
            users={superUserRoles}
            role={superUserOptions}
            touched={touched}
            errors={errors}
            placeholder="Ruoli Super User"
          />
        }
      />
      <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
        Crea Utente
      </Button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(Form);
