import React from 'react'
import AudioCard from 'audiocard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
  ButtonPlay,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const PodcastPlayer = (props) => (
  <div>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={35}
      totalSlides={10}
    >
      <Slider>
        {data.allPodcasts.nodes[1].episodes.map(episode => (
          <Slide index={0}>
            <AudioCard
              title={episode.title}
              art={episode.thumbnail}
              source={episode.audio}
              skipBackSeconds={10}
              skipForwardSeconds={30}
              color="white"
              background="transparent"
              progressBarBackground="darkorange"
              progressBarCompleteBackground="darkGray"
              onClick={props.podcastChannel}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonFirst style={{ backgroundColor: 'transparent', border: 'none' }}>
        <FontAwesomeIcon icon={'fast-backward'} size={'lg'} color={'white'} />
      </ButtonFirst>
      <ButtonBack style={{ backgroundColor: 'transparent', border: 'none' }}>
        <FontAwesomeIcon icon={'backward'} size={'lg'} color={'white'} />
      </ButtonBack>
      <ButtonPlay style={{ backgroundColor: 'transparent', border: 'none' }}>
        <FontAwesomeIcon icon={'play'} size={'lg'} color={'white'} />
      </ButtonPlay>
      <ButtonNext style={{ backgroundColor: 'transparent', border: 'none' }}>
        {' '}
        <FontAwesomeIcon icon={'forward'} size={'lg'} color={'white'} />
      </ButtonNext>
      <ButtonLast style={{ backgroundColor: 'transparent', border: 'none' }}>
        <FontAwesomeIcon icon={'fast-forward'} size={'lg'} color={'white'} />
      </ButtonLast>
    </CarouselProvider>
    <img
      src="../images/logo/listen_notes_api_logo.png"
      alt="logo"
      style={{ width: '125px' }}
    />
  </div>
)

export default PodcastPlayer
