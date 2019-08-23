import React from 'react'
import Clock from 'react-live-clock'
import './time-local-clock.css'

const TimeLocal = () => (
  <div id="local-timezone-card" className="card has-text-white">
    <div className="card-content">
    <div className="content">
      <Clock
        style={{ fontSize: '1.65em' }}
        format={'h:mm:ss a'}
        ticking={true}
        timezone={'America/Chicago'}
        className={"timezone-local-clock"}
      />
      <p className="timezone-place">Local</p>
    </div>
    </div>
    <footer className="card-footer">
      <p className="timezone-place-local card-footer-item">     
      <Clock
      style={{ fontSize: '1em' }}
      format={'dddd'}
      ticking={true}
      timezone={'America/Chicago'}
    />      
    </p>
      <p className="timezone-place-local card-footer-item">
      <Clock
        style={{ fontSize: '1em' }}
        format={'MMMM Do YYYY'}
        ticking={true}
        timezone={'America/Chicago'}
      />
      </p>

    </footer>
  </div>
)

export default TimeLocal