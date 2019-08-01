import React, { Component } from 'react'
import Layout from '../components/layout'
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './calendar.css'

moment.locale=("en-GB")
const localizer = momentLocalizer(moment);

class CalendarPage extends Component {
  state = {
    events: [
      {
        start: '',
        end: '',
        title: ""
      }
    ]
  };
  render() {
    return(

      <Layout>
          <div id='big-calendar-card' className='card'>
          <Calendar
          id={'main-calendar'}
          localizer={localizer}
          defaultDate={new Date()}
          views={{month:true}}
          events={this.state.events}
          style={{ height: "69vh" }}
        />
          </div>
      </Layout>
    )
  }
}

export default CalendarPage