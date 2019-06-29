import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from '../files/dustin_mcgilvray_resume.pdf'
import CoverLetter from '../files/dustin_mcgilvray_coverletter.pdf'
import './doc-group.css'

const DocGroup = (props) => (
  <div className="columns is-gapless is-multiline">
    <div className="column is-full">
      <figure id="resume-card" className="card is-shadowless effect-oscar">
        <figcaption>
          <h2>
            Res<span>ume</span>
          </h2>
          <section className="section">
            <div className="columns is-gapless">
              <div className="column">
                <p>
                  <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={'file-pdf'}
                      color={'white'}
                      size={'lg'}
                    />
                  </a>
                </p>
              </div>
              <div className="column">
                <p>
                    <div onClick={props.showResume}>
                        <FontAwesomeIcon icon={'image'} color={'white'} size={'lg'} />
                    </div>
                </p>
              </div>
            </div>
          </section>
        </figcaption>
      </figure>
    </div>
    <div className="column is-half">
      <figure id="cover-letter-card" className="card is-shadowless effect-oscar">
        <figcaption>
          <h2>
            Cover<span>Letter</span>
          </h2>
          <section className="section">
            <div className="columns is-gapless">
              <div className="column">
                <p>
                  <a
                    href={CoverLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={'file-pdf'}
                      color={'white'}
                      size={'lg'}
                    />
                  </a>
                </p>
              </div>
              <div className="column">
                <p>
                    <div onClick={props.showCoverLetter}>
                        <FontAwesomeIcon icon={'image'} color={'white'} size={'lg'} />
                    </div>
                </p>
              </div>
            </div>
          </section>
        </figcaption>
      </figure>
    </div>
    <div className="column is-half">
      <figure id="npm-resume-card" className="card is-shadowless effect-oscar">
        <figcaption>
          <h2>
            NPM<span>Resume</span>
          </h2>
          <section className="section">
            <div className="columns is-gapless">
              <div className="column">
                <p>
                  <a
                    href="https://www.npmjs.com/package/dustinmcgilvray_resume"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'npm']}
                      color={'white'}
                      size={'2x'}
                    />
                  </a>
                </p>
              </div>
            </div>
          </section>
        </figcaption>
      </figure>
    </div>
  </div>
)

export default DocGroup
