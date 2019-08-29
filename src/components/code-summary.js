import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './code-summary.css'

const CodeSummary = props => (
  <div className="columns is-gapless">
    <div className="column">
      <div id="code-summary-card" className="card">
        <header className="card-header is-shadowless">
          <p className="card-header-title is-centered is-size-3 has-text-white custom-header">
            CODE
          </p>
          <div className="card-header-icon">
            <Link to="/about">
              <span className="icon">
                <FontAwesomeIcon icon={'chevron-circle-left'} color="white" />
              </span>
            </Link>
          </div>
        </header>
        <div className="card-content" onClick={props.showTable}>
          <p className="content has-text-white has-text-weight-bold">
            My love of building, creating, and structure, as evidenced by my
            love of Lego, is what drew me to coding. My passion for coding is
            born of the allowance this field affords me to meld the creative
            aspects of my personality with the analytical; giving me a conduit
            to thrive on the challenge of creating code that transforms into a
            visual representation of my craft.
          </p>
          <p className="content has-text-white has-text-weight-bold">
            With my unique MFA background complemented by web development
            certificate and management expertise, I am a creative thinker who is
            meticulously detail oriented and problem solving proficient. This
            enables me to research, adjust, and innovate in all areas from idea
            development, to implementation, and final deliverables.
          </p>
          <p className="content has-text-white has-text-weight-bold">
            In an effort to quantify a typically descriptive skill,
            demonstrating my analytical thinking, I have chosen the Dreyfus
            Model of Skill Acquisition for my programming language proficiency.
          </p>
        </div>
        <footer className="card-footer is-hidden-mobile">
          <div className="card-footer-item">
            <button
              id="table-button"
              className="button is-primary is-fullwidth"
              onClick={props.showTable}
            >
              Skill Table
            </button>
          </div>
        </footer>
        <footer className="card-footer is-hidden-desktop">
          <div className="card-footer-item">
            <button
              id="table-button"
              className="button is-primary is-fullwidth"
              onClick={props.showCodeGroup}
            >
              Code Skills
            </button>
          </div>
        </footer>
      </div>
    </div>
  </div>
)

export default CodeSummary
