import React from 'react'
import YouTube from 'react-youtube'

/* https://www.npmjs.com/package/react-youtube */

class YouTubePlayer extends React.Component {
  videoReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    const { videoId } = this.props

    return <YouTube videoId={videoId} opts={opts} onReady={this.videoReady} />
  }
}
export default YouTubePlayer
