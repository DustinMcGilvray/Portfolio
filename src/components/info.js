import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './info.css'

const InfoApp = props => {
  return (
    <div>
      <div className="columns is-gapless">
        <div id="info-column" className="column">
          <div id="info-card" className="card is-shadowless">
            <header className="card-header is-shadowless">
              <p class="card-header-title is-centered is-size-3">{props.title}</p>
              <div className="card-header-icon">
                <span className="icon">
                {console.log("click")}
                  <FontAwesomeIcon
                    icon={'times-circle'}
                    onClick={props.closeInfo}
                  />
                </span>
              </div>
            </header>
            <section className="section">
              <div className="card-content">
                <div className="content has-text-left">
                  This is a dynamic web page that populates with 1980's themed
                  static gifs based on search terms using the Giphy API and an
                  AJAX GET request. When the search results are populated, ten
                  gifs will appear in a paused state. The user can then click on
                  the gif to play them. On a second click, the gif will pause
                  again. The user can search using one of the pre-made search
                  terms populated in one of the buttons or search for their own
                  gifs using the Search Bar. When a user inputs a term in the
                  search bar, the term will populate as a button. The user can
                  then click the button to bring in the gifs for the search
                  term. The results are based on the top ten gifs from the Giphy
                  API and will include the rating for the individual gifs.
                </div>
              </div>
            </section>
            <p className="card-header-title is-centered is-size-3">
              Technologies
            </p>
            <section className="section tech-stack">
              <div className="columns is-gapless">
                <div className="column">
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    size="3x"
                    color="black"
                  />
                </div>
                <div className="column">
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    size="3x"
                    color="black"
                  />
                </div>
                <div className="column">
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    size="3x"
                    color="black"
                  />
                </div>
                <div className="column">
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    size="3x"
                    color="black"
                  />
                </div>
                <div className="column">
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    size="3x"
                    color="black"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoApp
