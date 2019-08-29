import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './code-summary-mobile.css'

const MobileCodeSummary = props => (
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
          <footer className="card-footer">
            <div className="card-footer-item">
              <button
                id="table-button"
                className="button is-primary is-fullwidth"
                onClick={props.showSkills}
              >
                Code Skills
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
)

export default MobileCodeSummary
