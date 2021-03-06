import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import NewsArticles from '../components/news-articles'
import './news.css'

class NewsPage extends Component {
  render() {
    return (
      <Layout>
        <div id="main-news-card" className="card">
          <header className="card-header">
            <div className="card-header-title is-centered custom-header">
              <p className="title has-text-white">NEWS</p>
            </div>
            <div className="card-header-icon">
              <span className="icon">
                <Link to="/dashboard">
                  <FontAwesomeIcon icon={'times-circle'} color="white" />
                </Link>
              </span>
            </div>
          </header>
          <div className="columns">
            <div className="column">
            <div className='columns'>
            <div className='column'>
            <NewsArticles />
            </div>
            </div>
              <div className="columns">
                <div className="column">
                  <div className="columns">
                    <div className="column">HERE</div>
                  </div>
                </div>
                <div className="column is-narrow">HERE</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsPage
