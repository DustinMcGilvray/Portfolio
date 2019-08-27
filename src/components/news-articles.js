import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NewsArticleItem from '../components/news-article-item'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonFirst,
  ButtonPlay,
  ButtonLast,
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
          <div id="news-api-card" className="card">
            <header className="card-header">
              <p className="card-header-title has-text-white is-uppercase is-centered">
                Headline News
              </p>
            </header>
            <div className="card-content">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={6}
              totalSlides={10}
              visibleSlides={1}
            >
             
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
              
              <footer className="card-footer">
                <p className="card-footer-item">
                  <ButtonLast
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon
                      icon={'fast-backward'}
                      size={'2x'}
                      color={'white'}
                      fixedWidth
                    />
                  </ButtonLast>
                </p>
                <p className="card-footer-item">
                  <ButtonBack
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon
                      icon={'backward'}
                      size={'2x'}
                      color={'white'}
                      fgv
                      fixedWidth
                    />
                  </ButtonBack>
                </p>
                <p className="card-footer-item">
                  <ButtonPlay
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon
                      icon={'play'}
                      size={'2x'}
                      color={'white'}
                      fixedWidth
                    />
                  </ButtonPlay>
                </p>
                <p className="card-footer-item">
                  <ButtonNext
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon
                      icon={'forward'}
                      size={'2x'}
                      color={'white'}
                      fixedWidth
                    />
                  </ButtonNext>
                </p>
                <p className="card-footer-item">
                  <ButtonFirst
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon
                      icon={'fast-forward'}
                      size={'2x'}
                      color={'white'}
                      fixedWidth
                    />
                  </ButtonFirst>
                </p>
              </footer>
            </CarouselProvider>
            </div>
          </div>
        )}
      />
    )
  }
}

export default NewsArticles
