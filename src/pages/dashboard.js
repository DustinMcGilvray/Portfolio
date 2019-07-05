import React, { Component } from 'react'
import Layout from '../components/layout'
import DateTime from '../components/date-time'
import DashBoardMainMenu from '../components/dashboard-menu-main'
import NewsTicker from '../components/news-ticker'
import './dashboard.css'

/*Weather API: https://rapidapi.com/community/api/open-weather-map */
/*WakaTime API: https://wakatime.com/developers */
/*Listen Notes API for Podcasts: https://www.listennotes.com/api/ */
/*YouTube API for Coding Tutporials: https://developers.google.com/youtube/v3/ */

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <div id="dashboard-main-card" className="card">
        <div className="columns">
        {/*Side Nave Column */}
        <div className="column is-narrow is-narrow-mobile is-hidden-mobile">
        <DashBoardMainMenu/>
        </div>
          <div id="information-side" className="column is-9">
          {/*Top Row of Columns */}
            <div className="columns">
              <div className="column">
                <div id="data-card-1" className="card">
                  DATA HERE
                </div>
                </div>
                <div className="column">
                  <div id="data-card-2" className="card">
                  DATA HERE
                  </div>
                </div>
                <div className="column">
                  <DateTime />
                </div>
              </div>
{/*Split Middle Column */}
              <div className="columns">
                <div className="column">
                  <div id="data-card-3" className="card">DATA HERE</div>
                </div>
                <div className="column is-6">
                  <div id="data-card-4" className="card">DATA HERE</div>
                </div>
              </div>
{/*Single Middle Column */}
              <div className="columns">
              <div className="column">
                <div id="data-card-5" className="card">DATA HERE 5</div>
              </div>
            </div>
{/*News Ticker Column */}
            <div className="columns">
            <div className="column">
              <div id="news-ticker-card" className="card">
                <NewsTicker/>
              </div>
            </div>
          </div>
          </div>
{/*Far Right Column */}
          <div className="column">
          <div id="data-card-6" className="card">
          <div className="columns is-gapless">
          <div className="column">
          <div id="data-card-6" className="card">
            DATA HERE
          </div>
          </div>
          </div>
          <div className="columns">
          <div className="column">
          <div id="data-card-7" className="card">
            DATA HERE
          </div>
          </div>
          </div>
          <div className="columns">
          <div className="column">
          <div id="data-card-8" className="card">
            DATA HERE
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
