import React from 'react';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import colors from '../../assets/styles/colors';
import styles from './UserCreate.style';

const SelectRole = ({
  classes, handleChange, users, role, touched, errors, placeholder
}) => (
  <React.Fragment>
    <InputLabel htmlFor="role">Ruoli - da inserire in tutti i tre tab</InputLabel>
    <Select
      id="role"
      name="role"
      multiple
      displayEmpty
      fullWidth
      className={classes.textField}
      value={role}
      onChange={handleChange}
      MenuProps={{
        className: classes.menu
      }}
      renderValue={selected => {
        if (selected.length === 0) {
          return <em style={{ color: colors.FORM_LABEL }}>{placeholder}</em>;
        }
        return (
          <div className={classes.chips}>
            {selected.map(value => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        );
      }}
      error={touched.role && Boolean(errors.role)}
    >
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {users.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </React.Fragment>
);

export default withStyles(styles)(SelectRole);
