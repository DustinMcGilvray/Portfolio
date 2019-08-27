import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PieChart from 'react-minimal-pie-chart'
import randomColor from 'randomcolor'
import './wakatime-leader-widget.css'

/*WakaTime API: https://wakatime.com/developers */
/*Random Color: https://www.npmjs.com/package/randomcolor */
/*Pie Chart: https://github.com/toomuchdesign/react-minimal-pie-chart#readme */

const WakaTimeLeaderWidget = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeLeaderQuery {
        thirdPartyWakatimeLeader {
          current_user {
            running_total {
              daily_average
              human_readable_daily_average
              human_readable_total
              languages {
                name
                total_seconds
              }
              total_seconds
              modified_at
            }
          }
          range {
            name
            text
            end_text
            start_text
            end_date
            start_date
          }
        }
      }
    `}
    render={data => (
      <div id="leader-card" className="card">
        <header className="card-header is-shadowless">
        <p className="card-header-title is-centered has-text-white">
        Weekly Stats for {data.thirdPartyWakatimeLeader.range.start_text} through{' '}
        {data.thirdPartyWakatimeLeader.range.end_text}
      </p>
        </header>
        <div className="card-content">
          <div className="content">
            <div className="columns">
              {data.thirdPartyWakatimeLeader.current_user.running_total.languages.map(
                language => (
                  <div className="column">
                    <PieChart
                      data={[
                        {
                          value: `${language.total_seconds}`,
                          color: randomColor(
                            { luminosity: 'light' },
                            { count: 27 }
                          ),
                        },
                      ]}
                      style={{ height: '75px' }}
                      lineWidth={20}
                      totalValue={`${
                        data.thirdPartyWakatimeLeader.current_user.running_total
                          .total_seconds
                      }`}
                      label={({ data, dataIndex }) =>
                        data[0].percentage.toFixed(2) + '%'
                      }
                      labelPosition={0}
                      labelStyle={{ fontSize: '1em', fontFamily: 'san-serif' }}
                      background="#122342"
                    />
                    <p className="has-text-white">{language.name}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <footer className="card-footer">
        <p className="card-footer-item has-text-white">
            Weekly Total:{' '}{data.thirdPartyWakatimeLeader.current_user.running_total.human_readable_total}
          </p>
          <p className="card-footer-item has-text-white">
            Daily Average:{' '}
            {
              data.thirdPartyWakatimeLeader.current_user.running_total
                .human_readable_daily_average
            }
          </p>
         
        </footer>
      </div>
    )}
  />
)

export default WakaTimeLeaderWidget
