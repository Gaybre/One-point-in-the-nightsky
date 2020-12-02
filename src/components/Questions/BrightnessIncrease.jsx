import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const BrightnessIncrease = () => {
  const history = useHistory()
  const Res = useContext(ResultContext)

  const handleYes = () => {
    Res.text = 'Es un volido'
    history.push('/result')
  }
  const handleNo = () => {
    Res.text = 'Es un meteoro o una estrella fugáz'
    history.push('/result')
  }

  return (
    <Question
      question="¿Aumentó de brillo antes de desaparecer?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default BrightnessIncrease