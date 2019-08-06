import React, { Component } from 'react'
import Layout from '../components/layout'
import NewsArticles from '../components/news-articles'
import NewsArticleCard from '../components/news-article-card'
class NewsPage extends Component {

  render() {
    return(

      <Layout>
          <div className="container has-text-centered">
          <div className='columns'>
          <div className='column'>
          
          <NewsArticles/>
          </div>
          <div className='column is-3'>       
            <NewsArticleCard/>
          </div>
          </div>
          </div>
      </Layout>
    )
  }
}

export default NewsPage