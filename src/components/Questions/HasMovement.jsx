import React from 'react'
import { useHistory } from 'react-router-dom'

import Question from '../Question'

const HasMovement = () => {
  const history = useHistory()

  const handleYes = () => history.push('/is-fast')
  const handleNo = () => history.push('/is-diffuse')

  return (
    <Question
      question="¿Se mueve?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default HasMovement
