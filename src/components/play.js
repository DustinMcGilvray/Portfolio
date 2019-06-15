import React from 'react'
import Layout from "../components/layout"
import "./play.css"

const PlayApp = (props) => (
<Layout>
    <div id="play-card" className="card">
        <iframe src={props.appSRC} title="props.appTitle">
            <h2>Apparently Your Browser doesn't support iFrame!</h2>
        </iframe>
    </div>
 </Layout>
)

export default PlayApp