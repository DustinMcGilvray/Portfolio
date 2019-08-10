import React, { Component } from 'react'
import Countdown from './countdown-widget.js'
import './vacation-countdown.css'

class VacationCountdown extends Component {
  render() {
    const currentDate = new Date()
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 12
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear()
    return (
      <div id="vacation-card" className="card has-text-white">
        <Countdown date={`${year}-12-11T00:00:00`} />
        <h3 className="countdown-label">Days until Vacation</h3>
      </div>
    )
  }
}

export default VacationCountdown