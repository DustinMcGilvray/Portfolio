import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contact-keypad.css'

const ContactKeypad = () => (
<div id="keypad-card" className="card">
    <section>
        <div className="columns">
            <div className="column">
                <span className="icon">
                    <a href="https://github.com/DustinMcGilvray" target="__blank">
                        <FontAwesomeIcon icon={['fab', 'github-square']} size="4x" color='gray' />
                    </a>
                </span>
                </div>
            <div className="column">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" color='blue'/>
            </div>
            <div className="column">
                <FontAwesomeIcon icon={['fab', 'skype']} size="3x" color='yellow'/>
            </div>
        </div>
    </section>

    <section>
        <div className="columns">
            <div className="column">
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" color='red' />
            </div>
            <div className="column">
            
            </div>
            <div className="column">
            
            </div>
        </div>
    </section>

    <section>
        <div className="columns">
            <div className="column">
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" color='red' />
            </div>
            <div className="column">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color='blue'/>
            </div>
            <div className="column">
            
            </div>
        </div>
    </section>

    <section>
        <div className="columns">
            <div className="column">
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" color='red' />
            </div>
            <div className="column">
            
            </div>
            <div className="column">
            
            </div>
        </div>
    </section>
</div>
)

export default ContactKeypad