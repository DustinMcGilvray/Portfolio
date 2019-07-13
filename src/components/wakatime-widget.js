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
      <p>Code Time This week: {data.thirdPartyWakatime.data[0].grand_total.text}</p>
      <p>Editor of Choice: {data.thirdPartyWakatime.data[0].editors[0].name}</p>
      <p>
      Project: {data.thirdPartyWakatime.data[0].projects[0].name}
    </p>
    <p>{data.thirdPartyWakatime.data[0].projects[0].percent} % of coding time this week spent on the {data.thirdPartyWakatime.data[0].projects[0].name}</p>
    LANGUAGES
        <p>
          {data.thirdPartyWakatime.data[0].languages[0].name}{''} - {''}
          {data.thirdPartyWakatime.data[0].languages[0].digital}
        </p>
        <p>
          {data.thirdPartyWakatime.data[0].languages[1].name}{''} - {''}
          {data.thirdPartyWakatime.data[0].languages[1].digital}
        </p>
        <p>
          Weekly Coding Time on this {data.thirdPartyWakatime.data[0].projects[0].name} is {data.thirdPartyWakatime.data[0].projects[0].digital}
        </p>
        <p>{data.thirdPartyWakatime.data[0].range.text}.</p>
      
      </div>
    )}
  />
)

export default WakaTimeWidget
