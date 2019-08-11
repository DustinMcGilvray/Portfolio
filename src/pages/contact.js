import React, { Component } from 'react'
import Layout from '../components/layout'
import ContactSummary from '../components/contact-summary'
import ContactForm from '../components/contact-form'
import './contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isContactInfoHidden: false,
      isContactFormHidden: true,
    }
  }

  showContactForm = () => {
    this.setState({
      ...this.state,
      isContactInfoHidden: true,
      isContactFormHidden: false,
    })
  }

  closeContactForm = () => {
    this.setState({
      ...this.state,
      isContactInfoHidden: false,
      isContactFormHidden: true,
    })
  }

  render() {
    return (
      <Layout>
        <div id="contact-card" className="card is-shadowless">
          <div className="columns is-gapless ">
            <div className="column is-hidden-mobile">
              <ContactSummary />
            </div>
            <div className="column is-hidden-desktop">
              {this.state.isContactFormHidden && (
                <ContactSummary showContactForm={this.showContactForm} />
              )}
              {this.state.isContactInfoHidden && (
                <ContactForm closeContactForm={this.closeContactForm} />
              )}
            </div>
            <div className="column is-hidden-mobile">
              <ContactForm />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
