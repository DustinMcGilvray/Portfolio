import React, { Component } from 'react'
import RssFeedItem from '../rss-feed-item'

/* https://codepen.io/PiotrBerebecki/pen/pEYPbY */

class wiredPagination extends Component {
  constructor() {
    super()

var feeds = 'https://feed2json.org/convert?url=https://www.wired.com/feed/rss'

    this.state = {
      feedItems: feeds,
      currentPage: 1,
      feedItemsPerPage: 6,
    }

    this.handleClick = this.handleClick.bind(this)
    console.log(feeds)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    })
  }

  render() {
    const { feedItems, currentPage, feedItemsPerPage } = this.state

    // Logic for displaying current feedItems
    const indexOfLastFeedItem = currentPage * feedItemsPerPage
    const indexOfFirstFeedItem = indexOfLastFeedItem - feedItemsPerPage
    const currentFeedItem = feedItems.slice(
      indexOfFirstFeedItem,
      indexOfLastFeedItem
    )

    const renderFeedItems = currentFeedItem.map((feedItems, index) => {
      return (
        <RssFeedItem
            url={feedItems.link}
            image={feedItems.image}
            title={feedItems.title}
            author={feedItems.author}
            date={feedItems.date}
            content={feedItems.content}
        />
      )
    })

    // Logic for displaying page numbers
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(feedItems.length / feedItemsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      )
    })

    return (
      <div id="podcast-card" className="card has-text-white">
        <section>
          <div className="columns is-gapless is-multiline">
            {renderFeedItems}
          </div>
        </section>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    )
  }
}
export default wiredPagination