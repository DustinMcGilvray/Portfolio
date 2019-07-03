import React from 'react'
import './contact-summary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactSummary = () => (
  <div id="contact-summary-card" className="card is-shadowless">
    <div className="card-content">
      <h1 className="title is-centered has-text-white">Get in Touch with Me!</h1>
      <p className="subtitle has-text-white">
        I am interested in opportunities... I will respond within 48hrs...     
      </p>
      <ul>
        <li className="has-text-white">
          <span className="icon contact-icon">
            <FontAwesomeIcon icon="phone" color="white" size="lg" />
          </span>
          254.640.2904
        </li>
      </ul>
      <ul>
        <li className="has-text-white">
          <span className="icon contact-icon">
            <FontAwesomeIcon icon="envelope" color="white" size="lg" />
          </span>
            dustinmcgilvray@gmail.com
        </li>
      </ul>
      </div> 
    <footer id="contact-summary-footer" className="card-footer">
      <a
        href="https://github.com/DustinMcGilvray"
        className="card-footer-item"
        target="__blank"
      >
        <FontAwesomeIcon icon={['fab', 'github']} color="white" size="2x" />
      </a>
      <a
        href="https://linkedin.com/in/dustinmcgilvray"
        className="card-footer-item"
        target="__blank"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="2x" />
      </a>
      <a
        href="https://codepen.io/dustinmcgilvray/"
        className="card-footer-item"
        target="__blank"
      >
        <FontAwesomeIcon icon={['fab', 'codepen']} color="white" size="2x" />
      </a>
    </footer>
  </div>
)

export default ContactSummary
