import React from 'react'

/*TODO: Update Cover Letter to be generic*/

const CoverLetterImageModal = props => (
  <div class="modal is-active">
    <div class="modal-background" />
    <div class="modal-content">
      <div className="image is-3by4">
        <img
          src={require('../images/file_images/dustin_mcgilvray_coverletter.png')}
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