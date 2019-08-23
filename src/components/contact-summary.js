import React from 'react'
import './contact-summary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//TODO: Write better verbage for Contact

const ContactSummary = (props) => (
  <div id="contact-summary-card" className="card is-shadowless">
    <div className="card-content">
      <h1 className="title is-centered has-text-white">
        Get in Touch with Me!
      </h1>
      <p className="subtitle has-text-white">
        I am interested in opportunities... I will respond within 48hrs...
      </p>
      <ul>
        <li className="has-text-white">
          <span className="icon contact-icon">
            <a href="tel:254-640-2904">
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
            </a>
          </span>
          <span className="is-hidden-mobile">254.640.2904</span>
        </li>
        <li className="has-text-white">
          <span className="icon contact-icon">
          <a href="mailto:dustinmcgilvray@gmail.com?subject=Loved%20Your%20Portfolio&" target="_top">
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
            </a>
          </span>
          <span className="is-hidden-mobile">dustinmcgilvray@gmail.com</span>
        </li>
        <li className="has-text-white">
          <span className="icon contact-icon">
            <a href="https://github.com/DustinMcGilvray" target="__blank">
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
            </a>
          </span>
          <span className="is-hidden-mobile">DustinMcGilvray</span>
        </li>
        <li className="has-text-white">
          <span className="icon contact-icon">
            <a href="https://linkedin.com/in/dustinmcgilvray" target="__blank">
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
            </a>
          </span>
          <span className="is-hidden-mobile">dustinmcgilvray</span>
        </li>
      </ul>
    </div>
    <footer id="contact-summary-footer" className="card-footer is-hidden-desktop">
      <span className="card-footer-item">
        <button className="button is-outlined is-fullwidth" onClick={props.showContactForm}>
          Contact Form
        </button>
      </span>
    </footer>
  </div>
)

export default ContactSummary
