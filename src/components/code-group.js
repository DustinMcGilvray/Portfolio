import React, { Component } from 'react'
import MySkill from '../components/code-item'
import skills from '../tech-skills-array.json'

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
        <section>
          <div className="columns is-gapless is-multiline">
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
        </section>
      </div>
    )
  }
}
export default codeGroup