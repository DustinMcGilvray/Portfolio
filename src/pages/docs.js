import React from 'react'
import Layout from '../components/layout'
import Resume from "../files/dustin_mcgilvray_resume.pdf"
import CoverLetter from "../files/dustin_mcgilvray_coverletter.pdf"
import './docs.css'

const MyDocs = () => (
  <Layout>
    <div id="docs-card" className="card">
      <section>
        <div className="columns is-gapless">
          <div className="column container-resume-pdf">
            <div id="doc-resume-pdf" className="card document-card">
              <h1 className="doc-card-resume-pdf">
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  Download My Resume
                </a>
              </h1>
              <div class="overlay-resume-pdf" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column container-resume-npm">
            <div id="doc-resume-pdf" className="card document-card">
              <h1 className="doc-card-resume-npm">
                  npm resume
              </h1>
              <div class="overlay-resume-pdf" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column container-coverletter-pdf">
            <div id="doc-coverletter-pdf" className="card document-card">
              <h1 className="doc-card-resume-pdf">
                <a href={CoverLetter} target="_blank" rel="noopener noreferrer">
                  Cover Letter PDF
                </a>
              </h1>
              <div class="overlay-coverletter-pdf" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default MyDocs
