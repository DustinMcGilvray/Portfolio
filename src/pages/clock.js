import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChristmasEveCountdown from '../components/christmas-eve-countdown'
import VacationCountdown from '../components/vacation-countdown'
import TimeLocal from '../components/time-local-clock'
import TimeZone from '../components/time-zone-clock'
import zones from '../timezone_data/time-zone-array.json'
import './clock.css'

//TODO: Set Background Images on Clocks and/or Main Card. Image paths are in timezone json.

class ClockPage extends Component {
  state = {
    zones,
  }

  render() {
    return (
      <Layout>
        <div id="main-clock-card" className="card">
          <header className="card-header">
            <div className="card-header-title is-centered custom-header">
              <p className="title has-text-white">Time Zones</p>
            </div>
            <div className="card-header-icon">
              <span className="icon">
                <Link to="/dashboard">
                  <FontAwesomeIcon icon={'times-circle'} color="white" />
                </Link>
              </span>
            </div>
          </header>
          <div className="columns is-gapless">
            <div className="column">
              <div className="columns">
                <div className="column is-half">
                  <TimeLocal />
                </div>
                <div className="column is-half">
                  <div className="columns">
                    <div className="column">
                      <ChristmasEveCountdown />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <VacationCountdown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-multiline">
                {this.state.zones.map(zone => (
                  <div className="column is-one-third">
                    <TimeZone
                      timezone={zone.timezone}
                      name={zone.name}
                      image={zone.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ClockPage
