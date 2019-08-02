import React, { Component } from 'react';
import Countdown from './countdown-widget.js';

class ChristmasEveCountdown extends Component {
    render() {
      const currentDate = new Date();
      const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
      return (
        <div>
        <Countdown date={`${year}-12-24T00:00:00`} />
          <h3>Christmas Eve Countdown</h3>
        </div>
      );
    }
  }
  
  export default ChristmasEveCountdown;