import React, { Component } from 'react'
import DashboardLayout from '../components/dashboard-layout'
import DashboardMobile from '../components/dashboard-layout-mobile'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="is-hidden-mobile">
          <DashboardLayout />
        </div>
        <div className="is-hidden-desktop">
          <DashboardMobile />
        </div>
      </div>
    )
  }
}

export default Dashboard
