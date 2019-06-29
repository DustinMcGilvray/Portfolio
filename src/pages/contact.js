import React, { Component } from 'react'
import Layout from '../components/layout'
// import ContactRadial from '../components/contact-radial'
import './contact.css'

class Contact extends Component {

  render(){
    return(

      <Layout>
        <div id="contact-all" className="card">
        <div className="columns is-gapless">
        <div id="word-contact">Contact</div>
            <div id="left-side" className="column is-half">
            </div>
    
            <div id="right-side" className="column is-half">
              <div id="right-content">
               
              </div>
            </div>
    
          </div>
        </div>
      </Layout>
    )
  }
}


export default Contact
