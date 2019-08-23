import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <header className="card-header">
          <div className="card-header-title is-centered custom-header">
            <p className='title has-text-white'>Calendar</p>
          </div>
          <div className="card-header-icon">
              <span className="icon">
              <Link to='/dashboard'>
                <FontAwesomeIcon
                  icon={'times-circle'}
                  color="white"
                />
                </Link>
              </span>
            </div>
          </header>
          <Calendar
          id={'main-calendar'}
          localizer={localizer}
          defaultDate={new Date()}
          views={{month:true}}
          events={this.state.events}
          style={{ height: "58vh" }}
        />
          </div>
      </Layout>
    )
  }
}

export default CalendarPage