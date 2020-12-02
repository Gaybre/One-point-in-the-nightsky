import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const HasTail = () => {
  const Result = useContext(ResultContext)
  const history = useHistory()

  const handleYes = () => {
    Result.text = 'Es un cometa'
    history.push('/result')
  }
  const handleNo = () => {
    Result.text = 'Es un objeto del cielo profundo: Galaxia || Cúmulo'
    history.push('/result')
  }

  return (
    <Question
      question="¿Tiene cola?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default HasTail
