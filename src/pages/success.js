import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
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
        <span className="image main">
          <FontAwesomeIcon icon={'check'} size="10x" color="white" />
        </span>
        <p className="subtitle has-text-white">I will contact you back within 48 hours</p>
      </div>
    </div>
  </Layout>
)

export default Success
