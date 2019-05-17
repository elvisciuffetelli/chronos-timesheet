import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DataTableHeader from '../dataTableHeader/DataTableHeader';
import DataTableToolbar from '../dataTableToolbar/DataTableToolbar';
import styles from './DataTable.style';

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: '',
      selected: [],
      page: 0,
      rowsPerPage: 5,
    };

    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  handleRequestSort(event, property) {
    const orderBy = property;
    const order = 'desc';
    this.setState({ order, orderBy });
  }

  handleSelectAllClick(event) {
    if (event.target.checked) {
      const { data } = this.props;
      this.setState({ selected: data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  }

  handleClick(event, id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  isSelected(id) {
    const { selected } = this.state;
    return selected.indexOf(id) !== -1;
  }

  render() {
    const {
      classes, data, rows, isCheckable,
    } = this.props;
    const {
      order, orderBy, selected, rowsPerPage, page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <DataTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <DataTableHeader
              isCheckable={isCheckable}
              rows={rows}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data.map((item) => {
                const isSelected = this.isSelected(item.id);
                return (
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
                        <Checkbox
                          onClick={event => this.handleClick(event, item.id)}
                          checked={isSelected}
                        />
                      )}
                    </TableCell>

                    <TableCell component="th" scope="row" padding="none">
                      {item.colOne}
                    </TableCell>
                    <TableCell align="left">{item.colTwo}</TableCell>
                    <TableCell align="left">{item.colThree}</TableCell>
                    <TableCell align="left">{item.colFour}</TableCell>
                    <TableCell align="left">{item.colFive}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  isCheckable: PropTypes.bool,
};

DataTable.defaultProps = {
  isCheckable: false,
};

export default withStyles(styles)(DataTable);
