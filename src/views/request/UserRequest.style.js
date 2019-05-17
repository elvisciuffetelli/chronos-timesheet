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
    marginTop: '12px'
  },
  menu: {
    width: 100
  },
  chip: {
    margin: theme.spacing.unit / 4,
    backgroundColor: 'yellow'
  },
  selectLabel: {
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0.54)',
    lineHeight: '1'
  }
});

export default styles;
