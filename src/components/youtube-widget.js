import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './youtube-widget.css'

/*YouTube API for Coding Tutorials: https://developers.google.com/youtube/v3/ */

const YouTubeWidget = () => (
  <StaticQuery
    query={graphql`
      query YouTubeQuery {
        allYoutubeVideo(
          filter: { channelId: { eq: "UCW5YeuERMmlnqo4oq8vwUpg" } }
        ) {
          edges {
            node {
              id
              title
              description
              videoId
              channelTitle
              thumbnail {
                url
                width
                height
              }
              localThumbnail {
                id
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id='youtube-card' className='card has-text-white'>
      <div className='columns is-gapless'>      
      <div className='column is-narrow'>
      <img className='image' src={`${data.allYoutubeVideo.edges[0].node.thumbnail.url}`} alt='thumbnail' style={{height:'100px', width:'100px'}}/>
      </div>
      <div className='column'>
      <h1>{data.allYoutubeVideo.edges[0].node.channelTitle}</h1>
      <p className='has-text-centered'>{data.allYoutubeVideo.edges[0].node.title}</p>
      {/* <p>Video Id: {data.allYoutubeVideo.edges[0].node.videoId}</p> */}
      <img src='../images/logo/yt_logo_rgb_dark.png' alt='YouTube Logo' style={{width:'100px'}}/>
      </div>     
      </div>
      </div>
    )}
  />
)

export default YouTubeWidget
