import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './about.css'

const AboutMePage = () => (
  <Layout>
    <div id="about-card" className="card">
      <div className="columns is-gapless">

        <div id="headshot-side" className="column is-half is-hidden-mobile">
          <div id="word-about">About</div>
        </div>

        <div className="column is-half">
          <div className="columns is-gapless is-multiline">
            <div className="column is-12 container-bio">
              <Link to="/bio">
                <div id="about-bio" className="card about-card">
                  <h1 className="about-card-title-bio">BIO</h1>
                  <div class="overlay-bio">
                    <div class="text">Who I am and What I do</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column is-12 container-craft">
              <Link to="/craft">
                <div id="about-craft" className="card about-card">
                  <h1 className="about-card-title-craft">CRAFT</h1>
                  <div class="overlay-craft">
                    <div class="text">Craft Knowledge</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column is-12 container-code">
              <Link to="/code">
                <div id="about-code" className="card about-card">
                  <h1 className="about-card-title-code">CODE</h1>
                  <div class="overlay-code">
                    <div class="text">All about Code</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column is-12 container-docs">
              <Link to="/docs">
                <div id="about-docs" className="card about-card">
                  <h1 className="about-card-title-docs">DOCS</h1>
                  <div class="overlay-docs">
                    <div class="text">Resume, Cover Letter, and More Stuff</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default AboutMePage
