import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './code-summary-mobile.css'

/*TODO: Fill in Coding Summary*/

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
          <p className="content has-text-white">
            Place some verbage here about coding and stuff. All kinds of stuff
            about my coding skills. Syntactical Sugar. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Modi consequatur maxime et a
            officia, laborum deserunt quod. Excepturi mollitia eveniet qui
            tempore doloremque, eius rerum natus corporis soluta quisquam
            dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
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