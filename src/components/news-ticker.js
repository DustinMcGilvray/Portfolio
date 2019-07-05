import React from 'react'
import Ticker from 'react-ticker'

/*https://github.com/AndreasFaust/react-ticker */

const NewsTicker = () => (
   
    <Ticker speed={6} move={true}>
        {() => (
            <h1> THIS IS JUST A TEST +++ </h1>
        )}
    </Ticker>
  
)

export default NewsTicker