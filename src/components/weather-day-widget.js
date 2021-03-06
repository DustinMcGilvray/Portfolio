import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../scss/open-weather-icons.scss'
import logoOW from '../images/openweather-white-logo-RGB.png'
import './weather-day-widget.css'
import './weather-gifs.css'

//TODO: Added image library for backgrounds that reflect current weather icon.

/*OpenWeatherMap API: https://openweathermap.org/api */
/*Weather API: https://rapidapi.com/community/api/open-weather-map */
/* https://openweathermap.org/weather-conditions */

function getCardinalDirection(angle) {
  const directions = [
    '↑ N',
    '↗ NE',
    '→ E',
    '↘ SE',
    '↓ S',
    '↙ SW',
    '← W',
    '↖ NW',
  ]
  return directions[Math.round(angle / 45) % 8]
}

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
              description
              icon
            }
            main {
              temp
              pressure
              humidity
              temp_min
              temp_max
            }
            wind {
              deg
              speed
            }
            dt_txt
          }
        }
      }
    `}
    render={data => (
      <div id="weather-main-card" className={`card-owi-${data.openWeather.list[0].weather[0].icon}`}>
          <p className='is-uppercase is-centered is-size-4 has-text-weight-bold'>
            {data.openWeather.city.name}
          </p>
        <p className="is-uppercase is-centered is-size-5 has-text-white">
          {data.openWeather.list[0].weather[0].description}
        </p>
        <div className="card-content">
          <div className="content">
            <span className="icon is-large">
              <i
                className={`owi owi-4x owi-${
                  data.openWeather.list[0].weather[0].icon
                }`}
              />
            </span>
            <div className="is-size-2">
              {Math.round(data.openWeather.list[0].main.temp)}&#176;
            </div>
            <p class>
              {Math.round(data.openWeather.list[0].main.temp_min)}&#176; Low
              &nbsp; | &nbsp;
              {Math.round(data.openWeather.list[0].main.temp_max)}&#176; High
            </p>
          </div>
          <div className="content">
            <span>
              <span className="is-pulled-left">Humidity</span> &nbsp;
              <span className="is-pulled-right">
                {data.openWeather.list[0].main.humidity} %
              </span>{' '}
              <br />
              <span className="is-pulled-left">
                Wind Direction
              </span>{' '}
              &nbsp;
              <span className="is-pulled-right">
                {getCardinalDirection(data.openWeather.list[0].wind.deg)}
              </span>{' '}
              <br />
              <span className="is-pulled-left">Wind Speed</span>
              &nbsp;
              <span className="is-pulled-right">
                {Math.round(data.openWeather.list[0].wind.speed)} mph
              </span>
            </span>
          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <img
              src={logoOW}
              alt="logo"
              style={{ width: '75px', paddingBottom: "4px" }}
            />
          </p>
        </footer>
      </div>
    )}
  />
)

export default WeatherDayWidget