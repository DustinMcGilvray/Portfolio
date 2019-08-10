import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import RssFeedItem from '../rss-feed-item'
import './wired-mag-rss.css'

const WiredRSSFeed = (props) => (
  <StaticQuery
    query={graphql`
      query WiredRSSFeedQuery {
        allFeedWiredMag {
          edges {
            node {
              isoDate
              id
              title
              link
              pubDate
              content
              contentSnippet
              dc {
                creator
              }
              categories
              media {
                thumbnail {
                  attrs {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="columns is-multiline">
        {data.allFeedWiredMag.edges.map(wired => (
          <div className="column is-half">
          <RssFeedItem 
          url={wired.node.link}
          image={wired.node.media.thumbnail.attrs.url}
          title={wired.node.title}
          author={wired.node.dc.creator}
          date={wired.node.isoDate}
          content={wired.node.contentSnippet}
          />
          </div>
        ))}

      </div>
    )}
  />
)
export default WiredRSSFeed