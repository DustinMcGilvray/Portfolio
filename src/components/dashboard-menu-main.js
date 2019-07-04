import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DashboardMainMenu = () => (
    <aside
    id="navigation-side"
    className="column section menu is-narrow is-fullheight is-narrow-mobile is-hidden-mobile"
  >
    <ul className="menu-list">
      <li>
        <a href="#">
          <FontAwesomeIcon icon={'newspaper'} size={'lg'} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={'podcast'} size={'lg'} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={'video'} size={'lg'} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={'cloud-sun-rain'} size={'lg'} />
        </a>
      </li>
    </ul>
  </aside>
)

export default DashboardMainMenu