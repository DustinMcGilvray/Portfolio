import React, { Component } from 'react'
// import { Link } from 'gatsby'
import MyProject from '../components/project-item'
import Layout from '../components/layout'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './projects.css'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
  
  <Layout>
    <div id="portfolio-card" className="card">
      <section>
        <div className="columns is-gapless">
          <div className="column">
            <MyProject
            name='Giftastic'
            repo='https://github.com/DustinMcGilvray/Giftastic'
            image={require('../images/giphy_api.gif')}
            />
          </div>
          <div className="column">
            <MyProject
            name='WordGuess'
            repo='https://github.com/DustinMcGilvray/80s-Movie-Title-Guessing-Game'
            image={require('../images/movie_theater_logo.jpg')}
            />          
          </div>
          <div className="column">
            <MyProject
              name='BamazonCLI'
              repo='https://github.com/DustinMcGilvray/Bamazon-App'
              image={require('../images/bamazon_cli.png')}
              />   
          </div>
          <div className="column">
            <MyProject
            name='WebScraper'
            repo='https://github.com/DustinMcGilvray/Web-Scraper'
            image={require('../images/lego-minifigs-on-beam.jpg')}
            />         
          </div>
        </div>
      </section>

      <section>
        <div className="columns is-gapless">
          <div className="column">
            <MyProject
              name='CodeBurger'
              repo='https://github.com/DustinMcGilvray/Code-Burger'
              image={require('../images/burger.png')}
            />           
          </div>
          <div className="column">
            <MyProject
            name='FriendFinder'
            repo='https://github.com/DustinMcGilvray/Goonies-Friend-Finder'
            image={require('../images/goonies_friend.jpg')}
            />    
          </div>
          <div className="column">
            <MyProject
            name='CardCollector'
            repo='https://github.com/DustinMcGilvray/Garbage-Pail-Kids-Card-Collector-Game'
            image={require('../images/gpk_collage.jpg')}
            /> 
          </div>
          <div className="column">
            <MyProject
            name='AthenaApp'
            repo='https://github.com/DustinMcGilvray/Athena'
            image={require('../images/clouds_pink_hue.jpg')}
            /> 
          </div>
        </div>
      </section>

      <section>
        <div className="columns is-gapless">
          <div className="column">
            <MyProject
            name='TradingGrounds'
            repo='https://github.com/DustinMcGilvray/Trading-Grounds'
            image={require('../images/trading_grounds.jpg')}
            /> 
          </div>
          <div className="column">
          <MyProject
          name='AthenaApp'
          repo='https://github.com/DustinMcGilvray/Athena'
          image={require('../images/clouds_pink_hue.jpg')}
          /> 
            <figure className="card effect-terry">
              <img src={require('../images/nyt_search.jpg')} alt="giftastic" />
              <figcaption>
                <h2>
                  NYT <span>SEARCH</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/React-NYT-Search" target='__blank'>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Play"
                    className="Play"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="play-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Info"
                    className="Info"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="info-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column">
          <MyProject
          name='AthenaApp'
          repo='https://github.com/DustinMcGilvray/Athena'
          image={require('../images/clouds_pink_hue.jpg')}
          /> 
            <figure className="card effect-terry">
              <img
                src={require('../images/rpsls_game_logo_sized.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Multiplayer<span>Game</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/RPS-Multiplyer" target='__blank'>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Play"
                    className="Play"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="play-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Info"
                    className="Info"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="info-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column">
          <MyProject
          name='AthenaApp'
          repo='https://github.com/DustinMcGilvray/Athena'
          image={require('../images/clouds_pink_hue.jpg')}
          /> 
            <figure className="card effect-terry">
              <img
                src={require('../images/cds.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Memory<span>Game</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Clicky-Game" target='__blank'>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Play"
                    className="Play"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="play-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Info"
                    className="Info"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="info-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section>
        <div className="columns is-gapless">
          <div className="column">
            <figure className="card effect-terry">
              <img
                src={require('../images/background-film.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Reel<span>dex</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Reeldex" target='__blank'>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Play"
                    className="Play"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="play-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Info"
                    className="Info"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="info-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column">
            <figure className="card effect-terry">
              <img
                src={require('../images/train_scheduler.png')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Train<span>Scheduler</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Train-Scheduler" target="__blank">
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Play"
                    className="Play"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="play-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Info"
                    className="Info"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="info-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column">
            <figure className="card effect-terry">
              <img src={require('../images/voltron.jpg')} alt="voltron" />
              <figcaption>
                <h2>
                  Trivia<span>Game</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Voltron-Trivia-Game" target='__blank'>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Play"
                    className="Play"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="play-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Info"
                    className="Info"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="info-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column">
            <figure className="card effect-terry">
              <img
                src={require('../images/liri_node.png')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Liri<span>Node</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/liri-node-app" target='__blank'>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Play"
                    className="Play"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="play-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
                <p>
                  <Tippy
                    content="Info"
                    className="Info"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon="info-circle"
                          size="md"
                          color="white"
                        />
                      </a>
                    </span>
                  </Tippy>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  </Layout>
    )
  }
}

export default Portfolio
