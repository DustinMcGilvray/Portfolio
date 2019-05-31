import React from 'react'
import Layout from '../components/layout'
import Resume from '../files/dustin_mcgilvray_resume.pdf'
import CoverLetter from '../files/dustin_mcgilvray_coverletter.pdf'
import './docs.css'

const MyDocs = () => (
  <Layout>
    <div id="docs-card" className="card">
      <section>
        <div className="columns is-gapless">
          <div className="column container-resume-pdf">
            <figure className="document-card effect-oscar">
              <img src={require('../images/file_vault_bw.png')} alt="" />
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <figcaption>
                  <h2>
                    PDF<span>Resume</span>
                  </h2>
                  <p>Take a moment to review my credentials!</p>
                </figcaption>
              </a>
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column container-resume-npm">
            <figure className="document-card effect-oscar">
              <img src={require('../images/file_vault_bw.png')} alt="" />
              <a
                href="https://www.npmjs.com/package/dustinmcgilvray_resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figcaption>
                  <h2>
                    NPM<span>Resume</span>
                  </h2>
                  <p>Here is Resume as a CLI App Packaged as an NPM Module!</p>
                </figcaption>
              </a>
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column container-coverletter-pdf">
            <figure className="document-card effect-oscar">
              <img src={require('../images/file_vault_bw.png')} alt="" />
              <a href={CoverLetter} target="_blank" rel="noopener noreferrer">
                <figcaption>
                  <h2>
                    PDF<span>Cover Letter</span>
                  </h2>
                  <p>Take a Moment to Read my Cover Letter!</p>
                </figcaption>
              </a>
            </figure>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default MyDocs
