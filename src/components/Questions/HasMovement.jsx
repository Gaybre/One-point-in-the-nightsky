import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const HasMovement = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)


  const handleYes = () => {
    contextValue.response.push('Se mueve')
    history.push('/is-fast')
  }

  const handleNo = () => {
    contextValue.response.push('Es un punto estático')
    history.push('/is-diffuse')
  }

  return (
    <Question
      question="¿Se mueve?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default HasMovement
