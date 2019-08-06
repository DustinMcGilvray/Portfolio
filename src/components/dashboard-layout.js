import React, { Component } from 'react'
import Layout from '../components/layout'
import DateTime from '../components/date-time'
import DashBoardMainMenu from '../components/dashboard-menu-main'
import WeatherDayWidget from '../components/weather-day-widget'
import WakaTimeWidget from '../components/wakatime-widget'
import WakaTimeCommitsWidget from '../components/wakatime-commits-widget'
import YouTubeWidget from '../components/youtube-widget'
import NewsTicker from '../components/news-ticker'
import PodcastWidget from './podcast-widget'
import BigWeb from '../components/myPodcasts/big-web-show-podcast'
import CalendarWidget from '../components/calendar-widget'
import './dashboard-layout.css'

class Dashboard extends Component {

state= {
  isPodcastWidgetShowing: true,
  isBigWebShowShowing: false
}

playPodcast=(id) => {
  if (id === '0') {
      {this.setState({
          isPodcastWidgetShowing: false,
          isBigWebShowShowing: true
      })}
  }
}

closePlayer=(id) => {
        {this.setState({
            isPodcastWidgetShowing: true,
            isBigWebShowShowing: false
        })}
}

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
              {/*WakaTime Top Column */}
              <div className="columns">
                <div className="column">
                  <WakaTimeWidget />
                </div>
              </div>

              <div id='commits-main-card' className='columns card is-gapless'>
                <div className='column'>
                  <div className='has-text-white' >
                 <WakaTimeCommitsWidget/>
                  </div>
                </div>
              </div>

              {/*YouTube & Podcast Column */}
              <div className="columns">
                <div className="column">
                  <div className="columns">
                    <div className="column">
                      <YouTubeWidget />
                    </div>
                  </div>
                </div>
                <div className="column">
                <div className='columns'>
                <div className='column'>
                {this.state.isPodcastWidgetShowing &&
                    <PodcastWidget 
                    playPodcast={this.playPodcast}
                  />
                }

                {this.state.isBigWebShowShowing &&
                    <BigWeb
                    closePlayer={this.closePlayer}
                    />
                }
                
                </div>
                </div>
                </div>

                {/* Calendar Column */}
                <div id="calendar-column" className="column">
                  <div id="calendar-card">
                    <CalendarWidget />
                  </div>
                </div>
              </div>
            </div>

            {/*Far Right Column */}
            <div id="far-right-column" className="column">
              <div className="columns">
                <div className="column">
                  <DateTime />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <WeatherDayWidget />
                </div>
              </div>
            </div>
          </div>

          {/*News Ticker Column */}
          <div className="columns">
            <div className="column">
              <NewsTicker />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Dashboard
