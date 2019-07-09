import React, { Component } from 'react'
import Layout from '../components/layout'
import CodeSummary from '../components/code-summary'
import DreyfusTable from '../components/dreyfus-table'
import CodeGroup from '../components/code-group'
import './code.css'

//TODO: Add MERN & JAM Stack onClick that highlights corresponding tech languages

class MyCode extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isTableHidden: false,
      isSummaryHidden: true 
  }
  }

  showTable = () => {
    this.setState({
      ...this.state,
      isTableHidden: true,
      isSummaryHidden: false
    })
  }

  closeTable = () => {
    this.setState({
      ...this.state,
      isTableHidden: false,
      isSummaryHidden: true
    })
  }

  render() {
    return (
      <Layout>
        <div id="code-card" className="card">
          <div className="columns is-gapless">

            <div id="code-summary-side" className="column">
              {this.state.isSummaryHidden &&  <CodeSummary showTable={this.showTable}/> }

              {this.state.isTableHidden && <DreyfusTable closeTable={this.closeTable}/> }  
            </div>

            <div id="skills-side" className="column">
                <CodeGroup/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MyCode