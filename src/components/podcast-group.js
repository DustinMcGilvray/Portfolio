import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <div className='arrow-icons' style={{padding:'5px'}}>
            <span className='left-arrow' style={{paddingRight: '5px'}}><FontAwesomeIcon icon={'caret-square-left'} size={'lg'} color={'white'}/></span>
            <span className='left-arrow' style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={'caret-square-right'} size={'lg'} color={'white'} /></span>
          </div>
      </div>
    )
  }
}
export default podcastGroup
