import React from 'react'
import './code-summary.css'

const CodeSummary = (props) => (
  <section>
    <div  className="columns is-gapless">
      <div className="column">
      <div id="code-summary-card" className="card">
      <div className="card-content" onClick={props.showTable}>
      <p>
        Place some verbage here about coding and stuff. All kinds of stuff
        about my coding skills. Syntactical Sugar
        </p>
        <button className="button is-primary is-inverted is-outlined is-fullwidth" onClick={props.showTable}>Skill Table</button>
      </div>
          </div>
      </div>
    </div>
  </section>
)

export default CodeSummary
