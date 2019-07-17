import React, { Component } from 'react'
import Layout from '../components/layout';
import DashBoardMainMenu from '../components/dashboard-menu-main'

import WeatherDayWidget from '../components/weather-day-widget'

import './test-page.css'


class TestPage extends Component {

  render() {
    return(

      <Layout>
          <div id='new-dashboard-view' className="card">
        <div className='columns'>
        <div className='column is-narrow'>
        <DashBoardMainMenu/>
        </div>
        <div className='column'>
        <WeatherDayWidget/>
        </div>
        </div>
          </div>
      </Layout>
    )
  }
}

export default TestPage