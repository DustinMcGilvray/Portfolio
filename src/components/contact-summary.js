import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactCard from '../components/contact-card'
import './contact-summary.css'

const ContactSummary = props => (
  <section>
    <div id="contact-summary-card" className="card is-shadowless">
      <header className="card-header is-shadowless">
        <p className="card-header-title is-centered is-size-3 has-text-white">
          Contact
        </p>
      </header>
      <div className="card-content has-text-white" onClick={props.showTable}>
        <p>
          Place some verbage here about coding and stuff. All kinds of stuff
          about my coding skills. Syntactical Sugar. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi consequatur maxime et a officia,
          laborum deserunt quod. Excepturi mollitia eveniet qui tempore
          doloremque, eius rerum natus corporis soluta quisquam dolorem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur
          cumque ratione deleniti possimus voluptate soluta at id molestiae,
          fugit modi odio fuga pariatur tempora quibusdam facere. Facere, vel
          ex? Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
          culpa, distinctio enim non numquam dolores hic consectetur ab id,
          eligendi corrupti dolorum veritatis nisi error ipsa possimus sint?
          Facilis, sapiente!Lorem Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus unde adipisci explicabo sapiente ducimus
          ullam velit accusamus sunt! Ipsa iusto sint aspernatur quia
          consequuntur minima ea assumenda incidunt excepturi ducimus?Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          dolores! Eveniet natus ut minus quia eos labore, pariatur unde
          facilis. Impedit distinctio temporibus dolores possimus quo,
          recusandae unde. Ea, excepturi.
        </p>
      </div>
      <section className="section ">
        <nav className="level">
          <div class="level-item has-text-centered">
            <div>
              <h3 className="heading has-text-white">
                dustinmcgilvray@gmail.com
              </h3>
              <p className="icon">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="envelope" size="lg" />
                </a>
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading has-text-white">254.640.2904</p>
              <p className="icon">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="phone" size="lg" />
                </a>
              </p>
            </div>
          </div>
        </nav>
      </section>
      <section className="section ">
        <ContactCard />
      </section>
    </div>
  </section>
)

export default ContactSummary
