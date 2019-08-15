import React, { Component } from 'react'
import Layout from '../components/layout'
import './news.css'

class NewsPage extends Component {
  render() {
    return (
      <Layout>
        <div id="main-news-card" className="card">
        <div className="columns">
        <div className="column">
          <div>
          NEWS
          </div>  
      </div>
        </div>
        </div>
      </Layout>
    )
  }
}

export default NewsPage
