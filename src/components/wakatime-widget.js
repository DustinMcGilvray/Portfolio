import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment'
import PieChart from 'react-minimal-pie-chart'
import randomColor from 'randomcolor'
import logoWT from '../images/wakatime_horizontal_white.png'
import './wakatime-widget.css'

/*WakaTime API: https://wakatime.com/developers */
/*Random Color: https://www.npmjs.com/package/randomcolor */
/*Pie Chart: https://github.com/toomuchdesign/react-minimal-pie-chart#readme */

const WakaTimeWidget = (props) => (
  <StaticQuery
    query={graphql`
      query WakaTimeQuery {
        thirdPartyWakatime {
          data {
            best_day {
              date
              text
            }
            categories {
              text
            }
            editors {
              name
            }
            languages {
              name
              percent
            }
          }
        }
      }
    `}
    render={data => (
      <div id="wakatime-card" className="card">
        <header className="card-header has-text-white is-shadowless">
          <div className="card-header-title is-centered">
            <img
              src={logoWT}
              alt="WakaTime Logo"
              style={{ width: '100px' }}
              hspace={'5px'}
            />
            <span className="has-text-white">Analytics</span>
          </div>
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
            <p className="has-text-white">
              {data.thirdPartyWakatime.data.categories[0].text}
            </p>
            <p className='light-grey'>Coding Last 7 Days</p>
          </div>
          <div className="column">
            <p className="has-text-white">
              {data.thirdPartyWakatime.data.best_day.text}
            </p>
            <p className='light-grey'>
              Best Day was {Moment(data.thirdPartyWakatime.data.best_day.date).format(
                'dddd, MMMM Do YYYY'
              )}
            </p>
          </div>
          <div className="column">
            <p className="has-text-white">
              {data.thirdPartyWakatime.data.editors[0].name}
            </p>
            <p className='light-grey'>Editor of Choice</p>
          </div>
        </div>
<div className="columns is-hidden-desktop">
<div className="column">
<p className='light-grey'>Coding Last 7 Days: <span className="has-text-white">{data.thirdPartyWakatime.data.categories[0].text}</span></p>
<p className='light-grey'>Best Day was {Moment(data.thirdPartyWakatime.data.best_day.date).format(
  'dddd'
)}: <span className="has-text-white"> {data.thirdPartyWakatime.data.best_day.text}</span></p>
<p className='light-grey'>Coding Last 7 Days: <span className="has-text-white">{data.thirdPartyWakatime.data.categories[0].text}</span></p>
</div>
</div>

        <div className="columns is-multiline is-mobile">
          {data.thirdPartyWakatime.data.languages.map(language => (
            <div className="column is-half-mobile">
              <PieChart
                data={[
                  {
                    value:`${language.percent}`,
                    color: randomColor({ luminosity: 'light' }, { count: 27 }),
                  },
                ]}
                style={{ height: '100px' }}
                lineWidth={20}
                totalValue={100}               
                label={({data, dataIndex}) => 
             data[0].percentage.toFixed(2) + '%'
              }
                labelPosition={0}
                labelStyle={{ fontSize: '1em', fontFamily: 'san-serif' }}
                background="#122342"
              />
              <p className="has-text-white language-name">{language.name}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  />
)

export default WakaTimeWidget
