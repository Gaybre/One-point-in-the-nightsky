import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContex from '../../context/ResultContext'

import Question from '../Question'

const Flicker = () => {
  const Result = useContext(ResultContex)
  const history = useHistory()

  const handleYes = () => {
    Result.text = 'Es una estrella'
    history.push('/result')
  }
  const handleNo = () => {
    Result.text = 'Es un planeta'
    history.push('/result')
  }

  return (
    <Question
      question="¿Titila?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default Flicker
