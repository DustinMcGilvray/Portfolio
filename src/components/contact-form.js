import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contact-form.css'

const ContactForm = () => (
  <div className="columns is-centered">
    <div id="form-position" className="column is-half">
    <div id="form-card" className="card">
    <header className="card-header is-shadowless">
    <p className="card-header-title is-centered is-size-3 has-text-white">
      Contact Form
    </p>
    </header>
      <div id="contact-form-content" className="card-content">
      <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <p className="control is-expanded has-icons-left">
            <input className="input" type="text" placeholder="First Name"/>
            <span className="icon is-small is-left">
            <FontAwesomeIcon icon="user" size="sm"/>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Last Name"/>
            <span className="icon is-small is-left">
            <FontAwesomeIcon icon="user" size="sm"/>
            </span>
          </p>
        </div>
      </div>
      </div>
      <div className="field">
      <p className="control is-expanded has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Phone"/>
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon="phone" size="sm"/>
        </span>
      </p>
    </div>
      <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email"/>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="envelope" size="sm"/>
            </span>
          </p>
        </div>
        <div className="field">
        <p className="control">
        <textarea className="textarea" rows="10" placeholder="Send me a note!"></textarea>
        </p>
      </div>
      <button className="button is-outlined is-fullwidth">
      Send Message
      </button>
        </div>
     </div>
    </div>
  </div>
)

export default ContactForm
