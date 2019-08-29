import React from 'react'

const CoverLetterImageModal = props => (
  <div class="modal is-active">
    <div class="modal-background" />
    <div class="modal-content">
      <div className="image is-3by4">
        <img
          src={require('../images/file_images/dustin_mcgilvray_coverletter2.png')}
          alt="resume page 1"
        />
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      onClick={props.closeCoverLetter}
    />
  </div>
)

export default CoverLetterImageModal
