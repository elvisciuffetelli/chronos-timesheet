import colors from '../../assets/styles/colors';

const styles = theme => ({
  Creata: {
    color: colors.WARNING_COLOR
  },
  Approvata: {
    color: colors.SUCCESS_COLOR
  },
  Respinta: {
    color: colors.ERROR_COLOR
  },
  hideCellOnSmallSize: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
});

export default styles;
