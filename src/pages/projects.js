import React from 'react'
import Layout from '../components/layout'
import './projects.css'

const Portfolio = () => (
  <Layout>
    <div id="portfolio-card" className="card">
      <section>
        <div class="columns is-gapless">
          <div class="column">
            <div id="giphy-api" className="card project-card">
            </div>
          </div>
          <div class="column">
            <div id="word-guess" className="card project-card" />
          </div>
          <div class="column">
            <div id="bamazon-cli" className="card project-card" />
          </div>
          <div class="column">
            <div id="web-scraper" className="card project-card" />
          </div>
        </div>
      </section>

      <section>
        <div class="columns is-gapless">
          <div class="column">
            <div id="code-burger" className="card project-card" />
          </div>
          <div class="column">
            <div id="goonie-friend" className="card project-card" />
          </div>
          <div class="column">
            <div id="gpk-trivia" className="card project-card" />
          </div>
          <div class="column">
            <div id="athena-project" className="card project-card" />
          </div>
        </div>
      </section>

      <section>
        <div class="columns is-gapless">
          <div class="column">
            <div id="trading-grounds" className="card project-card" />
          </div>
          <div class="column">
            <div id="react-nyt" className="card project-card" />
          </div>
          <div class="column">
            <div id="rpsls-multiplayer" className="card project-card" />
          </div>
          <div class="column">
            <div id="react-memory" className="card project-card" />
          </div>
        </div>
      </section>

      <section>
        <div class="columns is-gapless">
          <div class="column">
            <div id="reeldex-project" className="card project-card" />
          </div>
          <div class="column">
            <div id="train-scheduler" className="card project-card" />
          </div>
          <div class="column">
            <div id="voltron-trivia" className="card project-card" />
          </div>
          <div class="column">
            <div id="liri-node" className="card project-card" />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Portfolio
