import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from '../files/dustin_mcgilvray_resume.pdf'
import CoverLetter from '../files/dustin_mcgilvray_coverletter.pdf'
import './doc-group.css'

const DocGroup = () => (
  <div className="columns is-gapless is-multiline">
    <div className="column is-full">
      <div id="resume-card" className="card is-shadowless">
        <div id="resume-card-content" class="card-content">
          <p class="content doc-name">Resume</p>
        </div>
        <footer class="card-footer docs-card-footer">
          <p class="card-footer-item">
            <div className="card-header-icon">
              <span className="icon">
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={'file-pdf'}
                  color={'white'}
                  size={'2x'}
                />
                </a>
              </span>
            </div>
          </p>
          <p class="card-footer-item">
            <div className="card-header-icon">
              <span className="icon">
                <FontAwesomeIcon icon={'image'} color={'white'} size={'2x'} />
              </span>
            </div>
          </p>
        </footer>
      </div>
    </div>
    <div className="column is-half">
      <div id="cover-letter-card" className="card is-shadowless">
        <div id="cover-letter-content" class="card-content">
          <p className="content doc-name">Cover Letter</p>
        </div>
        <footer class="card-footer docs-card-footer">
          <p className="card-footer-item">
            <div className="card-header-icon">
              <span className="icon">
              <a href={CoverLetter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={'file-pdf'}
                  color={'white'}
                  size={'2x'}
                />
                </a>
              </span>
            </div>
          </p>
          <p className="card-footer-item">
            <div className="card-header-icon">
              <span className="icon">
                <FontAwesomeIcon icon={'image'} color={'white'} size={'2x'} />
              </span>
            </div>
          </p>
        </footer>
      </div>
    </div>
    <div className="column is-half">
      <div id="npm-resume-card" className="card is-shadowless">
        <div id="npm-resume-content" class="card-content">
          <p className="content doc-name">NPM Resume</p>
        </div>
        <footer className="card-footer docs-card-footer">
          <p className="card-footer-item">
            <div className="card-header-icon">
              <span className="icon">
              <a href="https://www.npmjs.com/package/dustinmcgilvray_resume" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={['fab', 'npm']}
                  color={'white'}
                  size={'3x'}
                />
                </a>
              </span>
            </div>
          </p>
        </footer>
      </div>
    </div>
  </div>
)

export default DocGroup
