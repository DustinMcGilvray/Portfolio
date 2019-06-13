import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dreyfus-table.css'

const SkillTable = props => {
  return (
  <section>
    <div className="columns is-gapless">
      <div className="column">
        <div id="dreyfus-table-card" className="card">
          <header className='card-header'>
            <p className='card-header-title is-centered'>
              A Five-Stage Model of the Mental Activities Involved in Directed
              Skill Acquisition
          by
            Stuart E. Dreyfus & Hubert L. Dreyfus
            </p>
            <span className='card-header-icon'>
              <FontAwesomeIcon id="dreyfus-table-close" icon={"times-circle"} onClick={props.closeTable}/>
            </span>
          </header>
          <div className="card-content">
            <div className="table-container">
              <table id="dreyfus-table" class="table is-bordered is-narrow">
                <thead>
                  <tr>
                    <th>Mental Function</th>
                    <th>Novice</th>
                    <th>Competent</th>
                    <th>Proficient</th>
                    <th>Expert</th>
                    <th>Master</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Recollection</th>
                    <td>Non-situational</td>
                    <td>Situational</td>
                    <td>Situational</td>
                    <td>Situational</td>
                    <td>Situational</td>
                  </tr>
                  <tr>
                    <th>Recognition</th>
                    <td>Decomposed</td>
                    <td>Decomposed</td>
                    <td>Holistic</td>
                    <td>Holistic</td>
                    <td>Holistic</td>
                  </tr>
                  <tr>
                    <th>Decision</th>
                    <td>Analytical</td>
                    <td>Analytical</td>
                    <td>Analytical</td>
                    <td>Intuitive</td>
                    <td>Intuitive</td>
                  </tr>
                  <tr>
                    <th>Awareness</th>
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
