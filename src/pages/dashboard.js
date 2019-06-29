import React, { Component } from 'react'
import Layout from '../components/layout'


class Dashboard extends Component {

  render() {
    return(

      <Layout>
          <div className="container has-text-centered">
            <h1 className="title">Dustin's Dashboard</h1>
            <h2 className="subtitle">This will be Dustin's Personal Dashboard</h2>
          </div>
      </Layout>
    )
  }
}

export default Dashboard