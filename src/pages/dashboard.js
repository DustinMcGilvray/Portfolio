import React, { Component } from 'react'
import Layout from '../components/layout'
import DateTime from '../components/date-time'
import DashBoardMainMenu from '../components/dashboard-menu-main'
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
          <section className="columns is-gapless is-fullheight">

           <DashBoardMainMenu/>

            <div id="information-side" className="column">

              <div className="columns">
                <div className="column ">
                  <div id="data-card-1" className="card">
                  
                  </div>
                </div>
                <div className="column">
                  <div id="data-card-2" className="card">DATA HERE</div>
                </div>
                <div className="column">
                  <DateTime />
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <div className="card">News Ticker</div>
                </div>
              </div>

              <div className="columns">
                <div className="column ">
                  <div id="data-card-3" className="card">DATA HERE</div>
                </div>
                <div className="column">
                  <div id="data-card-4" className="card">DATA HERE</div>
                </div>
              </div>

              <div className="columns">
              <div className="column ">
                <div id="data-card-5" className="card">DATA HERE</div>
              </div>
            </div>

            </div>

          </section>
        </div>
      </Layout>
    )
  }
}

export default Dashboard
