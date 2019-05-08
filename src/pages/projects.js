import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './projects.css'

const Portfolio = () => (
  <Layout>
    <div id="portfolio-card" className="card">
      <section>
        <div className="columns is-gapless">
          <div className="column">
            <figure className="card project-card effect-terry">
              <img src={require('../images/giphy_api.gif')} alt="giftastic" />
              <figcaption>
                <h2>
                  Gif<span>tastic</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Giftastic" target='__blank'>
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
                  <Link to='/giftastic-play'>
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
                  </Link>
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
            <figure className="card project-card effect-terry">
              <img
                src={require('../images/movie_theater_logo.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Word<span>Guess</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/80s-Movie-Title-Guessing-Game" target='__blank'>
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
            <figure className="card project-card effect-terry">
              <img
                src={require('../images/bamazon_cli.png')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Bamazon<span>CLI</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Bamazon-App" target='__blank'>
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
            <figure className="card project-card effect-terry">
              <img
                src={require('../images/lego-minifigs-on-beam.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Web<span>scraper</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Web-Scraper" target='__blank'>
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
            <figure className="card project-card effect-terry">
              <img src={require('../images/burger.png')} alt="giftastic" />
              <figcaption>
                <h2>
                  Code<span>Burger</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Code-Burger" target='__blank'>
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
            <figure className="card project-card effect-terry">
              <img
                src={require('../images/goonies_friend.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Friend<span>Finder</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Goonies-Friend-Finder" target='__blank'>
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
            <figure className="card project-card effect-terry">
              <img src={require('../images/gpk_collage.jpg')} alt="giftastic" />
              <figcaption>
                <h2>
                  Card<span>Collector</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Garbage-Pail-Kids-Card-Collector-Game" target='__blank'>
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
            <figure className="card project-card effect-terry">
              <img
                src={require('../images/clouds_pink_hue.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>Athena<span>App</span></h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Athena" target='__blank'>
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
            <figure className="card project-card effect-terry">
              <img
                src={require('../images/trading_grounds.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>
                  Trading<span>Grounds</span>
                </h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray/Trading-Grounds" target='__blank'>
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
            <figure className="card project-card effect-terry">
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
            <figure className="card project-card effect-terry">
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
            <figure className="card project-card effect-terry">
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
            <figure className="card project-card effect-terry">
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
            <figure className="card project-card effect-terry">
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
            <figure className="card project-card effect-terry">
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
            <figure className="card project-card effect-terry">
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

export default Portfolio
