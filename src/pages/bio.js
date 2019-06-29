import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './bio.css'

class MyBio extends Component {

  render() {
    return (

      <Layout>
        <div id="bio-card" className="card">
          <header className="card-header is-shadowless">
            <p class="card-header-title is-centered is-size-3 has-text-white">
              BIO
            </p>
            <div className="card-header-icon">
              <Link to="/about">
                <span className="icon">
                  <FontAwesomeIcon icon={'chevron-circle-left'} color="white" />
                </span>
              </Link>
            </div>
          </header>
          <section className="section">
            <div className="card-content">
              <div className="content has-text-center has-text-white">
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
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default MyBio
