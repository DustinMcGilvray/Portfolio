import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contact-card.css'

const ContactCard = () => (
<div>
    <span className="icon">
        <a
        href="https://github.com/DustinMcGilvray"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
    </span>

    <span className="icon">
        <a
        href="https://linkedin.com/in/dustinmcgilvray"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
        </a>
    </span>
    
    <span className="icon">
        <a href="/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'skype']} size="2x" />
        </a>
    </span>
    
    <span className="icon">
        <a href="/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon="envelope" size="2x" />
        </a>
    </span>
    
    <span className="icon">
        <a href="/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon="comment-alt" size="2x" />
        </a>
    </span>
</div>
)

export default ContactCard
