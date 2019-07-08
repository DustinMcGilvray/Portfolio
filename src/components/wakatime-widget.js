import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

/*WakaTime API: https://wakatime.com/developers */

const WakaTimeWidget = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeQuery {
        thirdPartyWakatime {
          data {
            projects {
              name
              digital
            }
            languages {
              digital
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>
          Coding Time this Past Week:{' '}
          {data.thirdPartyWakatime.data[0].languages[0].digital}
        </h1>
        <p>
          {' '}
          With {data.thirdPartyWakatime.data[0].projects[0].digital} spent on{' '}
          {data.thirdPartyWakatime.data[0].projects[0].name}
        </p>
      </div>
    )}
  />
)

export default WakaTimeWidget
