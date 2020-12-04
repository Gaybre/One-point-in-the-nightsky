import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const IsFasts = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)

  const handleYes = () => {
  contextValue.response.push('rápído')
  history.push('/is-so-fast')
  }

  const handleNo = () => {
  contextValue.response.push('lento')
  history.push('/blinks')
  }

  return (
    <Question
      question="¿Rápido?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default IsFasts
