import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from '../files/dustin_mcgilvray_resume.pdf'
import CoverLetter from '../files/dustin_mcgilvray_coverletter.pdf'
import './docs.css'

const MyDocs = () => (
  <Layout>
    <div id="docs-card" className="card">
    <header className="card-header is-shadowless">
        <p class="card-header-title is-centered is-size-3 has-text-white">
          DOCS
        </p>
        <div className="card-header-icon">
          <Link to="/about">
            <span className="icon">
              <FontAwesomeIcon icon={'chevron-circle-left'} color="white" />
            </span>
          </Link>
        </div>
      </header>
      <section>
        <div className="columns is-gapless">
          <div className="column container-resume-pdf">
            <figure className="document-card effect-oscar">
              <figcaption>
                <h2>
                  PDF<span>Resume</span>
                </h2>
                <p>Take a moment to review my credentials!</p>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column container-resume-npm">
            <figure className="document-card effect-oscar">
              <figcaption>
                <h2>
                  NPM<span>Resume</span>
                </h2>
                <p>Here is Resume as a CLI App Packaged as an NPM Module!</p>
                <a href="https://www.npmjs.com/package/dustinmcgilvray_resume" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column container-coverletter-pdf">
            <figure className="document-card effect-oscar">
              <figcaption>
                <h2>
                  PDF<span>Cover Letter</span>
                </h2>
                <p>Take a Moment to Read my Cover Letter!</p>
                <a href={CoverLetter} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default MyDocs
