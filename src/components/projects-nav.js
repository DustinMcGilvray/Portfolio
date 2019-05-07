import React from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ProjectsNav extends React.Component {
    render(props) {
        return (
        <p>
        <Tippy
          content="GitHub"
          className="GitHub"
          placement="right-end"
          arrow="true"
        >
          <span className="icon">
            <a href="https://github.com/DustinMcGilvray">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size="sm"
                color="white"
              />
            </a>
          </span>
        </Tippy>
      </p>
        )
    }
}

export default ProjectsNav