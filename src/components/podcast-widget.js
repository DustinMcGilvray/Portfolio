import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './podcast-widget.css'

/*Listen Notes API for Podcasts: https://www.listennotes.com/api/ */

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
<div id='podcast-card' className='card has-text-white'>
<div className='columns is-gapless'>
<div className='column is-narrow'>
<img className='image' src={data.allPodcasts.nodes[1].podcasts[0].thumbnail} alt="podcast" style={{height:'150px', width:'150px'}}/>
</div>
<div className='column'>
<h1>
Title: {data.allPodcasts.nodes[1].podcasts[0].title}
</h1>
<p>
Total Episodes: {data.allPodcasts.nodes[1].podcasts[0].total_episodes}
</p>
</div>
</div>
</div>
)}
/>         
)

export default PodcastWidget