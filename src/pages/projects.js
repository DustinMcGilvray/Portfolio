import React from 'react'
import Layout from '../components/layout'

const Portfolio = () => (
  <Layout>
    <div className="container has-text-centered">
      <h1 className="title">Projects</h1>
    </div>
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title">One</p>
            </div>
            <div className="tile is-child box">
              <p className="title">Two</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">Three</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-8 is-vertical">
            {/*This is Column 1 */}

            <div className="tile">
              {' '}
              {/*This is a Subtile */}
              <div className="tile is-vertical is-parent">
                <div className="tile is-child box">
                  <p className="title">Vertical...</p>
                </div>
                <div className="tile is-child box">
                  <p className="title">tiles...</p>
                </div>
              </div>
              <div className='tile is-parent'>
                <div className="tile is-child box">
                  <p className="title">Middle...</p>
                </div>             
              </div>

            </div>

            <div className='tile is-parent'>
              <div className="tile is-child box">
                {/*This is Bottom Column 1 */}
                <p className="title">Wide</p>
              </div>
            </div>
          </div>

          {/*This is Column 2 */}
          <div className='tile is-parent'>
            <div className="tile is-child box">
              <p className="title">Tall...</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </Layout>
)

export default Portfolio
