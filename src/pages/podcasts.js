import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import './podcasts.css'

class PodcastPage extends Component {

  render() {
    return(

      <Layout>
      <div id="main-podcast-card" className="card">
      <header className="card-header">
      <div className="card-header-title is-centered custom-header">
        <p className='title has-text-white'>Podcast</p>
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

export default PodcastPage