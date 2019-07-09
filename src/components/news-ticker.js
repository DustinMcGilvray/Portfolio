import React, { Component } from 'react'
import Ticker from 'react-ticker'

/*https://github.com/AndreasFaust/react-ticker */

class NewsTicker extends Component {

state = {
    move: true
}

    render() {
        return (

            <Ticker speed={this.state.move ? 6 : 0}>
                {() => (
                    <h1 onMouseEnter={() => {this.setState({move: false})}} onMouseLeave={() => this.setState({move: true})}> THIS IS JUST A TEST +++ </h1>
                )}
            </Ticker>
        )
    }
}

export default NewsTicker