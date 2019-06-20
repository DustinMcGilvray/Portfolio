import React from 'react'
import Gauge from '../components/gauges'
import './skill-item.css'

const SkillItem = props => (
  <div className="column">
    <div id="html-skill" className="logo-card">
    <div className="logo-overlay">
      <div class="skill-label">
        <div>{props.skill}</div>
      </div>
      <Gauge number={props.number} />
    </div>
  </div>
  </div>
)

export default SkillItem