import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import customColors from '../../../assets/styles/colors';

const CustomTableCell = withStyles(() => ({
  head: {
    backgroundColor: customColors.COLOR_5,
    color: customColors.COLOR_3,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default CustomTableCell;
