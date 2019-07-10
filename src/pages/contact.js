import React, { Component } from 'react'
import { navigateTo } from "gatsby-link";
import Layout from '../components/layout'
import ContactSummary from '../components/contact-summary'
import ContactForm from '../components/contact-form'
import './contact.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

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
