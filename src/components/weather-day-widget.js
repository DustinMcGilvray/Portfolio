import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../scss/open-weather-icons.scss'

/*OpenWeatherMap API: https://openweathermap.org/api */
/*Weather API: https://rapidapi.com/community/api/open-weather-map */

//TODO: Establish Math.round function for Temp return

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
            main {
              temp
            }
          }
        }
      }
    `}
    render={data => (
      <div className="card">
      <div className="card-content">
      {(() =>
      <p className="title">
       {data.openWeather.list[0].main.temp}
      </p>
      )()}
      </div>

        <p>{data.openWeather.list[0].weather[0].main}</p>
        <p>
        <span className="icon">
          <i className={`owi owi-3x owi-${data.openWeather.list[0].weather[0].icon}`}> </i>
        </span>
        </p>
      </div>
    )}
  />
)

export default WeatherDayWidget
