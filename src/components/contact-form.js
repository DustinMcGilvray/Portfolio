import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippy.js/react'

import './contact-form.css'

const ContactForm = () => (
<div id="form-card" className="card">
    <div className="card-content">
        <div className="field">
        <div className="control">
            <input className="input" type="text" placeholder="Your Name" />
        </div>
        </div>
        <div className="field">
        <div className="control">
            <input className="input" type="text" placeholder="Your Email" />
        </div>
        </div>
        <div className="field">
        <div className="control">
            <textarea className="textarea" placeholder="Your Message" />
        </div>
        </div>
        <div className="field">
        <Tippy
            placement="left"
            arrow="true"
            content="Submit"
            className="Submit"
        >
            <button id="submit-form" className="button">
            <FontAwesomeIcon icon="paper-plane" />
            </button>
        </Tippy>
        </div>
    </div>
</div>
)

export default ContactForm
