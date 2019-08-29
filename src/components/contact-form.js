import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact-form.css'

/*https://codebushi.com/form-handling-gatsby-netlify/ */

const ContactForm = props => (
  <div id="form-card" className="card is-shadowless">
    <header className="card-header is-shadowless">
      <p className="card-header-title is-centered is-size-3 has-text-white">
        Contact Form
      </p>
      <span className="card-header-icon is-hidden-desktop">
        <FontAwesomeIcon
          id="contact-form-close"
          icon={'times-circle'}
          color={'white'}
          onClick={props.closeContactForm}
        />
      </span>
    </header>
    <div id="contact-form-content" className="card-content">
      <form name="contact" method="post" action="/success/" data-netlify="true">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="user" size="sm" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="user" size="sm" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left">
            <input
              className="input"
              type="phone"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="phone" size="sm" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left">
            <input
              className="input"
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="envelope" size="sm" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left">
            <input
              className="input"
              type="text"
              name="messageSubject"
              id="messageSubject"
              placeholder="Subject"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="question-circle" size="sm" />
            </span>
          </p>
        </div>
        <div className="field">
          <p>
            <textarea
              className="textarea is-hidden-mobile"
              rows="10"
              name="sentMessage"
              id="sentMessage"
              placeholder="Send me a note!"
            />
            <textarea
              className="textarea is-hidden-desktop"
              rows="7"
              name="sentMessage"
              id="sentMessage"
              placeholder="Send me a note!"
            />
          </p>
        </div>
        <button
          id="contact-form-submit-button"
          className="button is-outlined is-fullwidth"
          type="submit"
          value="Send Message"
          name="submitButton"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
)

export default ContactForm
