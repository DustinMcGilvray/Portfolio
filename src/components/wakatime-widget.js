import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { RadialChart } from 'react-vis'

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
            editors {
              name
              digital
              text
            }
            range {
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
      <div className='columns'>
      <div className='column'>
      <div className='has-text-white'>
        <p className='has-text-white'>
          Code Time This week:{' '}
          {data.thirdPartyWakatime.data[0].grand_total.text}
        </p>
        <p>
          Editor of Choice: {data.thirdPartyWakatime.data[0].editors[0].name}
        </p>
        <p>Project: {data.thirdPartyWakatime.data[0].projects[0].name}</p>
        <p>
          {data.thirdPartyWakatime.data[0].projects[0].percent} % of coding time
          this week spent on the{' '}
          {data.thirdPartyWakatime.data[0].projects[0].name}
        </p>
        LANGUAGES
        <p>
          {data.thirdPartyWakatime.data[0].languages[0].name}
          {''} - {''}
          {data.thirdPartyWakatime.data[0].languages[0].digital}
        </p>
        <p>
          {data.thirdPartyWakatime.data[0].languages[1].name}
          {''} - {''}
          {data.thirdPartyWakatime.data[0].languages[1].digital}
        </p>
        <p>
          Weekly Coding Time on this{' '}
          {data.thirdPartyWakatime.data[0].projects[0].name} is{' '}
          {data.thirdPartyWakatime.data[0].projects[0].digital}
        </p>
        <p>{data.thirdPartyWakatime.data[0].range.text}.</p>
        </div>
        </div>
        <div className="column has-text-white">
             <RadialChart 
             data={
              [
               {angle: 25, label: 'JavaScript'}, 
               {angle: 25, label: 'CSS'}, 
               {angle: 25, label: 'HTML'}, 
               {angle: 25, label: 'JSON'}
              ]
            }
             width={200}
             height={200}
             />
             </div>
      </div>

    )}
  />
)

export default WakaTimeWidget
