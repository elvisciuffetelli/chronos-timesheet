import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../index.scss';
import CalendarForm from './calendarForm/CalendarForm';
import createEvent from '../../utils/fullCalendarHelper';

class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //     calendarEvents: [
  //       {
  //         title: 'Event1',
  //         start: '2019-04-28',
  //         allDay: true,
  //         color: 'yellow', // an option!
  //         textColor: 'black' // an option!
  //       }
  //     ]
  //   };

  //   this.handleEventClicked = this.handleEventClicked.bind(this);
  //   this.handleDateClicked = this.handleDateClicked.bind(this);
  // }

  state = {
    isOnCalendarForm: false,
    selectedDate: null,
    calendarEvents: [
      {
        title: 'Event1',
        start: '2019-05-18',
        allDay: true,
        color: 'yellow', // an option!
        textColor: 'black' // an option!
      }
    ]
  };

  addItemsToCalendar = (calendarEvent = createEvent()) => {
    this.setState(prevState => ({
      calendarEvents: prevState.calendarEvents.concat(calendarEvent)
    }));
  };

  handleEventClicked = evt => {
    console.log(evt);
    // alert(`Hai cliccato su ${evt.event.title}`);
  };

  handleDateClicked = evt => {
    const { calendarEvents } = this.state;
    console.log(evt);

    this.setState({
      isOnCalendarForm: true,
      selectedDate: evt.date
    });
    // if (window.confirm(`Would you like to add an event to ${date.dateStr} ?`)) {
    //   console.log(date);
    //   this.setState({
    //     // add new event data
    //     calendarEvents: calendarEvents.concat({
    //       // creates a new array
    //       title: 'Event added',
    //       start: date.date,
    //       allDay: date.allDay,
    //     }),
    //   });
    // }
  };

  handleCloseCalendarForm = () => {
    this.setState({
      isOnCalendarForm: false
    });
  };

  handleDateBackgroundInit = evt => {
    console.log(evt);
  };

  handleDateBackgroundFinish = evt => {
    console.log(evt);
  };

  render() {
    console.log('state', this.state);
    const { calendarEvents, isOnCalendarForm, selectedDate } = this.state;

    return (
      <>
        <FullCalendar
          plugins={[interactionPlugin, daygridPlugin]}
          timeZone="UTC"
          defaultView="dayGridWeek"
          header={{
            left: 'prev,next',
            center: 'title',
            right: 'dayGridDay,dayGridWeek,dayGridMonth'
          }}
          eventMouseEnter
          eventClick={this.handleEventClicked}
          eventMouseLeave={this.handleDateBackgroundInit}
          dateClick={this.handleDateClicked}
          select={this.handleDateBackgroundInit}
          events={calendarEvents}
        />
        <CalendarForm
          addItemsToCalendar={this.addItemsToCalendar}
          open={isOnCalendarForm}
          onClose={this.handleCloseCalendarForm}
          selectedDate={selectedDate}
        />
      </>
    );
  }
}

export default Calendar;
