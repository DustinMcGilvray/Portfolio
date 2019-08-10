import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './code-summary.css'

/*TODO: Fill in Coding Summary*/

const CodeSummary = (props) => (
  <section>
    <div  className="columns is-gapless">
      <div className="column">
      <div id="code-summary-card" className="card">
      <header className="card-header is-shadowless">
      <p className="card-header-title is-centered is-size-3 has-text-white">
        CODE
      </p>
      <div className="card-header-icon">
        <Link to="/about">
          <span className="icon">
            <FontAwesomeIcon icon={'chevron-circle-left'} color="white" />
          </span>
        </Link>
      </div>
    </header>
      <div className="card-content" onClick={props.showTable}>
      <p>
        Place some verbage here about coding and stuff. All kinds of stuff
        about my coding skills. Syntactical Sugar.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            consequatur maxime et a officia, laborum deserunt quod. Excepturi
            mollitia eveniet qui tempore doloremque, eius rerum natus corporis
            soluta quisquam dolorem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia consequatur cumque ratione deleniti possimus
            voluptate soluta at id molestiae, fugit modi odio fuga pariatur
            tempora quibusdam facere. Facere, vel ex? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. In culpa, distinctio enim non
            numquam dolores hic consectetur ab id, eligendi corrupti dolorum
            veritatis nisi error ipsa possimus sint? Facilis, sapiente!Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            unde adipisci explicabo sapiente ducimus ullam velit accusamus sunt!
            Ipsa iusto sint aspernatur quia consequuntur minima ea assumenda
            incidunt excepturi ducimus?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Reiciendis, dolores! Eveniet natus ut minus quia
            eos labore, pariatur unde facilis. Impedit distinctio temporibus
            dolores possimus quo, recusandae unde. Ea, excepturi.
        </p>
        <section className="section is-medium">
        <button className="button is-primary is-inverted is-outlined is-fullwidth" onClick={props.showTable}>Skill Table</button>
        </section>
      </div>
          </div>
      </div>
    </div>
  </section>
)

export default CodeSummary
