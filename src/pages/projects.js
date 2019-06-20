import React, { Component } from 'react'
import Layout from '../components/layout'
import ProjectGroup from '../components/project-group'
import ProjectInfo from '../components/info'
import './projects.css'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isInfoShowing: false,
      isProjectGroupShowing: true
    }
  }

showInfo = () => {
  this.setState({
    ...this.state,
    isInfoShowing: true,
    isProjectGroupShowing: false
  })
}

closeInfo = () => {
  console.log("CLICK")
  this.setState({
    ...this.state,
    isInfoShowing: false,
    isProjectGroupShowing: true
  })
}

  render() {
    return (
      <Layout>
        <div id="portfolio-card" className="card">
        <div className="columns is-gapless">
        {this.state.isProjectGroupShowing && <ProjectGroup showInfo={this.showInfo}/>}

        {this.state.isInfoShowing && <ProjectInfo closeInfo={this.closeInfo}/>}
        </div>
        </div>
      </Layout>
    )
  }
}

export default Portfolio
