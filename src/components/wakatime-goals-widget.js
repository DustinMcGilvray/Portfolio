import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './wakatime-goals-widget.css'

/*WakaTime API: https://wakatime.com/developers */
/*Random Color: https://www.npmjs.com/package/randomcolor */
/*Pie Chart: https://github.com/toomuchdesign/react-minimal-pie-chart#readme */

const WakaTimeGoalWidget = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeGoalQuery {
        thirdPartyWakatimeGoals {
          data {
            average_status
            chart_data {
              actual_seconds_text
              range_status_reason_short
              range {
                start
                end
                text
                date
              }
              range_status
            }
            title
            range_text
          }
        }
      }
    `}
    render={data => (
      <div id="goal-card" className="card">
        <header className="card-header">
          <p className="card-header-title has-text-white is-centered">
         Daily Goal to {data.thirdPartyWakatimeGoals.data[0].title}
          </p>
        </header>
        <CarouselProvider
          orientation={'vertical'}
          naturalSlideWidth={100}
          naturalSlideHeight={6}
          totalSlides={7}
          step={1}
          visibleSlides={1}
          currentSlide={6}
        >
          <div className="columns">
            <div id="slider-column" className="column">
              <Slider>
                {data.thirdPartyWakatimeGoals.data[0].chart_data.map(goal => (
                  <Slide index={0}>
                    <div className="columns">
                      <div id="goal-icon" className="column is-1">
                        {goal.range_status === 'success' ? (
                          <FontAwesomeIcon
                            icon={'check-circle'}
                            size={'lg'}
                            color={'green'}
                          />
                        ) : goal.range_status === 'pending' ? (
                          <FontAwesomeIcon
                            icon={'hourglass'}
                            size={'lg'}
                            color={'yellow'}
                            spin
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={'ban'}
                            size={'lg'}
                            color={'red'}
                          />
                        )}
                      </div>
                      <div className="column is-narrow">
                        <p
                          id={'goal-status'}
                          className={
                            goal.range_status === 'success'
                              ? 'goalMet'
                              : goal.range_status === 'pending'
                              ? 'goalPending'
                              : 'goalFailed'
                          }
                        >
                          {goal.range_status}
                        </p>
                      </div>
                      <div className="column is-narrow">
                        <p className="has-text-white has-text-weight-bold range-text">
                          {goal.range.text}
                        </p>
                      </div>
                      <div className="column">
                        <p className="has-text-white has-text-weight-bold status-reason">
                          {goal.range_status_reason_short}
                        </p>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
            <div id="up-down-button-goal" className="column is-1 is-vcentered">
              <ul>
                <li>
                  <ButtonNext
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}
                  >
                    {' '}
                    <FontAwesomeIcon
                      icon={'caret-up'}
                      size={'lg'}
                      color={'white'}
                    />
                  </ButtonNext>
                </li>
                <li>
                  <ButtonBack
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={'caret-down'}
                      size={'lg'}
                      color={'white'}
                    />
                  </ButtonBack>
                </li>
              </ul>
            </div>
          </div>
        </CarouselProvider>
      <footer className="card-footer">
      <p className="card-footer-item">
      <p
      className={
        data.thirdPartyWakatimeGoals.data[0].average_status === 'success'
          ? 'goalMet'
          : 'goalFailed'
      }
    >
      <span className="has-text-white has-text-weight-normal is-size-6">Average Goal Outcome:</span> {data.thirdPartyWakatimeGoals.data[0].average_status}
      </p>
    </p>
      </footer>
        </div>
    )}
  />
)

export default WakaTimeGoalWidget
