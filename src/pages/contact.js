import React, { Component } from 'react'
import Layout from '../components/layout'
import ContactSummary from '../components/contact-summary'
import ContactForm from '../components/contact-form'
import './contact.css'

class Contact extends Component {

  render() {
    return (
      <Layout>
        <div id="contact-card" className="card is-shadowless">
          <div className="columns is-gapless">
            <div id="contact-summary-side" className="column">
              <ContactSummary/>
              </div>
            <div id="contact-side" className="column">
            <div className="columns is-gapless">
            <div className="column">
              <ContactForm/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
