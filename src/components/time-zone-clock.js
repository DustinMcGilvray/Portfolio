import React from 'react'
import Clock from 'react-live-clock'
import './time-zone-clock.css'

/* https://github.com/pvoznyuk/react-live-clock */
/* https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */

const TimeZone = props => (
  <div id="time-zone-card" className="card has-text-white">
    <div className="card-content">
      <div className="content">
        <Clock
          style={{ fontSize: '2em' }}
          format={'h:mm:ss a'}
          ticking={true}
          timezone={props.timezone}
          className={"timezone-clock"}
        />
        <p className="timezone-place">{props.name}</p>
      </div>
    </div>
    <footer className="card-footer">
      <p className="timezone-date card-footer-item">
        <Clock
          style={{ fontSize: '1em' }}
          format={'dddd'}
          ticking={true}
          timezone={props.timezone}
        />
      </p>
      <p className="timezone-date card-footer-item">
        <Clock
          style={{ fontSize: '1em' }}
          format={'MMMM Do YYYY'}
          ticking={true}
          timezone={props.timezone}
        />
      </p>
    </footer>
  </div>
)

export default TimeZone
