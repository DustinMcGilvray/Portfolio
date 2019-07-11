import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Ticker from 'react-ticker'
import './news-ticker.css'

/*https://github.com/AndreasFaust/react-ticker */
/* https://www.npmjs.com/package/react-ticker */
/* https://newsapi.org/docs */

class NewsTicker extends Component {

state = {
    move: true
}

    render() {
        return (

            <div onMouseEnter={() => {this.setState({move: false})}} onMouseLeave={() => this.setState({move: true})}> 
            <Ticker speed={this.state.move ? 6 : 0} offset='run-in' mode='smooth' height={40}>
                {() => (
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
                <div id="outer-ticker-div" style={{whiteSpace: 'nowrap'}}>
                  {data.thirdPartyNewsapi.articles.map(
                    (article)=>(
                        <span>
                            <a id="news-article" href={article.url}>
                                {article.title}
                            </a>
                        </span>
                    )
                  )}
                </div>
                )}
                />         
                )}
                </Ticker>
                </div>
        )
    }
}

export default NewsTicker