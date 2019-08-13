import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dreyfus-table.css'

const SkillTable = props => {
  return (
    <section>
      <div className="columns is-gapless">
        <div className="column">
          <div id="dreyfus-table-card" className="card">
            <header className="card-header">
              <p className="card-header-title is-centered has-text-white is-uppercase is-size-5">
                A Five-Stage Model of the Mental Activities Involved in Directed
                Skill Acquisition by Stuart E. Dreyfus & Hubert L. Dreyfus
              </p>
              <span className="card-header-icon">
                <FontAwesomeIcon
                  id="dreyfus-table-close"
                  icon={'times-circle'}
                  color={'white'}
                  onClick={props.closeTable}
                />
              </span>
            </header>
            <div className="card-content">
              <div className="table-container">
                <table id="dreyfus-table" class="table is-bordered is-narrow has-text-white">
                  <thead>
                    <tr>
                      <th className="has-text-white is-uppercase">Mental Function</th>
                      <th className="has-text-white is-uppercase">Novice</th>
                      <th className="has-text-white is-uppercase">Competent</th>
                      <th className="has-text-white is-uppercase">Proficient</th>
                      <th className="has-text-white is-uppercase">Expert</th>
                      <th className="has-text-white is-uppercase">Master</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="has-text-white is-uppercase">Recollection</th>
                      <td>Non-situational</td>
                      <td>Situational</td>
                      <td>Situational</td>
                      <td>Situational</td>
                      <td>Situational</td>
                    </tr>
                    <tr>
                      <th className="has-text-white is-uppercase">Recognition</th>
                      <td>Decomposed</td>
                      <td>Decomposed</td>
                      <td>Holistic</td>
                      <td>Holistic</td>
                      <td>Holistic</td>
                    </tr>
                    <tr>
                      <th className="has-text-white is-uppercase">Decision</th>
                      <td>Analytical</td>
                      <td>Analytical</td>
                      <td>Analytical</td>
                      <td>Intuitive</td>
                      <td>Intuitive</td>
                    </tr>
                    <tr>
                      <th className="has-text-white is-uppercase">Awareness</th>
                      <td>Monitoring</td>
                      <td>Monitoring</td>
                      <td>Monitoring</td>
                      <td>Monitoring</td>
                      <td>Absorbed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>
              <a
                href="https://apps.dtic.mil/dtic/tr/fulltext/u2/a084551.pdf"
                alt="report"
                target="_blank"
                rel="noopener noreferrer"
                className="button is-outlined has-text-bold"
                id="researchButton"
              >
              Research Report
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillTable