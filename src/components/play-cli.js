import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './play-cli.css'

const AppCLI = props => {
  return (
    <div>
      <div className="columns is-gapless">
        <div id="cli-column" className="column">
          <div id="info-card" className="card is-shadowless">
            <header className="card-header is-shadowless">
              <p class="card-header-title is-centered is-size-3">{props.titleCLI}</p>
              <div className="card-header-icon">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={'times-circle'}
                    onClick={props.closeCLI}
                  />
                </span>
              </div>
            </header>
            <section className="section">
              <div className="card-content">
                <div className="content has-text-left">
                  This is a Command Line Interface Application and requires it to be run from the 
                  Command Line or Terminal. Please visit the GitHub Repository and follow the instillation
                  steps located in the ReadMe to use the app. 
                </div>
              </div>
              <a href={props.repoCLI} target="__blank">
              <FontAwesomeIcon
                  icon={['fab', 'github']}
                  size="5x"
                  color="black"
              />
          </a>
            </section>
            <p className="card-header-title is-centered is-size-3">
              Technologies
            </p>
            <section className="section tech-stack">
              <div className="columns is-gapless">
                <div className="column">
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            size="3x"
                            color="black"
                        />
                </div>
                <div className="column">
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            size="3x"
                            color="black"
                        />
                </div>
                <div className="column">
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            size="3x"
                            color="black"
                        />
                </div>
                <div className="column">
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            size="3x"
                            color="black"
                        />
                </div>
                <div className="column">
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            size="3x"
                            color="black"
                        />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppCLI