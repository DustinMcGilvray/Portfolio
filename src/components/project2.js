import React from 'react'
import Layout from '../components/layout'
import './projects.css'

const Portfolio = () => (
  <Layout>
    {/*First Row of Tiles */}
    <div className="tile is-ancestor">

      {/*First Column of 3 Tiles*/}
      <div className="tile is-3">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div id="giphy-api" className="tile is-child">
              <h1 className='title'>Giphy API</h1>
            </div>
            <div id="word-guess" className="tile is-child">
              <h1 className='title'>Movie Guess</h1>
            </div>
            <div id="bamazon-cli" className="tile is-child">
              <h1 className='title'>Bamazon CLI</h1>
            </div>
          </div>
        </div>
      </div>

      {/*Second Column Single Tile */}
      <div className="tile is-3">
        <div className="tile is-parent">
          <div id='web-scraper' className="tile">
            <h1 className='title'>BrickNerd Web Scraper</h1>
          </div>
        </div>
      </div>

      {/*Third Column of 3 Tiles*/}
      <div className="tile is-3">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div id="code-burger" className="tile is-child">
              <h1 className='title'>Code Burger</h1>
            </div>
            <div id="goonie-friend" className="tile is-child">
              <h1 className='title'>Goonie Friend Finder</h1>
            </div>
            <div id="gpk-trivia" className="tile is-child">
              <h1 className='title'>GPK Trivia</h1>
            </div>
          </div>
        </div>
      </div>
      
      {/*Fourth Column Single Tile */}
      <div className="tile is-3">
        <div className="tile is-parent">
          <div id='athena-project' className="tile">
            <h1 className='title'>Athena</h1>
          </div>
        </div>
      </div>

    </div>

    {/*Second Row of Tiles */}
    <div className="tile is-ancestor">
      {/*First Column Single Tile */}
      <div className="tile is-3">
        <div className="tile is-parent">
          <div id='trading-grounds' className="tile">
            <h1 className='title'>Trading Grounds</h1>
          </div>
        </div>
      </div>

      {/*Second Column of 3 Tiles*/}
      <div className="tile is-vertical is-">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div id="react-nyt" className="tile is-child">
              <h1 className='title'>React NYT Search</h1>
            </div>
            <div id="rpsls-multiplayer" className="tile is-child">
              <h1 className='title'>RPSLS Multiplayer</h1>
            </div>
            <div id="react-memory" className="tile is-child">
              <h1 className='title'>React Memory</h1>
            </div>
          </div>
        </div>
      </div>

      {/*Third Column Single Tile */}
      <div className="tile is-3">
      <div className="tile is-parent">
        <div id='reeldex-project' className="tile">
          <h1 className='title'>Reeldex</h1>
        </div>
      </div>
    </div>

      {/*Fourth Column of 3 Tiles*/}
      <div className="tile is-vertical is-3">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div id="train-scheduler" className="tile is-child">
              <h1 className='title'>Train Scheduler</h1>
            </div>
            <div id="voltron-trivia" className="tile is-child">
              <h1 className='title'>Voltron Trivia</h1>
            </div>
            <div id="liri-node" className="tile is-child">
              <h1 className='title'>Liri Node</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
