import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './info.css'

const InfoApp = props => {
  console.log(props);
  return (
    <div>
      <div className="columns is-gapless">
        <div id="info-column" className="column">
          <div id="info-card" className="card is-shadowless">
            <header className="card-header is-shadowless">
              <p class="card-header-title is-centered is-size-3">{props.name}</p>
              <div className="card-header-icon">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={'times-circle'}
                    onClick={props.closeInfo}
                  />
                </span>
              </div>
            </header>
            <section className="section">
              <div className="card-content">
                <div className="content has-text-left">
                  {props.summary}
                </div>
              </div>
            </section>
            <p className="card-header-title is-centered is-size-3">
              Technologies
            </p>
            <section className="section tech-stack">
              <div className="columns is-gapless">
             {props.techArray.map(tech =>(
                <div className="column">
                  <img src={tech} alt=""/>
                </div>))               
              }
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoApp
