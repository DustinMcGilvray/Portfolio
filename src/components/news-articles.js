import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment'
import NewsArticleItem from '../components/news-article-item'
import NewsArticleCard from '../components/news-article-card'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from 'pure-react-carousel'
  import 'pure-react-carousel/dist/react-carousel.es.css'
import './news-articles.css'

class NewsArticles extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query NewsArticleQuery {
            thirdPartyNewsapi {
              articles {
                source {
                  name
                }
                author
                title
                description
                url
                urlToImage
                publishedAt
                content
              }
            }
          }
        `}
        render={data => (
          <div>
     
          
          {data.thirdPartyNewsapi.articles.map(article => (
                <NewsArticleItem
                    image={article.urlToImage}
                    title={article.title}
                    author={article.author}
                    content={article.content}
                    published={article.publishedAt}
                />
          ))}
          </div>
        )}
      />
    )
  }
}

export default NewsArticles
