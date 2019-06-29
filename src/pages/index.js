import React, { Component } from 'react'
import Layout from '../components/layout'
import './index.css'

class IndexPage extends Component {

  render() {
    return(

      <Layout>
        <div id="landing-card" className="card">
        <div>
          <div id="word-craft">CRAFT</div>
        </div>
          <div
            id="name-title"
            className="has-text-white has-text-white-bold is-uppercase"
          >
            Dustin McGilvray
          </div>
          <div id="word-code">CODE</div>
          <div />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
