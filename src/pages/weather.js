import React, { Component } from 'react'
import Layout from '../components/layout'
import WeatherWeek from '../components/weather-week-widget'
import './weather.css'

class WeatherPage extends Component {
  render() {
    return (
      <Layout>
        <div id="main-weather-card" className="card">
          <WeatherWeek />
        </div>
      </Layout>
    )
  }
}

export default WeatherPage
