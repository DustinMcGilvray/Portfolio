import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../scss/open-weather-icons.scss'

const WeatherDayWidget = () => (

  <StaticQuery
    query={graphql`
      query WeatherDayQuery {
        openWeather {
          city {
            name
          }
          list {
            weather {
              main
              icon
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>{data.openWeather.city.name}</h1>
        <p>{data.openWeather.list[0].weather[0].main}</p>
        <span className="icon">
          <i className={`owi owi-2x owi-${data.openWeather.list[0].weather[0].icon}`}> </i>
        </span>
        <p />
      </div>
    )}
  />
)

export default WeatherDayWidget
