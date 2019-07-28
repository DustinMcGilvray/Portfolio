import React from 'react'
import PodcastGroup from '../components/podcast-group.js'
import './podcast-widget.css'

const PodcastWidget = () => (
  <div id="podcast-card" className="card has-text-white">
    <PodcastGroup />
  </div>
)

export default PodcastWidget