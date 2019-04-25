import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from "./header"
import Footer from "./footer"
import './all.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteSymbolQuery {
        site {
          siteMetadata {
            symbol
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          siteSymbol={data.site.siteMetadata.symbol}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <section className="hero is-fullheight">
          <Header siteSymbol={data.site.siteMetadata.symbol}/>
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="site-content">{children}</div>
              </div>
            </div>
            <Footer />
        </section>
            </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
