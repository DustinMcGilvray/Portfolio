import React from 'react'
import { RadialProgress } from 'react-radial-progress-indicator';

const SkillsGauge = (props) => {
  return (
    <RadialProgress
      width={75}
      height={75}
      steps={5}
      step={3}
      ringBgColour='#ccc'
      ringFgColour='blue'
      ringThickness={0.2}
      segmented
    />
  )
}

export default SkillsGauge
