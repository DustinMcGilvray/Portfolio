import React from 'react'
import './news-article-item.css'

const NewsArticleItem = props => (
  <div
    id="news-article-item"
    className="card is-shadowless is-paddingless has-text-white"
  >
  <header className='card-header'>
    <p className='card-header-title is-centered has-text-white is-size-6'>{props.title}</p>
  </header>
    <article className="media">
      <div class="media-left">
        <div className="image">
          <a href={props.url} target="__blank">
            <img src={props.image} alt="news" style={{height: '100px', width: '100px'}}/>
          </a>
        </div>
      </div>
      <div className="media-content ">
        <div className="content">
          <p>
            <strong className="has-text-white is-size-6"></strong>
            <span>&nbsp;by:</span>&nbsp;<span>{props.author}</span>
          </p>
        </div>
      </div>
    </article>
  </div>
)

export default NewsArticleItem