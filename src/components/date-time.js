import React, {Component} from 'react'
import './date-time.css';

/*https://medium.com/@dpark/time-date-in-react-using-setinterval-54ece428e0cf */

class TimeContainer extends Component {
  constructor() {
    super()
    let d = new Date()
      this.state = {
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString()
      }
    this.countingSecond = this.countingSecond.bind(this)
  }
  countingSecond() {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString()
    })
  }
  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
      <div id="time-date-card" className="card">
      <div className="columns is-vcentered is-gapless" >
        <div className="column">      
        <p id="time-style"> {this.state.time}</p>
        </div>
        <div className="column">  
        <p id="day-style">{days[this.state.day]}</p>
        <p id="month-year-style">{months[this.state.month]} {this.state.date}, {this.state.year}</p>
        </div>
      </div>
      </div>
    )
  }
}
export default TimeContainer