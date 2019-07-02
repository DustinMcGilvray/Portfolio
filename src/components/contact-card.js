import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contact-card.css'

const ContactCard = () => (
  <div className="columns is-gapless">
    <div className="column">
      <div className="card is-shadowless">
        <span id="contact-icon" className="icon">
          <a
            href="https://github.com/DustinMcGilvray"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
        </span>
      </div>
    </div>
    <div className="column">
      <div className="card is-shadowless">
        <span id="contact-icon" className="icon">
          <a
            href="https://linkedin.com/in/dustinmcgilvray"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
          </a>
        </span>
      </div>
    </div>
    {/*Contact Form Icon */}
    <div className="column">
      <div className="card is-shadowless">
        <span id="contact-icon" className="icon">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="file-alt" size="2x" />
          </a>
        </span>
      </div>
    </div>
  </div>
)

export default ContactCard
