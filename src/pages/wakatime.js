import React, { Component } from 'react'
import Layout from '../components/layout'
import WakaTimeYearWidget from '../components/wakatime-year-widget'
import WakaTimeGoalWidget from '../components/wakatime-goals-widget'
import WakaTimeLeaderWidget from '../components/wakatime-leader-widget'
import WakaTimeTicker from '../components/wakatime-ticker'
import logoWT from '../images/wakatime_horizontal_white.png'
import './wakatime.css'

class WakatimePage extends Component {
  render() {
    return (
      <Layout>
        <div id="main-wakatime-card" className="card">
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <WakaTimeYearWidget />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <WakaTimeGoalWidget />
                <div className="columns">
                  <div className="column wakatime-ticker-column">
                  <div id="wakatime-ticker-card" className='card'>
                    <WakaTimeTicker />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <WakaTimeLeaderWidget />
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <p>Powered By</p>
              <img
                src={logoWT}
                alt="WakaTime Logo"
                style={{ width: '100px' }}
                hspace={'5px'}
              />{' '}
            </div>
          </footer>
        </div>
      </Layout>
    )
  }
}

export default WakatimePage
