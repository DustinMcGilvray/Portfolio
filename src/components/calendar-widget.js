import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/resource-timeline/main.css'
import './calendar-widget.css'

class MyCalendar extends Component {

state={
  calendarWeekends: true,
  calendarEvents: [
    {title: 'coding event', start:new Date('07-19-2019 03:24:00')}
  ]
}

  render() {
      return (
          <div id='calendar-card' className='card'>
          
          <FullCalendar 
          defaultView='dayGridWeek' 
          plugins={[ dayGridPlugin, timeGridPlugin, resourceTimelinePlugin ]}
          header={{
              right: 'next',
              left: 'prev',
              center: 'title'
              }}
          height={225}
          schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
          nowIndicator={true}
          now={Date.now()}
          events={this.state.calendarEvents}
      />
          </div>
    )
  }

}
export default  MyCalendar