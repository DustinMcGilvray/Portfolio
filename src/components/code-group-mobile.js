import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CodeGroup from "../components/code-group"
import './code-group-mobile.css'

const MobileCodeGroup = (props) => (
<div id="skills-side" className="card">
    <header className="card-header is-shadowless">
    <p id="code-group-header" className="card-header-title is-centered has-text-white is-size-4 custom-header">Code Skills</p>
    <div id="custom-header-icon" className="card-header-icon">
      <ul id="custom-icon" className="icon">
        <li><FontAwesomeIcon icon={'times-circle'} color="white" onClick={props.closeSkills}/></li>
      </ul>
  </div>
    </header>
    <div id="code-group-content" className="card-content">
    <CodeGroup/>
    </div>
</div>
)

export default MobileCodeGroup