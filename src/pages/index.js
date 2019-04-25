import React from 'react'
import Layout from '../components/layout'
import './index.css'

const IndexPage = () => (
  <div>
    <Layout>
      <div className="card">
        <div className="left-craft">
          <div id='word-craft'>CRAFT</div>
        </div>
        <div className="title has-text-white has-text-white-bold is-uppercase">
          Dustin McGilvray
        </div>
        <div className="right-code">
          <div id="word-code">CODE</div>
        </div>
        <div />
      </div>
    </Layout>
  </div>
)

export default IndexPage
