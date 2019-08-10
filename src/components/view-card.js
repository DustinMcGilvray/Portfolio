import React from 'react'
import './view-card.css'

/*TODO: Employ ViewCard Component across App*/

const ViewCard = () => (
  <div id="view-card" className="card">
    <div className="site-content">{children}></div>
  </div>
)

export default ViewCard