import React from 'react'

import './view-card.css'

const ViewCard = () => (
    <div id='view-card' className = 'card'>
        <div className="site-content">{children}>
        </div>
    </div>
)

export default ViewCard