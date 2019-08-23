import React, { Component } from 'react'
import Layout from '../components/layout'
import './index.css'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div id="landing-card" className="card">
            <div id="word-craft">CRAFT</div>
          <div id="name-box">
            <h2 id="name-title" className="has-text-white has-text-bold is-uppercase">
              Dustin McGilvray
              <p className="name-subtitle is-size-4">
                Full Stack Web Developer
              </p>
            </h2>
          </div>
          <div id="word-code">CODE</div>
          <div />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
