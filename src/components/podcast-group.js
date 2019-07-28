import React, { Component } from 'react'
import PodcastItem from '../components/podcast-item'
import podcasts from '../podcast-array.json'

class podcastGroup extends Component {
  state = {
    podcasts,
  }

  componentDidMount() {
    console.log(this.state.podcasts)
  }

  render() {
    return (
      <div>
        <section>
          <div className="columns is-gapless is-multiline">
            {this.state.podcasts.slice(0, 8).map(podcast => (
              <PodcastItem
                id={podcast.id}
                key={podcast.id}
                name={podcast.name}
                image={podcast.image}
              />
            ))}
          </div>
        </section>
       
      </div>
    )
  }
}
export default podcastGroup
