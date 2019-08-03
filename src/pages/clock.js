import React, { Component } from 'react'
import Layout from '../components/layout'
import ChristmasEveCountdown from '../components/christmas-eve-countdown'
import Clock from 'react-live-clock'
import TimeZone from '../components/time-zone-clock'
import zones from '../time-zone-array.json'
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
            <div className="columns is-gapless">
              <div className="column is-half">
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
              </div>
              <div className="column is-half">
                <div className="columns">
                  <div className="column">
                    <ChristmasEveCountdown />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">DISNEY VACAY COUNTDOWN</div>
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
