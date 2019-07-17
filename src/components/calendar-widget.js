import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';


class MyCalendar extends Component {

  render() {
      return (
          <div className='card'>
          
          <FullCalendar defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]}
        height={5}
      />
          </div>
    )
  }

}
export default  MyCalendar