import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment'
import randomColor from 'randomcolor'
import './wakatime-year-widget.css'

/*WakaTime API: https://wakatime.com/developers */
/*Random Color: https://www.npmjs.com/package/randomcolor */
/*Pie Chart: https://github.com/toomuchdesign/react-minimal-pie-chart#readme */

const WakaTimeYearWidget = (props) => (

  <StaticQuery
    query={graphql`
      query WakaTimeYearQuery {
        thirdPartyWakatimeYear{
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
      <div>
        <header className="card-header has-text-white is-shadowless">
          <div className="card-header-title is-centered" />
          <span className="card-header-icon is-hidden-desktop is-hidden-tablet">
            <FontAwesomeIcon
              icon={'times-circle'}
              color={'white'}
              onClick={() => props.closeComponent(props.id)}
              value={props.id}
            />
          </span>
        </header>
        <div className="columns is-hidden-mobile">
          <div className="column">
            <p className="has-text-white is-size-4">
              {data.thirdPartyWakatimeYear.data.categories[0].text}
            </p>
            <p className="light-grey">Coding Last Year</p>
          </div>
          <div className="column">
            <p className="has-text-white is-size-4">
              {
                data.thirdPartyWakatimeYear.data
                  .human_readable_daily_average_including_other_language
              }
            </p>
            <p className="light-grey">Daily Average</p>
          </div>
          <div className="column">
            <p className="has-text-white is-size-4">
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
            <p className="has-text-white is-size-4">
              {data.thirdPartyWakatimeYear.data.projects[0].text}
            </p>
            <p className="light-grey">
              Time on{' '}
              <span className="is-capitalized">
                {data.thirdPartyWakatimeYear.data.projects[0].name}
              </span>
            </p>
          </div>
        </div>
        <div className="columns is-multiline is-mobile">
          {data.thirdPartyWakatimeYear.data.languages.filter(function(language) {
            return language.percent !== 0
          }).map(function(language) {
              return <div className="column ">
                <p style={{color: randomColor({ luminosity: 'light' }, { count: 27 })}}>{language.percent.toFixed(2) + '%'}</p>
                <p className="has-text-white">{language.name}</p>          
              </div> 
          })
                        
          })}
        </div>
      </div>
    )}
  />
)

export default WakaTimeYearWidget
