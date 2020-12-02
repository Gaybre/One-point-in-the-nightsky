import React from 'react'
import { useHistory } from 'react-router-dom'

import Question from '../Question'

const IsFasts = () => {
  const history = useHistory()

  const handleYes = () => history.push('/is-so-fast')
  const handleNo = () => history.push('/blinks')

  return (
    <Question
      question="¿Rápido?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default IsFasts
