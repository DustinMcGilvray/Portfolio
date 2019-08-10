import React from 'react'
import Moment from 'moment'

const RssFeedItem = (props) => (
  <div className="box is-radiusless box-style">
  <article className="media">
    <div className="media-left">
      <a href={props.url} target="__blank">
        <img
          src={props.image}
          alt={props.title}
          style={{ width: '128px' }}
        />
      </a>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <div className="is-uppercase has-text-weight-bold">
            {props.title}
          </div>
          <span>By: {props.author}</span>
          <span className="is-pulled-right">
            {Moment(props.date).format(
              'MMMM Do YYYY, h:mm:ss a'
            )}
          </span>
          <br />
          {props.content}
        </p>
      </div>
    </div>
  </article>
</div>
)

export default RssFeedItem