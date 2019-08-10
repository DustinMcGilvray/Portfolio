import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashboardMainMenu = () => (
  <aside id="navigation-side" className="menu">
    <ul className="menu-list">
      <Link to="/weather">
        <li>
          <span className="icon is-large">
            <FontAwesomeIcon
              icon={'cloud-sun-rain'}
              size={'lg'}
              color={'white'}
            />
          </span>
        </li>
      </Link>
      <Link to="/calendar">
        <li>
          <span className="icon is-large">
            <FontAwesomeIcon
              icon={'calendar-alt'}
              size={'lg'}
              color={'white'}
            />
          </span>
        </li>
      </Link>
      <Link to="/clock">
        <li>
          <span className="icon is-large">
            <FontAwesomeIcon icon={'clock'} size={'lg'} color={'white'} />
          </span>
        </li>
      </Link>
    </ul>
  </aside>
)

export default DashboardMainMenu