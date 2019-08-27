import React from 'react'
import './news-article-card.css'

const NewsArticleCard = props => (
  <div class="card">
    <div class="card-image">
      <figure class="image is-96x96">
        <img src={props.image} alt="Placeholder" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <div class="media-content">
            <p class="title is-size-6">{props.title}</p>
            <p class="subtitle is-7">{props.author}</p>
          </div>
        </div>
      </div>
      <div class="content is-size-7">
        {props.content}
        <br />
        <div>{props.published}</div>
      </div>
    </div>
  </div>
)

export default NewsArticleCard