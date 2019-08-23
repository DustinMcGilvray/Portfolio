import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import './youtube.css'

class YouTubePage extends Component {

  render() {
    return(
      <Layout>
      <div id="main-youtube-card" className="card">
      <header className="card-header">
      <div className="card-header-title is-centered custom-header">
        <p className='title has-text-white'>YouTube</p>
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
    </div>
      </div>
      </div>
    </Layout>
    )
  }
}

export default YouTubePage