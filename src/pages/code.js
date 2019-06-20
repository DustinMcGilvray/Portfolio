import React, { Component } from 'react'
import Layout from '../components/layout'
import CodeSummary from '../components/code-summary'
import DreyfusTable from '../components/dreyfus-table'
import Gauge from '../components/gauges'
import './code.css'

class MyCode extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isTableHidden: false,
      isSummaryHidden: true 
  }
  }

  showTable = () => {
    this.setState({
      ...this.state,
      isTableHidden: true,
      isSummaryHidden: false
    })
  }

  closeTable = () => {
    this.setState({
      ...this.state,
      isTableHidden: false,
      isSummaryHidden: true
    })
  }

  render() {
    return (
  <Layout>
    <div id="code-card" className="card">
      <div className="columns is-gapless">

        <div id="summary-side" className="column">
          {this.state.isSummaryHidden &&  <CodeSummary showTable={this.showTable}/> }

          {this.state.isTableHidden && <DreyfusTable closeTable={this.closeTable}/> }  
        </div>

        <div id="skills-side" className="column">

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div id="html-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>HTML5</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="css-skill" className="logo-card">              
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>CSS3</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="javascript-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>JavaScript</div>
                    </div>
                    <Gauge number="2" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="bootstrap-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Bootstrap</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="firebase-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Firebase</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div id="jquery-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>jQuery</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="ajax-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>AJAX</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="node-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Node</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="express-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Express</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="handlebars-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Handlebars</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div id="rest-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>RestAPI</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="postman-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Postman</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="swagger-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Swagger</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="heroku-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Heroku</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="materialize-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Materialize</div>
                    </div>
                    <Gauge number="4" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div id="mysql-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>mySQL</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="sequelize-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Sequelize</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="mongodb-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>MongoDB</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="mocha-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Mocha</div>
                    </div>
                    <Gauge number="2" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="chai-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Chai</div>
                    </div>
                    <Gauge number="2" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div id="react-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>React</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="router-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>React Router</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="es6-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>ES6</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="react-materialize-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>React Materialize</div>
                    </div>
                    <Gauge number="4" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="bulma-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Bulma</div>
                    </div>
                    <Gauge number="4" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div id="gatsby-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Gatsby</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="graphql-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>GraphQL</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="contentful-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Contentful</div>
                    </div>
                    <Gauge number="1" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="styled-components-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Styled Components</div>
                    </div>
                    <Gauge number="2" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="netlify-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Netlify</div>
                    </div>
                    <Gauge number="1" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns is-gapless">
              <div className="column">
                <div id="git-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Git</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="github-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>GitHub</div>
                    </div>
                    <Gauge number="4" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="gitlab-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>GitLab</div>
                    </div>
                    <Gauge number="3" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="vscode-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>VSCode</div>
                    </div>
                    <Gauge number="4" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div id="terminal-skill" className="logo-card">
                  <div className="logo-overlay">
                    <div class="skill-label">
                      <div>Terminal</div>
                    </div>
                    <Gauge number="4" />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  </Layout>
    )
}
}

export default MyCode
