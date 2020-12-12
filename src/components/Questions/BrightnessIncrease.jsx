import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const BrightnessIncrease = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)

  const handleYes = () => {
    contextValue.response.push('y aumentó su brillo tras desaparecer')
    contextValue.text = 'Es un volido'
    history.push('/result')
  }

  const handleNo = () => {
    contextValue.response.push('y mantuvo el mismo brillo')
    contextValue.text = 'Es un meteoro o una estrella fugáz'
    history.push('/result')
  }

  return (
    <Question
      data={contextValue.questions.brightnessIncrease}
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default BrightnessIncrease
