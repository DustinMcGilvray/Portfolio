import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from '../files/dustin_mcgilvray_resume.pdf'
import CoverLetter from '../files/dustin_mcgilvray_coverletter2.pdf'
import './doc-group-mobile.css'

const MobileDocGroup = props => (
  <div id="mobile-doc-summary-card" className="card">
    <header className="card-header is-shadowless">
      <p class="card-header-title is-centered is-size-3 has-text-white custom-header">
        DOCUMENTS
      </p>
      <div className="card-header-icon">
        <Link to="/about">
          <span className="icon">
            <FontAwesomeIcon icon={'chevron-circle-left'} color="white" />
          </span>
        </Link>
      </div>
    </header>
    <div className="card-content has-text-white has-text-weight-bold">
      <p>
        My background in Fine Arts gives me an edge in crafting websites and
        applications that are aesthetically and compositionally sound; while my
        experience in Management and Entrepreneurship provides problem solving
        and communication skills that make me an ideal fit for a career in
        building amazing applications and websites.
      </p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <div className="columns is-gapless is-multiline is-mobile">
          <div className="column">
            <p className="has-text-white has-text-weight-bold custom-doc-label">Resume</p>
          </div>
          <div className="column is-half doc-link">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={'file-pdf'} color={'white'} size={'lg'} />
            </a>
          </div>
          <div className="column is-half has-text-white">
            <div onClick={props.showResume}>
              <FontAwesomeIcon
                icon={'image'}
                color={'white'}
                size={'lg'}
                className="image-pointer"
              />
            </div>
          </div>
        </div>
      </p>
      <p className="card-footer-item">
        <div className="columns is-gapless is-multiline is-mobile">
          <div className="column">
            <p className="has-text-white has-text-weight-bold custom-doc-label">CoverLetter</p>
          </div>
          <div className="column is-half">
            <a href={CoverLetter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={'file-pdf'} color={'white'} size={'lg'} />
            </a>
          </div>
          <div className="column is-half">
            <div className="image-pointer" onClick={props.showCoverLetter}>
              <FontAwesomeIcon icon={'image'} color={'white'} size={'lg'} />
            </div>
          </div>
        </div>
      </p>
    </footer>
  </div>
)

export default MobileDocGroup
