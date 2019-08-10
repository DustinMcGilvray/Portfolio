import React from 'react'
import { RadialProgress } from 'react-radial-progress-indicator'

const SkillsGauge = props => {
  return (
    <div>
      <div className="skill-graph">
        <RadialProgress
          width={50}
          height={50}
          steps={5}
          step={props.number}
          ringBgColour="#ccc"
          ringFgColour="blue"
          ringThickness={0.2}
          segmented
        />
      </div>
      <div className="skill-level">
        {(() => {
          switch (props.number) {
            case '1':
              return 'Novice'
            case '2':
              return 'Competent'
            case '3':
              return 'Proficient'
            case '4':
              return 'Expert'
            case '5':
              return 'Master'
            default:
              return 'Willing to Learn'
          }
        })()}
      </div>
    </div>
  )
}

export default SkillsGauge