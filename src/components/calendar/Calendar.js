import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../index.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarEvents: [
        {
          title: 'Event1',
          start: '2019-04-28',
          allDay: true,
          color: 'yellow', // an option!
          textColor: 'black' // an option!
        }
      ]
    };

    this.handleEventClicked = this.handleEventClicked.bind(this);
    this.handleDateClicked = this.handleDateClicked.bind(this);
  }

  handleEventClicked(evt) {
    alert(`Hai cliccato su ${evt.event.title}`);
  }

  handleDateClicked(date) {
    const { calendarEvents } = this.state;
    if (window.confirm(`Would you like to add an event to ${date.dateStr} ?`)) {
      console.log(date);
      this.setState({
        // add new event data
        calendarEvents: calendarEvents.concat({
          // creates a new array
          title: 'Event added',
          start: date.date,
          allDay: date.allDay
        })
      });
    }
  }

  render() {
    console.log('state', this.state);
    const { calendarEvents } = this.state;

    return (
      <FullCalendar
        plugins={[interactionPlugin, daygridPlugin]}
        timeZone="UTC"
        defaultView="dayGridWeek"
        header={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridDay,dayGridWeek,dayGridMonth'
        }}
        selectable
        eventClick={this.handleEventClicked}
        dateClick={this.handleDateClicked}
        editable
        events={calendarEvents}
      />
    );
  }
}

export default Calendar;
