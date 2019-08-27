import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment'
import randomColor from 'randomcolor'
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
            committer_date
            created_at
            html_url
            human_readable_total_with_seconds
            message
          }
        }
      }
    `}
    render={data => (
      <div className="columns">
        <div className="column">
          <CarouselProvider
            orientation={'vertical'}
            naturalSlideWidth={100}
            naturalSlideHeight={8}
            totalSlides={7}
            step={1}
          >
            <div className="columns">
              <div id="slider-column" className="column">
                <Slider className="slide-style">
                  {data.thirdPartyWakatimeCommits.commits
                    .slice(0, 7)
                    .map(commit => (
                      <Slide index={0}>
                        <div className="columns">
                          <div id="commit-icon" className="column is-1">
                            <a
                              href={commit.html_url}
                              target="__blank"
                              style={{
                                color: randomColor(
                                  { luminosity: 'light' },
                                  { count: 27 }
                                ),
                              }}
                            >
                              <FontAwesomeIcon
                                icon={['fab', 'github-square']}
                                size={'2x'}
                                color={'white'}
                              />
                            </a>
                          </div>
                          <div className="column is-4">
                            <p className="has-text-white has-text-left">
                              <span className="light-grey">Commit Date: </span>
                              {Moment(commit.committer_date).format(
                                'dddd, MMMM Do YYYY'
                              )}
                            </p>
                            <p className="has-text-white has-text-left">
                              <span className="light-grey">Code Time: </span>{' '}
                              {commit.human_readable_total_with_seconds}
                            </p>
                            <p className="has-text-white has-text-left">
                              <span className="light-grey">Commited At: </span>{' '}
                              {Moment(commit.created_at).format('LT')}
                            </p>
                          </div>
                          <div className="column is-7">
                            <p className="has-text-left">
                              <span className="light-grey">
                                Commit Message:{' '}
                              </span>{' '}
                              {commit.message}
                            </p>
                          </div>
                        </div>
                      </Slide>
                    ))}
                </Slider>
              </div>
              <div
                id="up-down-button-column"
                className="column is-1 is-vcentered"
              >
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
