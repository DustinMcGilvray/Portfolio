import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import ContactRadial from '../components/contact-radial'
import './contact.css'

const Contact = () => (
  <Layout>
    <div id="contact-all" className="card">
    <div id="word-contact">Contact Me
    </div>
        <ContactForm />
        <ContactRadial />
      </div>
  </Layout>
)

export default Contact
