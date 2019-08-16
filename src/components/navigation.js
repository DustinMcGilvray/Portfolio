import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy, { TippyGroup } from '@tippy.js/react'
import './navigation.css'

const Nav = () => (
  <ul>
    <TippyGroup delay={1000}>
      <li className="is-hidden-mobile">
        <Link to="/dashboard" activeClassName="active-link">
          <Tippy
            content="Dashboard"
            className="Dashboard"
            placement="right-end"
            arrow="true"
          >
            <span className="icon">
              <FontAwesomeIcon icon="th-large" size="lg" color="black" />
            </span>
          </Tippy>
        </Link>
      </li>
      <li>
        <Link to="/projects" activeClassName="active-link">
          <Tippy
            content="Projects"
            className="Projects"
            placement="right-end"
            arrow="true"
          >
            <span className="icon">
              <FontAwesomeIcon icon="briefcase" size="lg" color="black" />
            </span>
          </Tippy>
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active-link">
          <Tippy
            content="About"
            className="About"
            placement="right-end"
            arrow="true"
          >
            <span className="icon">
              <FontAwesomeIcon icon="brain" size="lg" color="black" />
            </span>
          </Tippy>
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="active-link">
          <Tippy
            content="Contact"
            className="Contact"
            placement="right-end"
            arrow="true"
          >
            <span className="icon">
              <FontAwesomeIcon icon="address-card" size="lg" color="black" />
            </span>
          </Tippy>
        </Link>
      </li>
    </TippyGroup>
  </ul>
)

export default Nav