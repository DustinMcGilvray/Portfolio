import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './docs-summary.css'

const DocsSummary = () => (
  <section>
    <div className="columns is-gapless">
      <div className="column">
        <div id="doc-summary-card" className="card">
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
              My background in Fine Arts gives me an edge in crafting websites
              and applications that are aesthetically and compositionally sound;
              while my experience in Management and Entrepreneurship provides
              problem solving and communication skills that make me an ideal fit
              for a career in building amazing applications and websites.
            </p>
            </div>
            <div className="card-content has-text-white has-text-weight-bold">
            <p>
              I’m not looking for just a job, I have had plenty of those, this
              is a career for me. I want to be a part of a team that shares the
              comradery of the field while exhibiting the same appreciation for
              a work-life balance, a pursuit of craft, and a desire to build
              amazing deliverables. Please review my credentials and reach out
              to connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default DocsSummary
