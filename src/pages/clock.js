import React, { Component } from 'react'
import Layout from '../components/layout'
import ChristmasEveCountdown from '../components/christmas-eve-countdown'

class ClockPage extends Component {

  render() {
    return(

      <Layout>
          <div className="container has-text-centered">
            <h1 className="title">Clock Page</h1>
            <ChristmasEveCountdown/>
          </div>
      </Layout>
    )
  }
}

export default ClockPage