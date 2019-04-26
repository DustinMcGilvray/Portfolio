import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy, { TippyGroup } from '@tippy.js/react'

import './contact-card.css'

const ContactCard = () => (
  <div id="contact-card" className="card">
    <header className="card-header">
      <p className="card-header-title">Contact Me</p>
    </header>
    <div className="card-content">
      <div className="content" />
    </div>
    <footer className="card-footer">
      <TippyGroup delay={1000}>
        <div className="card-footer-item">
          <Tippy
            placement="left-end"
            arrow="true"
            content="Github"
            className="Github"
          >
            <span className="icon">
              <a href="https://github.com/DustinMcGilvray" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></a>
            </span>
          </Tippy>
        </div>
        <div className="card-footer-item">
          <Tippy
            content="LinkedIn"
            className="LinkedIn"
            placement="left-end"
            arrow="true"
          >
            <span className="icon">
              <a href="https://linkedin.com/in/dustinmcgilvray" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" /></a>
            </span>
          </Tippy>
        </div>
      </TippyGroup>
    </footer>
  </div>
)

export default ContactCard
