import React, { Component } from 'react'
import MySkill from '../components/code-item'
import skills from '../tech_data/tech-skills-array.json'

class codeGroup extends Component {
  state = {
    skills,
  };

  componentDidMount(){
    console.log(this.state.skills);
  }

  render() {
    return (
      <div>
          <div className="columns is-gapless is-multiline is-mobile">
            {this.state.skills.map(skill => (
              <MySkill
                id={skill.id}
                key={skill.id}
                name={skill.name}
                image={skill.image}
                number={skill.number}
              />
            ))}
          </div>
      </div>
    )
  }
}
export default codeGroup