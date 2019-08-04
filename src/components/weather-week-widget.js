import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Moment from 'moment'
import '../scss/open-weather-icons.scss'
import './weather-week-widget.css'

/* OpenWeatherMap API: https://openweathermap.org/api */
/* Weather API: https://rapidapi.com/community/api/open-weather-map */
/* https://openweathermap.org/weather-conditions */
/* https://medium.com/@leizl.samano/how-to-make-a-weather-app-using-react-403c88252deb */

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

const WeatherWeekWidget = () => (
  <StaticQuery
    query={graphql`
      query WeatherWeekQuery {
        openWeather {
          city {
            name
          }
          list {
            weather {
              description
              main
              id
              icon
            }
            main {
              temp
              pressure
              humidity
              temp_min
              temp_max
              sea_level
              grnd_level
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
      <div>
        <header className="card-header" />
        <p className="card-header-title title is-centered has-text-white">
          5 Day Forecast
        </p>
        <p className="subtitle has-text-white">
          {data.openWeather.city.name}, TX 75707
        </p>

        <div className="columns">
          {data.openWeather.list
            .filter(day => day.dt_txt.includes('18:00:00'))
            .map(day => (
              <div className="column is-one-fifth">
                <div id="weather-week-card" className="card has-text-white ">
                  <header className="card-header is-shadowless">
                    <p className="card-header-title is-uppercase is-centered is-size-4 has-text-white">
                      {Moment(day.dt_txt).format('dddd')}
                    </p>
                  </header>
                  <p className="is-uppercase is-centered is-size-5 has-text-white">
                    {day.weather[0].description}
                  </p>
                  <div className="card-content">
                    <div className="content">
                      <span className="icon is-large">
                        <i
                          className={`owi owi-4x owi-${day.weather[0].icon}`}
                        />
                      </span>

                      <div className="is-size-1">
                        {Math.round(day.main.temp)}&#176;
                      </div>

                      <p>
                        {Math.round(day.main.temp_min)}&#176; Low &nbsp; |
                        &nbsp;
                        {Math.round(day.main.temp_max)}&#176; High
                      </p>

                      <p>
                        <span className="light-grey is-pulled-left">
                          Humidity
                        </span>{' '}
                        &nbsp;
                        <span className="is-pulled-right">
                          {day.main.humidity} %
                        </span>{' '}
                        <br />
                        <span className="light-grey is-pulled-left">
                          Wind Direction
                        </span>{' '}
                        &nbsp;
                        <span className="is-pulled-right">
                          {getCardinalDirection(day.wind.deg)}
                        </span>{' '}
                        <br />
                        <span className="light-grey is-pulled-left">
                          Wind Speed
                        </span>
                        &nbsp;
                        <span className="is-pulled-right">
                          {Math.round(day.wind.speed)} mph
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <img
              src="../images/logo/openweather-white-logo-RGB.png"
              alt="logo"
              style={{ width: '150px' }}
            />
          </p>
        </footer>
      </div>
    )}
  />
)

export default WeatherWeekWidget
