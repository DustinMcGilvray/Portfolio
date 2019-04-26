import React from 'react'
import { Link } from 'gatsby'
import Tippy from '@tippy.js/react'
import './header.css'

const Header = ({ siteSymbol }) => (
  <div className="hero-head">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Tippy content="Home" className="Home" placement="right" arrow="true">
            <Link to="/" className="navbar-item ">
              <div className="initials">{siteSymbol}</div>
            </Link>
          </Tippy>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
