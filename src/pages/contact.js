import React from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
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
                      <Tippy
                        content="GitHub"
                        className="GitHub"
                        placement="right"
                        arrow="true"
                      >
                        <a
                          href="https://github.com/DustinMcGilvray"
                          target="__blank"
                        >
                          <FontAwesomeIcon
                            icon={['fab', 'github']}
                            size="3x"
                            color="white"
                          />
                        </a>
                        </Tippy>
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
                    <Tippy
                      content="LinkedIn"
                      className="LinkedIn"
                      placement="right"
                      arrow="true"
                    >
                      <a
                        href="https://linkedin.com/in/dustinmcgilvray"
                        target="__blank"
                      >
                        <FontAwesomeIcon
                          icon={['fab', 'linkedin-in']}
                          size="3x"
                          color="white"
                        />
                      </a>
                    </Tippy>
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
                        color="white"
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
                        icon="sms"
                        size="3x"
                        color="white"
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
                      href="mailto:dustinmcgilvray@gmail.com?subject=Hello%20Dustin!%20Loved%20your%20Portfolio%20Site!"
                      target="_self"
                    >
                      <FontAwesomeIcon 
                        icon="envelope" 
                        size="3x" 
                        color="white" 
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
                        icon="phone" 
                        size="3x" 
                        color="white" 
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
                      <FontAwesomeIcon
                        icon={['fab', 'skype']}
                        size="3x"
                        color="white"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="right-side" className="column is-11">
          <div id="right-content">
            <div id="phone-text">Hello</div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)


export default Contact
