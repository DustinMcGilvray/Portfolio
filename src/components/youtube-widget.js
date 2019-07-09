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
      <h1>{data.allYoutubeVideo.edges[0].node.title}</h1>
      <p>{data.allYoutubeVideo.edges[0].node.channelTitle}</p>
      <img className='image is-128x128' src={`${data.allYoutubeVideo.edges[0].node.thumbnail.url}`} alt='thumbnail'/>
      </div>
    )}
  />
)

export default YouTubeWidget
