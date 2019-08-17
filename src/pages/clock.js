import React, { Component } from 'react'
import Layout from '../components/layout'
import ChristmasEveCountdown from '../components/christmas-eve-countdown'
import VacationCountdown from '../components/vacation-countdown'
import TimeLocal from '../components/time-local-clock'
import TimeZone from '../components/time-zone-clock'
import zones from '../data/time-zone-array.json'
import './clock.css'

class ClockPage extends Component {
  state = {
    zones,
  }

  render() {
    return (
      <Layout>
        <div id="main-clock-card" className="card">
          <section id="local-timezone-section" className="section">
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
                    <VacationCountdown/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
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
          </section>
        </div>
      </Layout>
    )
  }
}

export default ClockPage
