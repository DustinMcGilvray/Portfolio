import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './craft.css'

class MyCraft extends Component {
  render() {
    return (
      <Layout>
        <div id="craft-card" className="card">
          <header className="card-header is-shadowless">
            <p class="card-header-title is-centered is-size-3 has-text-white custom-header">
              CRAFT
            </p>
            <div className="card-header-icon">
              <Link to="/about">
                <span className="icon">
                  <FontAwesomeIcon icon={'chevron-circle-left'} color="white" />
                </span>
              </Link>
            </div>
          </header>
          <div className="card-content">
            <p className="content has-text-center has-text-white has-text-weight-bold">
              Craft is at the very center of everything I do. Traditionally
              trained as a Ceramicist, the practice of craft has been a
              life-long pursuit. Beginning as a young boy, I would build
              everything I could imagine out of a mountain of Lego. The array of
              shapes, sizes, colors, and organization are a seduction that still
              drives my attention today.
            </p>
            <p className="content has-text-center has-text-white has-text-weight-bold">
              When I describe something as well-crafted I believe it displays
              the attention to detail and well-practiced skill that I know was
              needed to create it by its craftsman. In fact, the word “Art” is
              derived from the Latin word “Ars” which means “Skill” itself.
              Whether my medium is clay or a computer screen, the pursuit of
              craft remains and much like pottery coding is a constant practice,
              I don’t have it figured out, but I continue to practice, learn,
              and create each day.
            </p>
          </div>
          <div className="section">
            <h2 className="has-text-white is-size-3 has-text-weight-bold">
              Gallery of Work
            </h2>
          </div>
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-narrow">
              <div id="craft-image-1" className="card" />
            </div>
            <div className="column is-narrow">
              <div id="craft-image-2" className="card" />
            </div>
            <div className="column is-narrow">
              <div id="craft-image-3" className="card" />
            </div>
            <div className="column is-narrow">
              <div id="craft-image-4" className="card" />
            </div>
            <div className="column is-narrow">
              <div id="craft-image-5" className="card" />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MyCraft
