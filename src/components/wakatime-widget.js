import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

/*WakaTime API: https://wakatime.com/developers */

const WakaTimeWidget = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeQuery {
 thirdPartyWakatime {
    data {
      grand_total {
        digital
        text
      }
      projects {
        name
        digital
        percent
        text
      }
      languages {
        name
        digital
        text
      }
      editors{
        name
        digital
        text
      }
      range{
        date
        start
        end
        text
        timezone
      }
    }
  }
}

    `}
    render={data => (
      <div>
      <p>
      {data.thirdPartyWakatime.data[0].projects[0].name}
    </p>
        <p>
          {data.thirdPartyWakatime.data[0].languages[0].name}{''} - {''}
          {data.thirdPartyWakatime.data[0].languages[0].digital}
        </p>
        <p>
          {data.thirdPartyWakatime.data[0].languages[1].name}{''} - {''}
          {data.thirdPartyWakatime.data[0].languages[1].digital}
        </p>

        <p>
          {data.thirdPartyWakatime.data[0].languages[2].name}{''} - {''}
          {data.thirdPartyWakatime.data[0].languages[2].digital}
        </p>
        <p>
          Weekly Coding Time on this Portfolio {data.thirdPartyWakatime.data[0].projects[0].digital}
        </p>
      
      </div>
    )}
  />
)

export default WakaTimeWidget
