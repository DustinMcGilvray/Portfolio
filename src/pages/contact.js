import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import './contact.css'

const Contact = () => (
  <Layout>
    <div id="contact-all" className="card">
        <div className="columns">
          <div id="left-side" className="column is-half">
            <section>
              <div className="columns is-gapless">
                <div className="column">
                    <div className="card icon-card">
                      <span className="icon">
                        <a
                          href="https://github.com/DustinMcGilvray"
                          target="__blank"
                        >
                          <FontAwesomeIcon
                            icon={['fab', 'github']}
                            size="6x"
                            color="red"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                <div className="column">
                <div className="card icon-card">
                <span className="icon">
                  <a
                    href="https://github.com/DustinMcGilvray"
                    target="__blank"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      size="6x"
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
                <span className="icon">
                  <a
                    href="https://github.com/DustinMcGilvray"
                    target="__blank"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      size="6x"
                      color="red"
                    />
                  </a>
                </span>
              </div>
                </div>
                <div className="column">
                <div className="card icon-card">
                <span className="icon">
                  <a
                    href="https://github.com/DustinMcGilvray"
                    target="__blank"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      size="6x"
                      color="red"
                    />
                  </a>
                </span>
              </div>
                </div>
              </div>
            </section>
          </div>
          <div className="column is-half">
            <div id="right-side">
              <ContactForm />
            </div>
          </div>
        </div>
        <div id="word-contact">Contact Me</div>
    </div>
  </Layout>
)

export default Contact
