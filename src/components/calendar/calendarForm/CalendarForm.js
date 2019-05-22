import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import dateFns from 'date-fns';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styles from './CalendarForm.style';
import createEvent from '../../../utils/fullCalendarHelper';
// import Button from '@material-ui/core/Button';

// function CalendarForm({
//   classes,
//   open,
//   onClose,
//   selectedDate,
//   commitments = [
//     { name: 'Soso' },
//     { name: 'Coco' },
//     { name: 'Roro' },
//     { name: 'Reply' },
//     { name: 'Accenture' },
//     { name: 'Avanade' }
//   ]
// }) {
//   const [isCommitmentModalOpen, setIsCommitmentModalOpen] = useState(false);
//   const [commitmentValue, setcommitmentValue] = useState();
//   const [taskHours, setTaskHours] = useState({});
//   const [taskNotes, setTaskNotes] = useState({});

//   const [currentTask, setCurrentTask] = useState(commitments[0].name);

//   const setCommitmentsSelectModal = bool => () => {
//     setIsCommitmentModalOpen(bool);
//   };

//   const handleHoursForTask = evt => {
//     console.log(taskHours);
//     setTaskHours({
//       ...taskHours,
//       [currentTask]: evt.target.value
//     });
//   };

//   const handleNotesForTask = evt => {
//     console.log(taskNotes);
//     setTaskNotes({
//       ...taskNotes,
//       [currentTask]: evt.target.value
//     });
//   };

//   const handleCommitmentChange = event => {
//     setcommitmentValue(event.target.value);
//   };

//   const changeTask = (event, value) => {
//     setCurrentTask(value);
//   };

//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={onClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           Timesheet del {dateFns.format(selectedDate, 'D/MM/YYYY')}
//         </DialogTitle>
//         <DialogContent>
//           <AppBar position="static" color="default">
//             <Tabs
//               value={currentTask}
//               onChange={changeTask}
//               indicatorColor="primary"
//               textColor="primary"
//               variant="scrollable"
//               scrollButtons="auto"
//             >
//               {commitments.map((c, i) => (
//                 <Tab value={c.name} label={c.name} key={c.name} />
//               ))}
//             </Tabs>
//           </AppBar>
//           <Typography component="div" className={classes.container}>
//             <TextField
//               value={taskHours[currentTask] ? taskHours[currentTask] : '00:00'}
//               onChange={handleHoursForTask}
//               id="time"
//               label="Ore lavorate"
//               type="time"
//               className={classes.textField}
//               InputLabelProps={{
//                 shrink: true
//               }}
//               inputProps={{
//                 step: 1800 // 5 min
//               }}
//             />
//             <TextField
//               value={taskNotes[currentTask] ? taskNotes[currentTask] : ''}
//               onChange={handleNotesForTask}
//               rows={5}
//               multiline
//               label="Note"
//               type="text"
//               className={classes.textField}
//             />
//           </Typography>

//           {/* <FormControl className={classes.formControl}>
//             <InputLabel htmlFor="demo-controlled-open-select">Commessa</InputLabel>
//             <Select
//               open={isCommitmentModalOpen}
//               onClose={setCommitmentsSelectModal(false)}
//               onOpen={setCommitmentsSelectModal(true)}
//               value={commitmentValue}
//               onChange={handleCommitmentChange}
//               inputProps={{
//                 name: 'commitments',
//                 id: 'commitments-controlled-open-select'
//               }}
//             >
//               <MenuItem value="">
//                 <em>Nessuna</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl> */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={onClose} color="primary">
//             Annulla
//           </Button>
//           <Button onClick={onClose} color="primary" autoFocus>
//             Salva
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

function CalendarForm({
  classes,
  open,
  onClose,
  selectedDate,
  addItemsToCalendar,
  commitments = [
    { id: 'asdjkasid', name: 'Reply' },
    { id: 'asldò', name: 'Accenture' },
    { id: 'aòsc', name: 'Avanade' }
  ]
}) {
  const [hours, setHours] = useState('');
  const [notes, setNotes] = useState('');
  const [isCommitmentModalOpen, setIsCommitmentModalOpen] = useState(false);
  const [commitmentValue, setcommitmentValue] = useState('');

  const handleCommitmentChange = event => {
    setcommitmentValue(event.target.value);
  };

  const handleHoursForTask = evt => {
    setHours(evt.target.value);
  };

  const handleNotesForTask = evt => {
    setNotes(evt.target.value);
  };

  const onAdd = () => {
    addItemsToCalendar(
      createEvent({
        title: commitmentValue,
        start: selectedDate,
        allDay: false
      })
    );
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Timesheet del {dateFns.format(selectedDate, 'D/MM/YYYY')}
        </DialogTitle>
        <DialogContent className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Commessa</InputLabel>
            <Select
              open={isCommitmentModalOpen}
              onClose={() => setIsCommitmentModalOpen(false)}
              onOpen={() => setIsCommitmentModalOpen(true)}
              value={commitmentValue}
              onChange={handleCommitmentChange}
              inputProps={{
                name: 'commitments',
                id: 'commitments-controlled-open-select'
              }}
            >
              <MenuItem value="">
                <em>Nessuna</em>
              </MenuItem>
              {commitments.map(c => (
                <MenuItem key={c.name} value={c.id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography component="div">
            <TextField
              value={hours || '00:00'}
              onChange={handleHoursForTask}
              id="time"
              label="Ore lavorate"
              type="time"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 1800 // 5 min
              }}
            />
            <TextField
              value={notes || ''}
              onChange={handleNotesForTask}
              rows={5}
              multiline
              label="Note"
              type="text"
              className={classes.textField}
            />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Annulla
          </Button>
          <Button onClick={onAdd} color="primary" autoFocus>
            Salva
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(CalendarForm);
