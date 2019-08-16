import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import channels from '../dashboard-channel-array.json'
import './dashboard-channels-mobile.css'

class dashboardChannels extends Component {
  state = {
    channels,
  }

  render() {
    return (
      <div id="dashboard-channels-card" className="card">
        <div className="columns is-multiline is-gapless is-mobile">
          {this.state.channels.map(channel => (
            <div
              className="column is-half-mobile"
              showComponent={this.props.showComponent}
              id={channel.id}
              key={channel.id}
            >
              <div className="card dashboard-channel-card">
                <FontAwesomeIcon
                  className="channel-icon-position"
                  icon={channel.icon}
                  color={'white'}
                  size={'2x'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default dashboardChannels
