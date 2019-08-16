import React, { Component } from 'react'
import Layout from './layout'
import DashboardChannelsWidget from './dashboard-channels-group-mobile'
import WakaTimeWidget from './wakatime-widget'
import TimeZone from './time-zone-clock'
import WeatherDayWidget from './weather-day-widget'
import PodcastWidget from './podcast-widget'
import NewsWidget from './news-articles'
import YouTubeWidget from './youtube-widget'
import './dashboard-layout-mobile.css'

class DashboardMobile extends Component {
  state = {
    isDashboardChannelsShowing: true,
    isWakaTimeWidgetShowing: false,
    isTimeZoneWidgetShowing: false,
    isWeatherDayWidgetShowing: false,
    isPodcastWidgetShowing: false,
    isNewsWidgetShowing: false,
    isYouTubeWidgetShowing: false,
  }

  showComponent = id => {
    switch (id) {
      case '0':
        this.setState({
          isDashboardChannelsShowing: false,
          isWakaTimeWidgetShowing: true,
        })
        break
      case '1':
        this.setState({
          isDashboardChannelsShowing: false,
          isTimeZoneWidgetShowing: true,
        })
        break
      case '2':
        this.setState({
          isDashboardChannelsShowing: false,
          isWeatherDayWidgetShowing: true,
        })
        break
      case '3':
        this.setState({
          isDashboardChannelsShowing: false,
          isPodcastWidgetShowing: true,
        })
        break
      case '4':
        this.setState({
          isDashboardChannelsShowing: false,
          isNewsWidgetShowing: true,
        })
        break
      case '5':
        this.setState({
          isDashboardChannelsShowing: false,
          isYouTubeWidgetShowing: true,
        })
        break
      default:
    }
  }

  closeComponent = id => {
    this.setState({
      isDashboardChannelsShowing: true,
      isWakaTimeWidgetShowing: false,
      isTimeZoneWidgetShowing: false,
      isWeatherDayWidgetShowing: false,
      isPodcastWidgetShowing: false,
      isNewsWidgetShowing: false,
      isYouTubeWidgetShowing: false,
    })
  }

  render() {
    return (
      <Layout>
        <div id="mobile-dashboard-main" className="card">
          <div className="card-content">
            <div className="content">
              {this.state.isDashboardChannelsShowing && (
                <DashboardChannelsWidget showComponent={this.showComponent} />
              )}
              {this.state.isWakaTimeWidgetShowing && (
                <WakaTimeWidget closeComponent={this.closeComponent} />
              )}
              {this.state.isTimeZoneWidgetShowing && (
                <TimeZone closeComponent={this.closeComponent} />
              )}
              {this.state.isWeatherDayWidgetShowing && (
                <WeatherDayWidget closeComponent={this.closeComponent} />
              )}
              {this.state.isPodcastWidgetShowing && (
                <PodcastWidget closeComponent={this.closeComponent} />
              )}
              {this.state.isNewsWidgetShowing && (
                <NewsWidget closeComponent={this.closeComponent} />
              )}
              {this.state.isYouTubeWidgetShowing && (
                <YouTubeWidget closeComponent={this.closeComponent} />
              )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DashboardMobile
