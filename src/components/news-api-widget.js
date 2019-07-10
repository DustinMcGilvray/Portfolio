import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

/*https://github.com/AndreasFaust/react-ticker */
/* https://www.npmjs.com/package/react-ticker */
/* https://newsapi.org/docs */

const NewsApiWidget = () => (
  <StaticQuery
    query={graphql`
      query NewsApiQuery {
  thirdPartyNewsapi{
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
        <a href={data.thirdPartyNewsapi.articles[0].url} target="__blank">
            {data.thirdPartyNewsapi.articles[0].title}
        </a>
      </div>
    )}
  />
)

export default NewsApiWidget
