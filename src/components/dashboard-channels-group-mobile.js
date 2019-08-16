import React from 'react'
import DashboardChannels from '../components/dashboard-channels-mobile'
import './podcast-widget.css'

const DashboardChannelsWidget = props => (
  <div>
    <DashboardChannels showComponent={props.showComponent} />
  </div>
)

export default DashboardChannelsWidget
