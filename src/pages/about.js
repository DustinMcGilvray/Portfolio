import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './about.css'

const AboutMePage = () => (
  <Layout>
    <div id="about-card" className="card">
      <div id="word-about">About</div>
      <section>
        <div className="columns is-gapless">
          <div className="column">
            <Link to='/bio'>
              <div id="about-bio" className="card about-card">
                <h1 className="about-card-title-bio">BIO</h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column">
            <Link to='/craft'>
              <div id="about-craft" className="card about-card">
                <h1 className="about-card-title-craft">CRAFT</h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column">
            <Link to='/code'>
              <div id="about-code" className="card about-card">
                <h1 className="about-card-title-code">CODE</h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="columns is-gapless">
          <div className="column">
            <Link to='/docs'>
              <div id="about-docs" className="card about-card">
                <h1 className="about-card-title-docs">DOCS</h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default AboutMePage
