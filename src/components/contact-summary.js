import React from 'react'
import './contact-summary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactSummary = props => (
  <div id="contact-summary-card" className="card is-shadowless">
    <header className="card-header">
      <h1 className="card-header-title is-centered has-text-white is-size-3">
        Let's Connect!
      </h1>
    </header>
    <p className="subtitle has-text-white">
      Get in touch with me through one of the methods below and I will respond
      within 48hrs. I look forward to connecting with you!
    </p>
    <div className="card-content">
      <ul>
        <a href="tel:254-640-2904">
          <li className="has-text-white contact-hover">
            <span className="icon contact-icon">
              <FontAwesomeIcon
                icon="phone"
                color="white"
                size="lg"
                className="is-hidden-mobile"
              />
              <FontAwesomeIcon
                icon="phone"
                color="white"
                size="2x"
                className="is-hidden-desktop"
              />
            </span>
            <span className="is-hidden-mobile">254.640.2904</span>
          </li>
        </a>
        <a
          href="mailto:dustinmcgilvray@gmail.com?subject=Loved%20Your%20Portfolio&"
          target="_top"
        >
          <li className="has-text-white contact-hover">
            <span className="icon contact-icon">
              <FontAwesomeIcon
                icon="envelope"
                color="white"
                size="lg"
                className="is-hidden-mobile"
              />
              <FontAwesomeIcon
                icon="envelope"
                color="white"
                size="2x"
                className="is-hidden-desktop"
              />
            </span>
            <span className="is-hidden-mobile">dustinmcgilvray@gmail.com</span>
          </li>
        </a>
        <a href="https://github.com/DustinMcGilvray" target="__blank">
          <li className="has-text-white contact-hover">
            <span className="icon contact-icon">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="white"
                size="lg"
                className="is-hidden-mobile"
              />
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="white"
                size="2x"
                className="is-hidden-desktop"
              />
            </span>
            <span className="is-hidden-mobile">DustinMcGilvray</span>
          </li>
        </a>
        <a href="https://linkedin.com/in/dustinmcgilvray" target="__blank">
          <li className="has-text-white contact-hover">
            <span className="icon contact-icon">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                color="white"
                size="lg"
                className="is-hidden-mobile"
              />
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                color="white"
                size="2x"
                className="is-hidden-desktop"
              />
            </span>
            <span className="is-hidden-mobile">dustinmcgilvray</span>
          </li>
        </a>
      </ul>
    </div>
    <footer
      id="contact-summary-footer"
      className="card-footer is-hidden-desktop"
    >
      <span className="card-footer-item">
        <button
          className="button is-outlined is-fullwidth"
          onClick={props.showContactForm}
        >
          Contact Form
        </button>
      </span>
    </footer>
  </div>
)

export default ContactSummary
