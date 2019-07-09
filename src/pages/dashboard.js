import React, { Component } from 'react'
import Layout from '../components/layout'
import DateTime from '../components/date-time'
import DashBoardMainMenu from '../components/dashboard-menu-main'
import WeatherDayWidget from '../components/weather-day-widget'
import WakaTimeWidget from '../components/wakatime-widget'
import YouTubeWidget from '../components/youtube-widget'
import NewsTicker from '../components/news-ticker'
import './dashboard.css'

/*Listen Notes API for Podcasts: https://www.listennotes.com/api/ */

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <div id="dashboard-main-card" className="card">
          <div className="columns">
            {/*Side Nav Column */}
            <div className="column is-narrow is-narrow-mobile is-hidden-mobile">
              <DashBoardMainMenu />
            </div>
            <div id="information-side" className="column is-9">
              {/*Top Row of Columns */}
              <div className="columns">
                <div className="column">
                  <div id="data-card-1" className="card">
                    <WeatherDayWidget />
                  </div>
                </div>
                <div className="column">
                  <div id="data-card-2" className="card">
                    <WakaTimeWidget />
                  </div>
                </div>
                <div className="column">
                  <div id="data-card-3" className="card">
                    DATA HERE 3
                  </div>
                </div>
              </div>
              {/*Split Middle Column */}
              <div className="columns">
                <div className="column">
                  <div id="data-card-4" className="card">
                    <YouTubeWidget/>
                  </div>
                </div>
                <div className="column is-6">
                  <div id="data-card-5" className="card">
                    DATA HERE 5
                  </div>
                </div>
              </div>
              {/*Single Middle Column */}
              <div className="columns">
                <div className="column">
                  <div id="data-card-6" className="card">
                    
                  </div>
                </div>
              </div>
              {/*News Ticker Column */}
              <div className="columns">
                <div className="column">
                  <div id="news-ticker-card" className="card">
                    <NewsTicker />
                  </div>
                </div>
              </div>
            </div>
            {/*Far Right Column */}
            <div className="column">
              <div id="data-card-7" className="card">
                <div className="columns is-gapless">
                  <div className="column">
                    <div id="data-card-6" className="card">
                      <DateTime />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div id="data-card-7" className="card">
                      DATA HERE 7
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div id="data-card-8" className="card">
                      DATA HERE 8
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Dashboard
