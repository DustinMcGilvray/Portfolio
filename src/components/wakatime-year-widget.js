import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment'
import PieChart from 'react-minimal-pie-chart'
import randomColor from 'randomcolor'
import './wakatime-year-widget.css'

/*WakaTime API: https://wakatime.com/developers */
/*Random Color: https://www.npmjs.com/package/randomcolor */
/*Pie Chart: https://github.com/toomuchdesign/react-minimal-pie-chart#readme */

const WakaTimeYearWidget = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeYearQuery {
        thirdPartyWakatimeYear {
          data {
            best_day {
              created_at
              date
              text
              total_seconds
              thirdParty_id
            }
            categories {
              digital
              hours
              minutes
              name
              percent
              text
              total_seconds
            }
            daily_average
            daily_average_including_other_language
            days_including_holidays
            human_readable_daily_average
            human_readable_daily_average_including_other_language
            human_readable_total
            human_readable_total_including_other_language
            projects {
              digital
              hours
              minutes
              name
              percent
              text
              total_seconds
            }
            languages {
              digital
              hours
              minutes
              name
              percent
              text
              total_seconds
            }
            operating_systems {
              digital
              hours
              minutes
              name
              percent
              text
              total_seconds
            }
            range
          }
        }
      }
    `}
    render={data => (
      <div id='year-card' className='card'>
      <header className="card-header">
      <p className='card-header-title has-text-white is-centered is-size-6'>
        YEARLY CODING STATISTICS
      </p>
      <div className="card-header-icon">
              <span className="icon">
                <Link to="/dashboard">
                  <FontAwesomeIcon icon={'times-circle'} color="white" />
                </Link>
              </span>
            </div>
      </header>
        <div className="columns">
          <div className="column">
            <p className="has-text-white has-text-weight-bold is-size-6">
              {data.thirdPartyWakatimeYear.data.categories[0].text}
            </p>
            <p className="light-grey">Hours Coded in the Last Year</p>
          </div>
          <div className="column">
            <p className="has-text-white has-text-weight-bold is-size-6">
              {
                data.thirdPartyWakatimeYear.data
                  .human_readable_daily_average_including_other_language
              }
            </p>
            <p className="light-grey">Daily Coding Average</p>
          </div>
          <div className="column">
            <p className="has-text-white has-text-weight-bold is-size-6">
              {data.thirdPartyWakatimeYear.data.best_day.text}
            </p>
            <p className="light-grey">
              Best Day was{' '}
              {Moment(data.thirdPartyWakatimeYear.data.best_day.date).format(
                'dddd, MMMM Do YYYY'
              )}
            </p>
          </div>
          <div className="column">
            <p className="has-text-white has-text-weight-bold is-size-6">
              {data.thirdPartyWakatimeYear.data.projects[0].text}
            </p>
            <p className="light-grey">
              Time Coded on{' '}
              <span className="is-capitalized">
                {data.thirdPartyWakatimeYear.data.projects[0].name}
              </span>
            </p>
          </div>
        </div>
        <div className="columns is-multiline is-paddingless is-mobile">
          {data.thirdPartyWakatimeYear.data.languages
            .filter(function(language) {
              return language.percent !== 0
            })
            .map(function(language) {
              return (
                <div className="column">
                  <div>
                  <PieChart
                  data={[
                    {
                      value:`${language.percent}`,
                      color: randomColor({ luminosity: 'light' }, { count: 27 }),
                    },
                  ]}
                  style={{ height: '85px' }}
                  lineWidth={20}
                  totalValue={100}               
                  label={({data, dataIndex}) => 
               data[0].percentage.toFixed(2) + '%'
                }
                  labelPosition={0}
                  labelStyle={{ fontSize: '1em', fontFamily: 'san-serif' }}
                  background="#122342"
                />
                    <p className="has-text-white">{language.name}</p>
                  </div>
                </div>
              )
           }
          )}
        </div>
      </div>
    )}
  />
)

export default WakaTimeYearWidget
