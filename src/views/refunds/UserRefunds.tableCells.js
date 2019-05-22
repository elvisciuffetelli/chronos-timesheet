import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import styles from './UserRefunds.style';

const refundTypeEnum = {
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
      <TableCell padding="checkbox">
        {isCheckable && (
          <Checkbox onClick={event => handleClick(event, item.id)} checked={isSelected} />
        )}
      </TableCell>
      <TableCell padding={isCheckable ? 'none' : 'default'}>{refundTypeEnum[item.type]}</TableCell>
      <TableCell align="left">
        {
          <React.Fragment>
            {item.fromDate !== item.toDate ? (
              <p>
                Dal {item.fromDate} al {item.toDate}
              </p>
            ) : (
              <p>{item.fromDate}</p>
            )}
          </React.Fragment>
        }
      </TableCell>
      <TableCell align="left">{item.type}</TableCell>
      <TableCell align="left">{item.cost}</TableCell>
      <TableCell className={classes[item.refundState]} align="left">
        {item.refundState}
      </TableCell>
    </TableRow>
  </React.Fragment>
);

export default withStyles(styles)(tableCells);
