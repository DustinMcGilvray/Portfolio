import React from 'react'
import './news-article-item.css'

const NewsArticleItem = (props) => (
    <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-2by1">
        <img src={props.image} alt="Image"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.title}</strong> <small>{props.author}</small>
          <br/>
         {props.content}
        </p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item" aria-label="reply">
            <span className="icon is-small">
              <i className="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="retweet">
            <span className="icon is-small">
              <i className="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
)

export default NewsArticleItem