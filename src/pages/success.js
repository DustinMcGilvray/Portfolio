import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './success.css'

const Success = () => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <div id="success-card">
      <div className="success-container">
        <h1 className="title has-text-white">Your Message Was Submitted Successfully!</h1>
        <section className="section">
        <span className="image main">
          <FontAwesomeIcon icon={'check'} size="4x" color="white" />
        </span>
        </section>
        <p className="subtitle has-text-white">I will contact you back within 48 hours. In the meantime, please continue to explore the site.</p>
        <section className="section"> 
        <Link to="/">
        <span className="icon">
          <FontAwesomeIcon icon={'home'} size={'2x'} color="white" />
        </span>
      </Link>
        </section>

        </div>
    </div>
  </Layout>
)

export default Success
