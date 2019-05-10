import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import './contact.css'

const Contact = () => (
  <Layout>
    <div id="contact-all" className="card">
      <div className="columns is-gapless">
        <div id="left-side" className="column is-1">
          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div className="card icon-card">
                  <span className="icon contact-icon">
                    <a
                      href="https://github.com/DustinMcGilvray"
                      target="__blank"
                    >
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="3x"
                        color="red"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div className="card icon-card">
                  <span className="icon contact-icon">
                    <a
                      href="https://linkedin.com/in/dustinmcgilvray"
                      target="__blank"
                    >
                      <FontAwesomeIcon
                        icon={['fab', 'linkedin-in']}
                        size="3x"
                        color="red"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column ">
                <div className="card icon-card">
                  <span className="icon contact-icon">
                    <a
                      href="https://github.com/DustinMcGilvray"
                      target="__blank"
                    >
                      <FontAwesomeIcon
                        icon="comment-alt"
                        size="3x"
                        color="red"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div className="card icon-card">
                  <span className="icon contact-icon">
                    <a
                      href="mailto:dustinmcgilvray@gmail.com?subject=Loved%20your%20Portfolio%20Site!"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon="envelope" size="3x" color="red" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column ">
                <div className="card icon-card">
                  <span className="icon contact-icon">
                    <a
                      href="https://github.com/DustinMcGilvray"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon="phone" size="3x" color="red" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div className="card icon-card">
                  <span className="icon contact-icon">
                    <a
                      href="mailto:dustinmcgilvray@gmail.com?subject=Loved%20your%20Portfolio%20Site!"
                      target="__blank"
                    >
                      <FontAwesomeIcon
                        icon={['fab', 'skype']}
                        size="3x"
                        color="red"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="column is-10">
          <div id="right-side">
            <ContactForm />
          </div>
        </div>
        
      </div>
    </div>
  </Layout>
)

export default Contact
