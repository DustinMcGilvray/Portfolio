import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './info.css'

const InfoApp = props => {
  console.log(props)
  return (
    <div className="column">
      <div id="info-card" className="card is-shadowless">
        <header className="card-header is-shadowless">
          <p class="card-header-title is-centered is-size-3 has-text-white">
            {props.name}
          </p>
          <div className="card-header-icon">
            <span className="icon">
              <FontAwesomeIcon
                icon={'times-circle'}
                color="white"
                onClick={props.closeInfo}
              />
            </span>
          </div>
        </header>
        <section className="section">
          <div className="card-content">
            <div className="content has-text-center has-text-white">
              {props.summary}
            </div>
          </div>
        </section>
        <header className="card-header is-shadowless">
          <p className="card-header-title is-centered is-size-3 has-text-white">
            Technologies
          </p>
        </header>
        <section className="section tech-stack">
          <div className="columns is-gapless">
            {props.techArray.map(tech => (
              <div className="column">
                <img className="logo-image" src={tech} alt={props.alt} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default InfoApp
