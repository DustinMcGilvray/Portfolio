import React from 'react'
import AudioCard from 'audiocard'


/* AudioCard Player: https://github.com/erikras/audiocard */
/* AudioCard Player:  https://erikras.github.io/audiocard/?path=/story/examples--plain */


const PodcastPlayer = (props) => (
            <AudioCard
              title={props.title}
              art={props.art}
              source={props.source}
              skipBackSeconds={10}
              skipForwardSeconds={30}
              color="white"
              background="transparent"
              progressBarBackground="darkorange"
              progressBarCompleteBackground="darkGray"
            />
)

export default PodcastPlayer
