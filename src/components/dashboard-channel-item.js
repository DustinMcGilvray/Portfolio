import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dashboard-channel-item.css'

const DashboardChannelItem = props => (
    <p className="card-footer-item">
      <FontAwesomeIcon 
        icon={props.icon} 
        color={'white'} 
        size={'lg'} 
        onClick={() => props.showComponent(props.id)} 
        value={props.id}
      />
    </p>
)

export default DashboardChannelItem
