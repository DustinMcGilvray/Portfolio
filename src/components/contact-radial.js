import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contact-radial.css'

export default ({ x, y }) => (
  <PieMenu 
    radius='200px' 
    centerRadius='30px'
    centerX={x}
    centerY={y}
    className = 'radial-menu'
  >
    <Slice onSelect={() => window.open('https://github.com/DustinMcGilvray', '_blank')}> 
        <FontAwesomeIcon icon={['fab', 'github']} size="3x" color='white' />
    </Slice>
    <Slice onSelect={() => window.open('https://linkedin.com/in/dustinmcgilvray', '_blank')}>
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="3x" color='white'/>
    </Slice>
    <Slice onSelect={() => window.open('https://www.twitter.com', '_blank')}>
        <FontAwesomeIcon icon={['fab', 'skype']} size="2x" color='yellow'/>
    </Slice>
    <Slice onSelect={() => window.open('https://www.linkedin.com', '_blank')}>
        <FontAwesomeIcon icon="envelope" size="2x" color='purple' />
    </Slice>
    <Slice onSelect={() => window.open('https://github.com/psychobolt/react-pie-menu', '_blank')}>
        <FontAwesomeIcon icon="comment-alt" size="2x" color='lightgreen' />
    </Slice>
    <Slice onSelect={() => window.open('https://en.wikipedia.org/wiki/RSS', '_blank')}>
        <FontAwesomeIcon icon='phone' size="2x" color='cyan' />
    </Slice>
        <Slice onSelect={() => window.open('https://www.pinterest.com/', '_blank')}>
    <FontAwesomeIcon icon={['fab', 'pinterest']} size="2x" color='pink'/>
    </Slice>
    <Slice>  
        <FontAwesomeIcon icon={['fab', 'codepen']} size="2x" color='white'/>
    </Slice>
  </PieMenu>
)