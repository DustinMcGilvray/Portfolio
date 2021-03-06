import React, { Component } from 'react'
import PodcastItem from '../components/podcast-item'
import podcasts from '../podcast_data/podcast-array.json'
import './podcast-group.css'

/* https://codepen.io/PiotrBerebecki/pen/pEYPbY */

class podcastGroup extends Component {
  constructor() {
    super()
    this.state = {
      channels: podcasts,
      currentPage: 1,
      channelsPerPage: 8,
    }

    this.handleClick = this.handleClick.bind(this)
    console.log(podcasts)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    })
  }

  render() {
    const { channels, currentPage, channelsPerPage } = this.state

    // Logic for displaying current channels
    const indexOfLastChannel = currentPage * channelsPerPage
    const indexOfFirstChannel = indexOfLastChannel - channelsPerPage
    const currentChannels = channels.slice(
      indexOfFirstChannel,
      indexOfLastChannel
    )

    const renderChannels = currentChannels.map((channel, index) => {
      return (
        <PodcastItem
          playPodcast={this.props.playPodcast}
          id={channel.id}
          key={channel.id}
          name={channel.name}
          image={channel.image}
        />
      )
    })

    // Logic for displaying page numbers
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(channels.length / channelsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      )
    })

    return (
      <div id="podcast-card" className="card has-text-white">
        <section>
          <div className="columns is-gapless is-multiline">
            {renderChannels}
          </div>
        </section>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    )
  }
}
export default podcastGroup