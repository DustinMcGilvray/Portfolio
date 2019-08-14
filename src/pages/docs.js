import React, { Component } from 'react'
import Layout from '../components/layout'
import DocsSummary from '../components/docs-summary'
import DocGroup from '../components/doc-group'
import MobileDocGroup from '../components/doc-group-mobile'
import ResumeImageModal from '../components/resume-image-modal'
import CoverLetterImageModal from '../components/coverletter-image-modal'
import './docs.css'

class MyDocs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isResumeHidden: false,
      isCoverLetterHidden: false,
      isMobileResumeHidden: false,
      isMobileCoverLetterHidden: false,
      isDocsSummaryShowing: true,
      isDocGroupHidden: true,
    }
  }

  showResume = () => {
    this.setState({
      ...this.state,
      isResumeHidden: true,
      isDocGroupHidden: false,
      isDocsSummaryShowing: false,
    })
  }

  closeResume = () => {
    this.setState({
      ...this.state,
      isResumeHidden: false,
      isDocGroupHidden: true,
      isDocsSummaryShowing: true,
    })
  }

  showCoverLetter = () => {
    this.setState({
      ...this.state,
      isCoverLetterHidden: true,
      isDocGroupHidden: false,
    })
  }

  closeCoverLetter = () => {
    this.setState({
      ...this.state,
      isCoverLetterHidden: false,
      isDocGroupHidden: true,
    })
  }

  render() {
    return (
      <Layout>
        <div id="docs-card" className="card">
          <div className="columns is-gapless is-hidden-mobile">
            <div id="docs-summary-side" className="column">
              <DocsSummary />
            </div>
            <div id="docs-side" className="column">
              {this.state.isResumeHidden && (
                <ResumeImageModal closeResume={this.closeResume} />
              )}
              {this.state.isCoverLetterHidden && (
                <CoverLetterImageModal
                  closeCoverLetter={this.closeCoverLetter}
                />
              )}
              {this.state.isDocGroupHidden && (
                <DocGroup
                  showResume={this.showResume}
                  showCoverLetter={this.showCoverLetter}
                />
              )}
            </div>
          </div>

          <div className="columns is-gapless is-hidden-desktop">
            <div className="column">
              {this.state.isDocsSummaryShowing && (
                <MobileDocGroup
                  showResume={this.showResume}
                  showCoverLetter={this.showCoverLetter}
                />
              )}
              {this.state.isResumeHidden && (
                <ResumeImageModal closeResume={this.closeResume} />
              )}
              {this.state.isCoverLetterHidden && (
                <CoverLetterImageModal
                  closeCoverLetter={this.closeCoverLetter}
                />
              )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MyDocs
