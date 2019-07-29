import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Moment from 'moment'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
  ButtonPlay,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './wakatime-commits-widget.css'

/*WakaTime API: https://wakatime.com/developers */

const WakaTimeCommitWidget = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeCommitQuery {
        thirdPartyWakatimeCommits {
          commits {
            author_avatar_url
            author_date
            author_email
            author_html_url
            author_name
            author_url
            author_username
            committer_avatar_url
            committer_date
            committer_email
            committer_html_url
            committer_name
            committer_url
            committer_username
            created_at
            hash
            html_url
            human_readable_total
            human_readable_total_with_seconds
            thirdParty_id
            message
            total_seconds
            truncated_hash
            url
          }
          total_pages
        }
      }
    `}
    render={data => (
      <div>
        <CarouselProvider
          orientation="vertical"
          naturalSlideWidth={100}
          naturalSlideHeight={10}
          totalSlides={10}
        >
          <Slider>
            <Slide>  
            <div className='columns'>
            <div className='column is-narrow is-vcentered'>        
            <p className='is-pulled-left'>
              {Moment(
                data.thirdPartyWakatimeCommits.commits[0].committer_date
              ).format('dddd, MMMM Do YYYY')}
            </p>          
            </div>
            <div className='column'>
            
            <a
                
                href={data.thirdPartyWakatimeCommits.commits[0].html_url}
                target="__blank"
              >
                {data.thirdPartyWakatimeCommits.commits[0].message}
              </a>
            </div>
            <div className='column is-narrow'>
            
            <p>
            {data.thirdPartyWakatimeCommits.commits[0].human_readable_total}
          </p>           
            </div>
            </div>         
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    )}
  />
)

export default WakaTimeCommitWidget
