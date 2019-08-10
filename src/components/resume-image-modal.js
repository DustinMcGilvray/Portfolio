import React from 'react'

const ResumeImageModal = props => (
  <div class="modal is-active">
    <div class="modal-background" />
    <div class="modal-content">
      <div className="image is-3by4">
        <img
          src={require('../images/file_images/dustin_mcgilvray_resume-1.png')}
          alt="resume page 1"
        />
      </div>
      <div id="resume-image" className="image is-3by4">
        <img
          src={require('../images/file_images/dustin_mcgilvray_resume-2 .png')}
          alt="resume page 2"
        />
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      onClick={props.closeResume}
    />
  </div>
)

export default ResumeImageModal