import React from 'react';
import Typography from '@material-ui/core/Typography';
import Calendar from '../../components/calendar/Calendar';

const Timesheet = () => (
  <React.Fragment>
    <Typography variant="h4" gutterBottom>
      Timesheet
    </Typography>
    <Calendar />
  </React.Fragment>
);

export default Timesheet;
