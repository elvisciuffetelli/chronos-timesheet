import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import styles from './UserRequest.style';

const requestTypeEnum = {
  0: 'Tipo richiesta 0',
  1: 'Tipo richiesta 1',
  2: 'Tipo richiesta 2'
};

const tableCells = ({
  isCheckable, item, isSelected, handleClick, classes
}) => (
  <React.Fragment>
    <TableRow
      hover
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={item.id}
      selected={isSelected}
    >
      <TableCell className={classes.tableCell} padding="checkbox">
        {isCheckable && (
          <Checkbox onClick={event => handleClick(event, item.id)} checked={isSelected} />
        )}
      </TableCell>
      <TableCell className={classes.tableCell} padding={isCheckable ? 'none' : 'default'}>
        {requestTypeEnum[item.type]}
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {
          <React.Fragment>
            {item.fromDay !== item.toDay ? (
              <p>
                Dal {item.fromDay} al {item.toDay}
              </p>
            ) : (
              <p>{item.fromDay}</p>
            )}
            {item.fromHour && item.toHour ? (
              <p>
                dalle ore {item.fromHour} alle ore {item.toHour}
              </p>
            ) : null}
          </React.Fragment>
        }
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.hideCellOnSmallSize}`} align="left">
        {item.reason}
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.hideCellOnSmallSize}`} align="left">
        {item.managementDate}
      </TableCell>
      <TableCell className={`${classes[item.requestState]} ${classes.tableCell}`} align="left">
        {item.requestState}
      </TableCell>
    </TableRow>
  </React.Fragment>
);

export default withStyles(styles)(tableCells);
