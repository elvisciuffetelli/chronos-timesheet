import colors from '../../assets/styles/colors';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  textField: {
    width: '100%',
    marginTop: '10px'
  },
  menu: {
    width: 100
  },
  chip: {
    margin: theme.spacing.unit / 4,
    backgroundColor: colors.CHIP
  },
  selectLabel: {
    fontSize: '12px',
    color: colors.FORM_LABEL,
    lineHeight: '1'
  },
  tabsRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

export default styles;
