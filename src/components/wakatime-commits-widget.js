import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment'
import randomColor from 'randomcolor'
import './wakatime-commits-widget.css'

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './wakatime-commits-widget.css'

/*WakaTime API: https://wakatime.com/developers */

const WakaTimeCommitWidget = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeCommitQuery {
        thirdPartyWakatimeCommits {
          commits {
            author_avatar_url
            author_date
            author_email
            author_html_url
            author_name
            author_url
            author_username
            committer_avatar_url
            committer_date
            committer_email
            committer_html_url
            committer_name
            committer_url
            committer_username
            created_at
            hash
            html_url
            human_readable_total
            human_readable_total_with_seconds
            thirdParty_id
            message
            total_seconds
            truncated_hash
            url
          }
          total_pages
        }
      }
    `}
    render={data => (
      <div className="columns">
        <div className="column">
          <CarouselProvider
            orientation={"vertical"}
            naturalSlideWidth={100}
            naturalSlideHeight={7}
            totalSlides={7}
            step={1}
          >
            <div className="columns">
              <div id='slider-column' className="column">
                <Slider className="slide-style">
                {data.thirdPartyWakatimeCommits.commits.slice(0,7).map(commit => (
                  <Slide index={0}>
                    <div className="columns">
                      <div id='commit-icon' className="column is-1">
                      <a
                          
                      href={
                        commit.html_url
                      }
                      target="__blank"
                      style={{color: randomColor({ luminosity: 'light' }, { count: 27 })}}
                    >
                      <FontAwesomeIcon
                      icon={['fab','github-square']}
                      size={'2x'}
                      color={'white'}
                    />
                    </a>
                      </div>
                      <div className="column is-4">
                        <p className="has-text-white has-text-left">
                          <span className="light-grey">Commit Date: </span>
                          {Moment(commit.committer_date).format('dddd, MMMM Do YYYY')}
                        </p>
                        <p className="has-text-white has-text-left">
                          <span className="light-grey">Code Time: </span>{' '}
                          {commit.human_readable_total}
                        </p>
                      </div>
                      <div className="column is-7">
                        <p className='has-text-left'>
                         <span className='light-grey'>Commit Message: </span> {commit.message}
                        </p>
                      </div>                
                    </div>
                  </Slide>
                  ))}
                </Slider>
              </div>
              <div id='up-down-button-column' className="column is-narrow is-vcentered">
                <ul>
                  <li>
                    <ButtonNext
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                      {' '}
                      <FontAwesomeIcon
                        icon={'caret-up'}
                        size={'2x'}
                        color={'white'}
                      />
                    </ButtonNext>
                  </li>
                  <li>
                    <ButtonBack
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                      <FontAwesomeIcon
                        icon={'caret-down'}
                        size={'2x'}
                        color={'white'}
                      />
                    </ButtonBack>
                  </li>
                </ul>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
    )}
  />
)

export default WakaTimeCommitWidget
