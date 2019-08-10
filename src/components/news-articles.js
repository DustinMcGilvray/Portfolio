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
          <div>
            <h2 className="title has-text-white is-uppercase">Headline News</h2>
            <CarouselProvider
              orientation={'vertical'}
              naturalSlideWidth={100}
              naturalSlideHeight={14}
              totalSlides={10}
              visibleSlides={3}
              step={1}
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
              <ButtonLast
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <FontAwesomeIcon
                  icon={'fast-backward'}
                  size={'2x'}
                  color={'yellow'}
                  fixedWidth
                />
              </ButtonLast>
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
              <ButtonFirst
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <FontAwesomeIcon
                  icon={'fast-forward'}
                  size={'2x'}
                  color={'red'}
                  fixedWidth
                />
              </ButtonFirst>
            </CarouselProvider>
          </div>
        )}
      />
    )
  }
}

export default NewsArticles