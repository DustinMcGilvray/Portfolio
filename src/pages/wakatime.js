import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import WakaTimeYearWidget from '../components/wakatime-year-widget'
import logoWT from '../images/wakatime_horizontal_white.png'
import './wakatime.css'

class WakatimePage extends Component {

  render() {
    return(

      <Layout>
          <div id="main-wakatime-card" className="card">
          <header className="card-header">
          <div className="card-header-title is-centered custom-header">
          <img
          src={logoWT}
          alt="WakaTime Logo"
          style={{ width: '150px' }}
          hspace={'5px'}
        />{' '}
          </div>
          <div className="card-header-icon">
              <span className="icon">
              <Link to='/dashboard'>
                <FontAwesomeIcon
                  icon={'times-circle'}
                  color="white"
                />
                </Link>
              </span>
            </div>
          </header>
          <div className="columns">
          <div className="column">
          <WakaTimeYearWidget/>
        </div>
          </div>
          </div>
      </Layout>
    )
  }
}

export default WakatimePage