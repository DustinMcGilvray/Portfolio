import React from 'react'
import Clock from 'react-live-clock'
import './time-local-clock.css'

const TimeLocal = () => (
  <div id="local-timezone-card" className="card has-text-white">
    <div className="card-content">
      <Clock
        style={{ fontSize: '3em' }}
        format={'h:mm:ss'}
        ticking={true}
        timezone={'America/Dallas'}
      />
    </div>
    <footer className="card-footer">
      <p className="timezone-place card-footer-item">Local</p>
    </footer>
  </div>
)

export default TimeLocal
