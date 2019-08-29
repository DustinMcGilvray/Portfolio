import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NewsArticleItem from '../components/news-article-item'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonPlay,
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
          <div id="headline-news-column" className="columns">
            <div className="column">
              <CarouselProvider
                orientation={'vertical'}
                naturalSlideWidth={100}
                naturalSlideHeight={12}
                totalSlides={20}
                visibleSlides={1}
                step={1}
                isPlaying={this.playNews}
              >
                <div className="columns">
                  <div id="headline-slider-column" className="column">
                    <Slider>
                      {data.thirdPartyNewsapi.articles.map(article => (
                        <Slide>
                          <NewsArticleItem
                            image={article.urlToImage}
                            url={article.url}
                            title={article.title}
                            author={article.author}
                            content={article.description}
                            published={article.publishedAt}
                          />
                        </Slide>
                      ))}
                    </Slider>
                  </div>
                  <div
                    id="up-down-button-controls"
                    className="column is-narrow is-vcentered"
                  >
                    <ul>
                      <li>
                        <ButtonNext
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                          }}
                        >
                          <FontAwesomeIcon
                            icon={'caret-up'}
                            size={'2x'}
                            color={'white'}
                          />
                        </ButtonNext>
                      </li>
                      <li>
                        <ButtonPlay
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'white',
                          }}
                          childrenPlaying={
                            <FontAwesomeIcon
                            icon={'stop'}
                            size={'md'}
                            color={'white'}
                          />     
                          }
                          childrenPaused={
                            <FontAwesomeIcon
                            icon={'play'}
                            size={'md'}
                            color={'white'}
                          />  
                          }
                        />
                      </li>
                      <li>
                        <ButtonBack
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                          }}
                        >
                          <FontAwesomeIcon
                            icon={'caret-down'}
                            size={'2x'}
                            color={'white'}
                          />
                        </ButtonBack>
                      </li>
                    </ul>
                  </div>
                </div>
              </CarouselProvider>
            </div>
          </div>
        )}
      />
    )
  }
}

export default NewsArticles
