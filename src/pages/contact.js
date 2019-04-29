import React from 'react'
import Layout from '../components/layout'
import ContactCard from '../components/contact-card'
import ContactForm from '../components/contact-form'
import './contact.css'

const Contact = () => (
  <Layout>
    <div id="contact-all" className="card">
    <div id="word-contact">Contact Me
    </div>
        <ContactCard />
        <ContactForm />
      </div>
  </Layout>
)

export default Contact
