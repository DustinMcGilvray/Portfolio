import React, { Component } from 'react'
import MyProject from '../components/project-item'
import projects from '../data/project-array.json'

class projectGroup extends Component {
  state = {
    projects,
  }

  componentDidMount() {
    console.log(this.state.projects)
  }

  render() {
    return (
      <div>
        <section>
          <div className="columns is-gapless is-multiline">
            {this.state.projects.map(project => (
              <MyProject
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                alt={project.alt}
                repo={project.repo}
                play={project.play}
                showInfo={this.props.showInfo}
                showCLI={this.props.showCLI}
              />
            ))}
          </div>
        </section>
      </div>
    )
  }
}
export default projectGroup