/**
 *
 * @returns {<{title: 'Event1', start: '2019-05-18', allDay: true, color: 'yellow', textColor: 'black'}>}
 *
 */
export function createEvent({
  title, start, allDay, color = 'blue', textColor = 'white'
}) {
  return {
    title,
    start,
    allDay,
    color,
    textColor
  };
}

export default createEvent;
