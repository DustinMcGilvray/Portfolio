import React, { Component } from 'react'
import Ticker from 'react-ticker'
import NewsApiWidget from '../components/news-api-widget'


/*https://github.com/AndreasFaust/react-ticker */
/* https://www.npmjs.com/package/react-ticker */

class NewsTicker extends Component {

state = {
    move: true
}

    render() {
        return (

            <Ticker speed={this.state.move ? 6 : 0}>
                {() => (
                    <div onMouseEnter={() => {this.setState({move: false})}} onMouseLeave={() => this.setState({move: true})}> 
                        <NewsApiWidget/>             
                    </div>
                )}
            </Ticker>
        )
    }
}

export default NewsTicker