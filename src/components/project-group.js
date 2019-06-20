import React, { Component } from 'react'
import MyProject from '../components/project-item'

class projectGroup extends Component {
    render() {
        return (
            <div>
        {/* Row 1 */}
          <section>
          <div className="columns is-gapless">
            <div className="column">
              <MyProject
                name="Giftastic"
                repo="https://github.com/DustinMcGilvray/Giftastic"
                image={require('../images/giphy_api.gif')}
                alt="Giphy API Gif"
                play="https://dustinmcgilvray.github.io/Giftastic/"
                showInfo={this.props.showInfo}
              />
            </div>
            <div className="column">
              <MyProject
                name="WordGuess"
                repo="https://github.com/DustinMcGilvray/80s-Movie-Title-Guessing-Game"
                image={require('../images/movie_theater_logo.jpg')}
                alt="Word Guess"
                play=""
                info=""
              />
            </div>
            <div className="column">
              <MyProject
                name="BamazonCLI"
                repo="https://github.com/DustinMcGilvray/Bamazon-App"
                image={require('../images/bamazon_cli.png')}
                alt="Bamazon CLI"
              />
            </div>
            <div className="column">
              <MyProject
                name="WebScraper"
                repo="https://github.com/DustinMcGilvray/Web-Scraper"
                image={require('../images/lego-minifigs-on-beam.jpg')}
                alt="Web Scraper"
              />
            </div>
          </div>
        </section>
        {/* Row 2 */}
        <section>
          <div className="columns is-gapless">
            <div className="column">
              <MyProject
                name="CodeBurger"
                repo="https://github.com/DustinMcGilvray/Code-Burger"
                image={require('../images/burger.png')}
                alt="Code Burger"
              />
            </div>
            <div className="column">
              <MyProject
                name="FriendFinder"
                repo="https://github.com/DustinMcGilvray/Goonies-Friend-Finder"
                image={require('../images/goonies_friend.jpg')}
                alt="Friend Finder"
              />
            </div>
            <div className="column">
              <MyProject
                name="CardCollector"
                repo="https://github.com/DustinMcGilvray/Garbage-Pail-Kids-Card-Collector-Game"
                image={require('../images/gpk_collage.jpg')}
                alt="Card Collector"
              />
            </div>
            <div className="column">
              <MyProject
                name="AthenaApp"
                repo="https://github.com/DustinMcGilvray/Athena"
                image={require('../images/clouds_pink_hue.jpg')}
                alt="Athena App"
              />
            </div>
          </div>
        </section>
        {/* Row 3 */}
        <section>
          <div className="columns is-gapless">
            <div className="column">
              <MyProject
                name="TradingGrounds"
                repo="https://github.com/DustinMcGilvray/Trading-Grounds"
                image={require('../images/trading_grounds.jpg')}
                alt="Trading Grounds"
              />
            </div>
            <div className="column">
              <MyProject
                name="NYTSearch"
                repo="https://github.com/DustinMcGilvray/React-NYT-Search"
                image={require('../images/nyt_search.jpg')}
                alt="NYT Search"
              />
            </div>
            <div className="column">
              <MyProject
                name="RPSLSGame"
                repo="https://github.com/DustinMcGilvray/RPS-Multiplyer"
                image={require('../images/rpsls_game_logo_sized.jpg')}
                alt="Rock, Paper, Scissor, Lizard, Spock Game"
              />
            </div>
            <div className="column">
              <MyProject
                name="MemoryGame"
                repo="https://github.com/DustinMcGilvray/Clicky-Game"
                image={require('../images/cds.jpg')}
                alt="Memory Game"
              />
            </div>
          </div>
        </section>
        {/* Row 4 */}
        <section>
          <div className="columns is-gapless">
            <div className="column">
              <MyProject
                name="ReelDex"
                repo="https://github.com/DustinMcGilvray/Reeldex"
                image={require('../images/background-film.jpg')}
                alt="ReelDex App"
              />
            </div>
            <div className="column">
              <MyProject
                name="TrainScheduler"
                repo="https://github.com/DustinMcGilvray/Train-Scheduler"
                image={require('../images/train_scheduler.png')}
                alt="Train Scheduler"
              />
            </div>
            <div className="column">
              <MyProject
                name="TriviaGame"
                repo="https://github.com/DustinMcGilvray/Voltron-Trivia-Game"
                image={require('../images/voltron.jpg')}
                alt="Voltron Trivia Game"
              />
            </div>
            <div className="column">
              <MyProject
                name="LIRINode"
                repo="https://github.com/DustinMcGilvray/liri-node-app"
                image={require('../images/liri_node.png')}
                alt="Liri Node App"
              />
            </div>
          </div>
        </section>
        </div>
        )
    }
}
export default projectGroup