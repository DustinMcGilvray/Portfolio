import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment'
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
            orientation="vertical"
            naturalSlideWidth={100}
            naturalSlideHeight={5}
            totalSlides={10}
          >
            <div className="columns">
              <div className="column">
                <Slider className="slide-style">
                  <Slide>
                    <div className="columns">
                      <div className="column is-narrow">
                        <div className="image is-48x48">
                          <img
                            src="../icons/code_commit_icon_white.png"
                            alt="code commit icon"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <p className="has-text-white has-text-left">
                          <span className="light-grey">Commit Date: </span>
                          {Moment(
                            data.thirdPartyWakatimeCommits.commits[0]
                              .committer_date
                          ).format('dddd, MMMM Do YYYY')}
                        </p>
                        <p className="has-text-white has-text-left">
                          <span className="light-grey">Code Time: </span>{' '}
                          {
                            data.thirdPartyWakatimeCommits.commits[0]
                              .human_readable_total
                          }
                        </p>
                      </div>
                      <div className="column">
                        <a
                          className="has-text-white"
                          href={
                            data.thirdPartyWakatimeCommits.commits[0].html_url
                          }
                          target="__blank"
                        >
                          {data.thirdPartyWakatimeCommits.commits[0].message}
                        </a>
                      </div>
                    </div>
                  </Slide>
                </Slider>
              </div>
              <div className="column is-narrow">
                <ul>
                  <li>
                    <ButtonBack
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                      <FontAwesomeIcon
                        icon={'caret-square-up'}
                        size={'lg'}
                        color={'white'}
                      />
                    </ButtonBack>
                  </li>
                  <li>
                    <ButtonNext
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                      {' '}
                      <FontAwesomeIcon
                        icon={'caret-square-down'}
                        size={'lg'}
                        color={'white'}
                      />
                    </ButtonNext>
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
