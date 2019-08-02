import React, { Component } from 'react'
import Layout from '../components/layout'
import ChristmasEveCountdown from '../components/christmas-eve-countdown'
import TimeZone from '../components/time-zone-clock'


class ClockPage extends Component {
  render() {
    return (
      <Layout>
      <div className='columns'>
      <div className='column'>
      <TimeZone
      timezone="America/Dallas"
      />
      <p>Local</p>
      </div>
      </div>
          <div className="columns">
            <div className="column">
              <ChristmasEveCountdown />
            </div>
            </div>
            <div className='columns'>
            <div className='column'>
              <TimeZone
              timezone="America/Los_Angeles"
              />
              <p>Los Angeles</p>
            </div>
            <div className='column'>
              <TimeZone
              timezone="America/New_York"
              />
              <p>New York</p>
            </div>
            <div className='column'>
              <TimeZone
              timezone="Europe/Dublin"
              />
              <p>Dublin</p>
            </div>
            <div className='column'>
            <TimeZone
            timezone="Australia/Sydney"
            />
            <p>Sydney</p>
          </div>
            <div className='column'>
            <TimeZone
            timezone="Asia/Hong_Kong"
            />
            <p>Hong Kong</p>
          </div>
            <div className='column'>
              <TimeZone
              timezone="Asia/Tokyo"
              />
              <p>Tokyo</p>
            </div>
            </div>
      </Layout>
    )
  }
}

export default ClockPage
