import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashboardMainMenu = () => (
  <aside
    id="navigation-side"
    className="menu"
  >
    <ul className="menu-list">
      <li>
      <span className="icon is-large">
          <FontAwesomeIcon icon={'newspaper'} size={'lg'} color={'white'} />
        </span>
      </li>
      <li>
        <span className="icon is-large">
          <FontAwesomeIcon icon={'podcast'} size={'lg'} color={'white'}/>
        </span>
      </li>
      <li>
        <span className="icon is-large">
          <FontAwesomeIcon icon={'video'} size={'lg'} color={'white'}/>
        </span>
      </li>
      <li>
        <span className="icon is-large">
          <FontAwesomeIcon icon={'cloud-sun-rain'} size={'lg'} color={'white'}/>
        </span>
      </li>
    </ul>
  </aside>
)

export default DashboardMainMenu