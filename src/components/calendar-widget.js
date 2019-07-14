import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';


class MyCalendar extends Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]}
        height={5}
      />
    )
  }

}
export default  MyCalendar