import React from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './project-item.css'

const ProjectItem = props => (
  <div id="info-card" className="card">
    <figure className="card effect-terry">
      <img src={props.image} alt={props.alt} />
      <figcaption>
        <h2>{props.name}</h2>
        <p>
          <div className="icon-link">
            <Tippy
              content="GitHub"
              className="GitHub"
              placement="right-end"
              arrow="true"
            >
              <span className="icon">
                <a href={props.repo} target="__blank">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size="md"
                    color="white"
                  />
                </a>
              </span>
            </Tippy>
          </div>
        </p>
        <p>
          <div className="icon-link">
            <Tippy
              content="Play"
              className="Play"
              placement="right-end"
              arrow="true"
            >
              <span className="icon" onClick={props.showCLI}>
                <a href={props.play} target="__blank">
                  <FontAwesomeIcon icon="play-circle" size="md" color="white" />
                </a>
              </span>
            </Tippy>
          </div>
        </p>
        <p>
          <div className="icon-link">
            <Tippy
              content="Info"
              className="Info"
              placement="right-end"
              arrow="true"
            >
              <span className="icon" onClick={props.showInfo}>
                <FontAwesomeIcon icon="info-circle" size="md" color="white" />
              </span>
            </Tippy>
          </div>
        </p>
      </figcaption>
    </figure>
  </div>
)

export default ProjectItem
