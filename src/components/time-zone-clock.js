import React from 'react'
import Clock from 'react-live-clock';
import './time-zone-clock.css'

/* https://github.com/pvoznyuk/react-live-clock */
/* https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */

const TimeZone = props => (
  <div id="time-zone-card" className="card has-text-white">
  <div className='card-content'>
  
  <Clock
  style={{fontSize:'3em'}}
  format={'h:mm:ss'}
  ticking={true}
  timezone={props.timezone}
  />
  </div>
  <footer className='card-footer'>
  <p className='timezone-place card-footer-item'>{props.name}</p>
  </footer>
    
  </div>
)

export default TimeZone
