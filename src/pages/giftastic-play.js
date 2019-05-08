import React from 'react'
import Layout from "../components/layout"
import "./giftastic-play.css"

const GiftasticPlay = () => (
<Layout>
    <div id="giftastic-play-card" className="card">
        <iframe src="https://dustinmcgilvray.github.io/Giftastic/" title="giftastic">
            <h2>Apparently Your Browser doesn't support iFrame!</h2>
        </iframe>
    </div>
 </Layout>
)

export default GiftasticPlay