import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Ticker from 'react-ticker'
import './wakatime-ticker.css'

/*https://github.com/AndreasFaust/react-ticker */
/* https://www.npmjs.com/package/react-ticker */
/* https://newsapi.org/docs */

class WakatimeTicker extends Component {
  state = {
    move: true,
  }

  render() {
    return (
      <div
        onMouseEnter={() => {
          this.setState({ move: false })
        }}
        onMouseLeave={() => this.setState({ move: true })}
      >
        <Ticker
          speed={this.state.move ? 6 : 0}
          offset="run-in"
          mode="smooth"
          height={40}
        >
          {() => (
            <StaticQuery
              query={graphql`
                query WakatimeStatsQuery {
                  thirdPartyWakatimeWeekStats {
                    data {
                      dependencies {
                        text
                        percent
                        name
                        digital
                      }
                    }
                  }
                }
              `}
              render={data => (
                <div
                  id="wakatime-feed"
                  className="has-text-white"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {data.thirdPartyWakatimeWeekStats.data.dependencies.map(
                    dependent => (
                      <span style={{ paddingRight: '25px' }}>
                        {dependent.name}: {dependent.text} {dependent.percent}%
                      </span>
                    )
                  )}
                </div>
              )}
            />
          )}
        </Ticker>
        <p className="light-grey">Weekly Stats on Dependencies</p>
      </div>
    )
  }
}

export default WakatimeTicker
