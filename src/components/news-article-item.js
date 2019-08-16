import React from 'react'
import './news-article-item.css'

const NewsArticleItem = props => (
  <div
    id="newsArticleItem"
    className="box is-radiusless is-shadowless has-text-white"
  >
    <article className="media">
      <div class="media-left">
        <figure className="image is-64x64">
          <a href={props.url} target="__blank">
            <img src={props.image} alt="news" />
          </a>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong className="has-text-white">{props.title}</strong>
            <br />
            <span>by:</span>&nbsp;<span>{props.author}</span>
            <br />
            <br />
            {props.content}
          </p>
        </div>
      </div>
    </article>
  </div>
)

export default NewsArticleItem