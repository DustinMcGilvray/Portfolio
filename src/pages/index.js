import React from 'react'
import Layout from '../components/layout'
import './index.css'

const IndexPage = () => (
  <Layout>
    <div id="landing-card" className="card bg-left bg-right">
      <div id="word-craft">CRAFT</div>
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

export default IndexPage
