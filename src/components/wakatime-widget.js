import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PieChart from 'react-minimal-pie-chart';
import randomColor from 'randomcolor'
import './wakatime-widget.css'

/*WakaTime API: https://wakatime.com/developers */

const WakaTimeWidget = () => (
  
  <StaticQuery
    query={graphql`
      query WakaTimeQuery {
        thirdPartyWakatime {
    data {
      best_day {
        created_at
        date
        modified_at
        text
        thirdParty_id
        total_seconds
      }
      categories 
      {
        digital
        hours
        minutes
        name
        percent
        text
        total_seconds
      }
      created_at
      daily_average
      daily_average_including_other_language
      days_including_holidays
      days_minus_holidays
      dependencies {
        digital
        hours
        minutes
        name
        percent
        text
        total_seconds
      }
      editors {
        digital
        hours
        minutes
        name
        percent
        text
        total_seconds
      }
      end
      holidays
      human_readable_daily_average
      human_readable_daily_average_including_other_language
      human_readable_total
      human_readable_total_including_other_language
      thirdParty_id
      is_already_updating
      is_coding_activity_visible
      is_other_usage_visible
      is_stuck
      is_up_to_date
      languages {
        digital
        hours
        minutes
        name
        percent
        text
        total_seconds
      }
    machines {
      digital
      hours
      machine {
        created_at
        thirdParty_id
        ip
        last_seen_at
        name
        value
      }
      minutes
      name
      percent
      text
      total_seconds
    }
      modified_at
      operating_systems {
        digital
        hours
        minutes
        name
        percent
        text
        total_seconds
      }
      projects {
        digital
        hours
        minutes
        name
        percent
        text
        total_seconds
      }
      range
      start
      status
      timeout
      timezone
      total_seconds
      total_seconds_including_other_language
      user_id
      username
      writes_only
    }
  }
      }
    `}


    
    render={data => (
      <div id='wakatime-card' className='card'>
      <header className='card-header has-text-white is-shadowless'>
        <div className="card-header-title is-centered">
<img src='../images/logo/Logo + Text Horizontal_white.png' alt='WakaTime Logo' style={{width:'100px'}} hspace={'5px'}/> <span className='has-text-white'>Analytics</span>
        </div>
        </header>
        <p>
          Hours Coded:{' '}
            {data.thirdPartyWakatime.data.categories[0].text}
        </p>
        <p>
          Editor: {data.thirdPartyWakatime.data.editors[0].name}
        </p>
        
<div className='columns is-multiline'>
        {data.thirdPartyWakatime.data.languages.map(
          (language) => (
        <div className='column'>
        <PieChart
          data={[{ 
                value: `${language.percent}`, color: randomColor({luminosity: 'light'}, {count: 27})},
              ]}
          style={{height: '100px'}}
          lineWidth={20}
          totalValue={100}
          label={true}
          labelPosition={0}
          labelStyle={{fontSize:'1em', fontFamily:'san-serif'}}
        />
        <p className='has-text-white'>{language.name}</p>       
        </div>
          )
        )}

        </div>
      </div>

    )}
  
  />
)

export default WakaTimeWidget
