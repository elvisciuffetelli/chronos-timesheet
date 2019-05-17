import React from 'react';
import PropTypes from 'prop-types';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import CustomTableCell from './DataTableHeader.style';

class DataTableHeader extends React.Component {
  constructor(props) {
    super(props);

    this.createSortHandler = this.createSortHandler.bind(this);
  }

  createSortHandler(property) {
    return (event) => {
      const { onRequestSort } = this.props;
      onRequestSort(event, property);
    };
  }

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      rows,
      isCheckable,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <CustomTableCell padding="checkbox">
            {isCheckable && (
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            )}
          </CustomTableCell>
          {rows.map(row => (
            <CustomTableCell
              key={row.id}
              align={row.numeric ? 'right' : 'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <Tooltip
                title="Sort"
                placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </CustomTableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

DataTableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired,
  isCheckable: PropTypes.bool,
};

DataTableHeader.defaultProps = {
  isCheckable: false,
};

export default DataTableHeader;
