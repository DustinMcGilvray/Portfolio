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
<a href={data.allPodcasts.nodes[1].podcasts[0].listennotes_url} target='__blank'>
<img src={data.allPodcasts.nodes[1].podcasts[0].thumbnail} alt="podcast" style={{height:'128px', width:'128px'}}/>
</a>
<div>  
<p>
Title: {data.allPodcasts.nodes[1].podcasts[0].title}
</p>
<p>
Description: {data.allPodcasts.nodes[1].podcasts[0].description}
</p>
<p>
Total Episodes: {data.allPodcasts.nodes[1].podcasts[0].total_episodes}
</p>
</div>
</div>
)}
/>         
)

export default PodcastWidget