import React, { Component } from 'react'
import Layout from '../components/layout'
import Clock from 'react-live-clock';

/*Weather API: https://rapidapi.com/community/api/open-weather-map */
/*WakaTime API: https://wakatime.com/developers */
/*Listen Notes API for Podcasts: https://www.listennotes.com/api/ */
/*YouTube API for Coding Tutporials: https://developers.google.com/youtube/v3/ */

class Dashboard extends Component {
  render() {
    return (
      <Layout>
      <div className="columns is-mobile">
      <div className="column">
        <div className="card">
        News Ticker Here
        </div>
      </div>
      </div>

        <div className="columns is-mobile">
        <div className="column">
          <div className="card">
          
          </div>
        </div>
          <div className="column">
            <div className="card">
              <Clock 
              style={{fontSize: '2em'}}
              format={'h:mm:ss'} 
              ticking={true} 
              timezone={'US/Central'} 
              />
            </div>
          </div>
        </div>

        <div className="columns is-mobile">
        <div className="column">
          <div className="card">
          
          </div>
        </div>
          <div className="column">
            <div className="card">
             
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Dashboard
