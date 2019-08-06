import React from 'react'
import PodcastGroup from '../components/podcast-group.js'
import './podcast-widget.css'

const PodcastWidget = (props) => (
  <div id="podcast-card" className="card has-text-white">
    <PodcastGroup 
      playPodcast={props.playPodcast}
    />
  </div>
)

export default PodcastWidget