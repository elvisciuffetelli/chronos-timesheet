import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DataTableHeader from '../dataTableHeader/DataTableHeader';
import DataTableToolbar from '../dataTableToolbar/DataTableToolbar';
import styles from './DataTable.style';

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: '',
      selected: []
    };

    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(id) {
    const { selected } = this.state;
    return selected.indexOf(id) !== -1;
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
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  }

  handleSelectAllClick(event) {
    if (event.target.checked) {
      const { data } = this.props;
      this.setState({ selected: data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  }

  handleRequestSort(event, property) {
    const orderBy = property;
    const order = 'desc';
    this.setState({ order, orderBy });
  }

  render() {
    const {
      classes,
      data,
      rows,
      isCheckable,
      page,
      rowsPerPage,
      toolbarTitle,
      children
    } = this.props;
    const { order, orderBy, selected } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const childrenTableCellsWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { handleClick: this.handleClick })
    );

    return (
      <Paper className={classes.root}>
        <DataTableToolbar numSelected={selected.length} toolbarTitle={toolbarTitle} />
        <div className={classes.tableWrapper}>
          <Grid item xs={12}>
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
                {childrenTableCellsWithProps}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Grid>
        </div>
      </Paper>
    );
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  isCheckable: PropTypes.bool
};

DataTable.defaultProps = {
  isCheckable: false
};

export default withStyles(styles)(DataTable);
