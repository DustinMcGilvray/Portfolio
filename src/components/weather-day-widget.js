import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Moment from 'moment' 
import '../scss/open-weather-icons.scss'

/*OpenWeatherMap API: https://openweathermap.org/api */
/*Weather API: https://rapidapi.com/community/api/open-weather-map */

function getCardinalDirection(angle) {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  return directions[Math.round(angle / 45) % 8];
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
      <div className="card">
      <div className="card-content">
      <p className="title">
       {Math.round(data.openWeather.list[0].main.temp)} &#8457;
      </p>
      <p>Pressure: {data.openWeather.list[0].main.pressure} hPa</p>
      <p>Humidity: {data.openWeather.list[0].main.humidity} %</p>
      <p>Low Temp: {data.openWeather.list[0].main.temp_min}</p>
      <p>High Temp: {data.openWeather.list[0].main.temp_max}</p>
      <p>Pressure at Sea Level: {data.openWeather.list[0].main.sea_level} hPa</p>
      <p>Pressure at Ground Level: {data.openWeather.list[0].main.grnd_level} hPa</p>

      <p>Wind Degree: {getCardinalDirection(data.openWeather.list[0].wind.deg)}</p>

      <p>Wind Speed: {data.openWeather.list[0].wind.speed} mph</p>
      </div>
      <p>ID: {data.openWeather.list[0].weather[0].id}</p>
      <p>Icon: {data.openWeather.list[0].weather[0].icon}</p>
        <p>{data.openWeather.list[0].weather[0].main}</p>
        <p>
        <span className="icon">
          <i className={`owi owi-3x owi-${data.openWeather.list[0].weather[0].icon}`}> </i>
        </span>
        <img src={`http://openweathermap.org/img/wn/${data.openWeather.list[0].weather[0].icon}@2x.png`} alt='icon'/>
        </p>
        <p>
        Description: {data.openWeather.list[0].weather[0].description}
        </p>
        <p>
        Date: {Moment(data.openWeather.list[0].dt_txt).format("ddd, hA")}
        </p>
      </div>
    )}
  />
)

export default WeatherDayWidget
