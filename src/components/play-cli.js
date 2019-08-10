import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './play-cli.css'

const AppCLI = props => {
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
                onClick={props.closeCLI}
              />
            </span>
          </div>
        </header>
        <section className="section">
          <div className="card-content">
            <div className="content is-centered has-text-white">
              This is a Command Line Interface Application and requires it to be
              run from the Command Line or Terminal. Please visit the GitHub
              Repository and follow the instillation steps located in the ReadMe
              to use the app.
            </div>
          </div>
          <a href={props.repo} target="__blank">
            <FontAwesomeIcon icon={['fab', 'github']} size="5x" color="white" />
          </a>
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

export default AppCLI