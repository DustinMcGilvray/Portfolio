import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './docs-summary.css'

const DocsSummary = () => (
  <section>
    <div className="columns is-gapless">
      <div className="column">
        <div id="doc-summary-card" className="card">
          <header className="card-header is-shadowless">
            <p class="card-header-title is-centered is-size-3 has-text-white">
              DOCUMENTS
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              consequatur maxime et a officia, laborum deserunt quod. Excepturi
              mollitia eveniet qui tempore doloremque, eius rerum natus corporis
              soluta quisquam dolorem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia consequatur cumque ratione deleniti
              possimus voluptate soluta at id molestiae, fugit modi odio fuga
              pariatur tempora quibusdam facere. Facere, vel ex? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. In culpa, distinctio
              enim non numquam dolores hic consectetur ab id, eligendi corrupti
              dolorum veritatis nisi error ipsa possimus sint? Facilis,
              sapiente!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Possimus unde adipisci explicabo sapiente ducimus ullam
              velit accusamus sunt! Ipsa iusto sint aspernatur quia consequuntur
              minima ea assumenda incidunt excepturi ducimus?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Reiciendis, dolores!
              Eveniet natus ut minus quia eos labore, pariatur unde facilis.
              Impedit distinctio temporibus dolores possimus quo, recusandae
              unde. Ea, excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default DocsSummary
