import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const PodcastWidget = () => (
    <StaticQuery
    query={graphql`
      query PodcastApiQuery {
  allPodcasts {
    nodes {
      podcasts {
        alternative_id
        title
        publisher
        image
        thumbnail
        listennotes_url
        total_episodes
        explicit_content
        description
        itunes_id
        rss
        latest_pub_date_ms
        earliest_pub_date_ms
        language
        country
        website
        is_claimed
        email
      }
    }
  }
}
    `}
 render={data => (
<div>
<a href={data.allPodcasts.nodes[0].podcasts[0].listennotes_url}>
  <p>{data.allPodcasts.nodes[0].podcasts[0].title}</p>
 </a>
 <img src={data.allPodcasts.nodes[0].podcasts[0].image} alt="podcast"/>
</div>
)}
/>         
)

export default PodcastWidget