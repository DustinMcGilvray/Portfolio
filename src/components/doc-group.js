import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './doc-group.css'

const DocGroup = () => (
  <div className="columns is-gapless is-multiline">
    <div className="column is-full">
      <div id="resume-card" className="card">
      <div id="resume-card-content" class="card-content">
        <p class="content">
          Resume
        </p>
      </div>
      <footer class="card-footer docs-card-footer">
        <p class="card-footer-item">
          Download PDF
          <div className="card-header-icon">
            <span className="icon">
            <FontAwesomeIcon icon={'file-pdf'} />
            </span>
          </div>
        </p>
        <p class="card-footer-item">
         View PNG
        </p>
      </footer>
      </div>
    </div>
    <div className="column is-half">
      <div id="cover-letter-card" className="card">
      <div id="cover-letter-content" class="card-content">
      <p class="content">
        NPM Resume
      </p>
    </div>
    <footer class="card-footer docs-card-footer">
      <p class="card-footer-item">
        Download PDF
        <div className="card-header-icon">
          <span className="icon">
          <FontAwesomeIcon icon={'file-pdf'} />
          </span>
        </div>
      </p>
      <p class="card-footer-item">
       View PNG
      </p>
    </footer>
      </div>
    </div>
    <div className="column is-half">
      <div id="npm-resume-card" className="card">
      <div id="npm-resume-content" class="card-content">
      <p class="content">
        Cover Letter
      </p>
    </div>
    <footer class="card-footer docs-card-footer">
      <p class="card-footer-item">
        Download PDF
        <div className="card-header-icon">
          <span className="icon">
          <FontAwesomeIcon icon={'file-pdf'} />
          </span>
        </div>
      </p>
      <p class="card-footer-item">
       View PNG
      </p>
    </footer>
      </div>
    </div>
  </div>
)

export default DocGroup
