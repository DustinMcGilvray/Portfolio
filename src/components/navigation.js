import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy, { TippyGroup } from '@tippy.js/react'

const Nav = () => (
  <ul>
    <TippyGroup delay={1000} arrow="true">
      <li>
        <Link to="/dashboard">
          <Tippy
            content="Dashboard"
            className="Dashboard"
            placement="right-end"
          >
            <span className="icon">
              <FontAwesomeIcon icon="th-large" size="lg" />
            </span>
          </Tippy>
        </Link>
      </li>
      <li>
        <Link to="/news">
          <Tippy content="News" className="News" placement="right-end">
            <span className="icon">
              <FontAwesomeIcon icon="newspaper" size="lg" />
            </span>
          </Tippy>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <Tippy content="Projects" className="Projects" placement="right-end">
            <span className="icon">
              <FontAwesomeIcon icon="briefcase" size="lg" />
            </span>
          </Tippy>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <Tippy content="About" className="About" placement="right-end">
            <span className="icon">
              <FontAwesomeIcon icon="brain" size="lg" />
            </span>
          </Tippy>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <Tippy content="Contact" className="Contact" placement="right-end">
            <span className="icon">
              <FontAwesomeIcon icon="address-card" size="lg" />
            </span>
          </Tippy>
        </Link>
      </li>
    </TippyGroup>
  </ul>
)

export default Nav
