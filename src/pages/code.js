import React, { Component } from 'react'
import Layout from '../components/layout'
import CodeSummary from '../components/code-summary'
import DreyfusTable from '../components/dreyfus-table'
import CodeGroup from '../components/code-group'
import MobileCodeGroup from '../components/code-group-mobile'
import MobileCodeSummary from '../components/code-summary-mobile'
import './code.css'

//TODO: Review and update skill level number in tech-skill-array.json
//TODO: Investigate why table deploys when the the left side is clicked anywhere
//TODO: Add MERN & JAM Stack onClick that highlights corresponding tech languages

class MyCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTableHidden: false,
      isSummaryHidden: true,
      isCodeSummaryHidden: false,
      isShowSkillsHidden: true,
    }
  }

  showTable = () => {
    this.setState({
      ...this.state,
      isTableHidden: true,
      isSummaryHidden: false,
    })
  }

  closeTable = () => {
    this.setState({
      ...this.state,
      isTableHidden: false,
      isSummaryHidden: true,
    })
  }

  showSkills = () => {
    this.setState({
      ...this.state,
      isCodeSummaryHidden: true,
      isShowSkillsHidden: false,
    })
  }

  closeSkills = () => {
    this.setState({
      ...this.state,
      isCodeSummaryHidden: false,
      isShowSkillsHidden: true,
    })
  }

  render() {
    return (
      <Layout>
        <div id="code-card" className="card">
          <div className="columns is-gapless">
            <div id="code-summary-side" className="column is-hidden-mobile">
              {this.state.isSummaryHidden && (
                <CodeSummary showTable={this.showTable} />
              )}
              {this.state.isTableHidden && (
                <DreyfusTable closeTable={this.closeTable} />
              )}
            </div>

            <div id="skills-side" className="column is-hidden-mobile">
              <CodeGroup />
            </div>

            <div className="column is-hidden-desktop">
              {this.state.isShowSkillsHidden && (
                <MobileCodeSummary showSkills={this.showSkills} />
              )}
              {this.state.isCodeSummaryHidden && (
                <MobileCodeGroup closeSkills={this.closeSkills} />
              )}          
            </div>

          </div>
        </div>
      </Layout>
    )
  }
}

export default MyCode
