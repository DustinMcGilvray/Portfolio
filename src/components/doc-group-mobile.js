import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from '../files/dustin_mcgilvray_resume.pdf'
import CoverLetter from '../files/dustin_mcgilvray_coverletter.pdf'
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
    <div className="card-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        consequatur maxime et a officia, laborum deserunt quod. Excepturi
        mollitia eveniet qui tempore doloremque, eius rerum natus corporis
        soluta quisquam dolorem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quia consequatur cumque ratione deleniti possimus
        voluptate soluta at id molestiae, fugit modi odio fuga pariatur tempora
        quibusdam facere.
      </p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <div className="columns is-gapless is-multiline is-mobile">
          <div className="column">
            <p className="custom-doc-label">Resume</p>
          </div>
          <div className="column is-half">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={'file-pdf'} color={'white'} size={'lg'} />
            </a>
          </div>
          <div className="column is-half">
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
            <p className="custom-doc-label">CoverLetter</p>
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
