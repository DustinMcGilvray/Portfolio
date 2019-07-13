import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

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
      <div>
      <h1>Channel Name: {data.allYoutubeVideo.edges[0].node.channelTitle}</h1>
      <p>Title: {data.allYoutubeVideo.edges[0].node.title}</p>
      <p>Video Id: {data.allYoutubeVideo.edges[0].node.videoId}</p>
      <p>Description: {data.allYoutubeVideo.edges[0].node.description}</p>
      <img className='image is-128x128' src={`${data.allYoutubeVideo.edges[0].node.thumbnail.url}`} alt='thumbnail'/>
      </div>
    )}
  />
)

export default YouTubeWidget
