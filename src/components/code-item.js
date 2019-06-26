import React from 'react'
import Gauge from '../components/gauges'
import './code-item.css'

const CodeItem = props => (
  <div className="column is-one-fifth">
    <div className="logo-card">
    <img className="tech-image" src={props.image} alt={props.alt}/>
      <div className="logo-overlay">
        <div class="skill-label">
          <div>{props.name}</div>
        </div>
        <Gauge number={props.number} />
      </div>
    </div>
  </div>
)
export default CodeItem
