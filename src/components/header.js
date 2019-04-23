import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="hero-head">
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item ">
            <h1>{siteTitle}</h1>
          </Link>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
