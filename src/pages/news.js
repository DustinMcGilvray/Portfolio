import React, { Component } from 'react'
import Layout from '../components/layout'

class NewsPage extends Component {

  render() {
    return(

      <Layout>
          <div className="container has-text-centered">
            <h1 className="title">News Page</h1>
            <h2 className="subtitle">Coding News Feeds Here</h2>
          </div>
      </Layout>
    )
  }
}

export default NewsPage