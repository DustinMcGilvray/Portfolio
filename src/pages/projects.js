import React from 'react'
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
                <h2>Gif<span>tastic</span></h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="sm"
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
                          size="sm"
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
                          size="sm"
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
                <h2>Word<span>Guess</span></h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                src={require('../images/bamazon_logo.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>Bamazon<span>CLI</span></h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="sm"
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
                          size="sm"
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
                          size="sm"
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
                <h2>Web<span>scraper</span></h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
              <img src={require('../images/burger.jpg')} alt="giftastic" />
              <figcaption>
                <h2>Code<span>Burger</span></h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="sm"
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
                          size="sm"
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
                          size="sm"
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
                <h2>Friend<span>Finder</span></h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                <h2>Card<span>Collector</span></h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                <h2>Athena</h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="sm"
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
                          size="sm"
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
                          size="sm"
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
                <h2>Trading<span>Grounds</span></h2>
                <p>
                  <Tippy
                    content="GitHub"
                    className="GitHub"
                    placement="right-end"
                    arrow="true"
                  >
                    <span className="icon">
                      <a href="https://github.com/DustinMcGilvray">
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="sm"
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
                          size="sm"
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
                          size="sm"
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
                <h2>NYT <span>SEARCH</span></h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                <h2>RPSLS</h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                src={require('../images/memory_game_logo.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>Memory Game</h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                <h2>Reeldex</h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                src={require('../images/background_train_station.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>Train Scheduler</h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                <h2>Voltron</h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
                src={require('../images/liri_node_app_logo.jpg')}
                alt="giftastic"
              />
              <figcaption>
                <h2>Liri Node</h2>
                <p>
                <Tippy
                  content="GitHub"
                  className="GitHub"
                  placement="right-end"
                  arrow="true"
                >
                  <span className="icon">
                    <a href="https://github.com/DustinMcGilvray">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
