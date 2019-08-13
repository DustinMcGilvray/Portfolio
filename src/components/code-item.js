import React from 'react'
import Gauge from '../components/gauges'
import './code-item.css'

const CodeItem = props => (
  <div className="column is-one-fifth">
    <div className="logo-card">
      <img className="tech-image" src={props.image} alt={props.alt} />
      <div className="logo-overlay">
        <div class="skill-label">
          <div>{props.name}</div>
        </div>
        <span className="is-hidden-mobile">
          <Gauge number={props.number}/>
          </span>
          <p className="is-hidden-desktop skill-number">{props.number}</p>
          <div className="skill-level is-hidden-desktop">
        {(() => {
          switch (props.number) {
            case '1':
              return 'Novice'
            case '2':
              return 'Competent'
            case '3':
              return 'Proficient'
            case '4':
              return 'Expert'
            case '5':
              return 'Master'
            default:
              return 'Willing to Learn'
          }
        })()}
      </div>
        </div>
    </div>
  </div>
)
export default CodeItem