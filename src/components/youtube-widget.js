import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YouTubePlayer from './youtube-player'
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
import './youtube-widget.css'

/* YouTube API https://developers.google.com/youtube/v3/ */
/* https://www.npmjs.com/package/pure-react-carousel */

const YouTubeWidget = () => (
  <StaticQuery
    query={graphql`
      query YouTubeQuery {
        allYoutubeVideo {
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
      <div id="youtube-card" className="card has-text-white">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={50}
        >
          <Slider>
            {data.allYoutubeVideo.edges.map(edge => (
              <Slide index={0}>
                <YouTubePlayer videoId={edge.node.videoId} />
              </Slide>
            ))}
          </Slider>
          <ButtonFirst
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            <FontAwesomeIcon
              icon={'fast-backward'}
              size={'lg'}
              color={'white'}
            />
          </ButtonFirst>
          <ButtonBack
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            <FontAwesomeIcon icon={'backward'} size={'lg'} color={'white'} />
          </ButtonBack>
          <ButtonPlay
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            <FontAwesomeIcon icon={'play'} size={'lg'} color={'white'} />
          </ButtonPlay>
          <ButtonNext
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            {' '}
            <FontAwesomeIcon icon={'forward'} size={'lg'} color={'white'} />
          </ButtonNext>
          <ButtonLast
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            <FontAwesomeIcon
              icon={'fast-forward'}
              size={'lg'}
              color={'white'}
            />
          </ButtonLast>
          </CarouselProvider>
          <img src='../images/logo/yt_logo_rgb_dark.png' alt='YouTube Logo' style={{ width: '100px', padding:'15px'}}/>
      </div>
    )}
  />
)

export default YouTubeWidget
