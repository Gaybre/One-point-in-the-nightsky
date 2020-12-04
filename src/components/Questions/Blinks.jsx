import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const Blinks = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)

  const handleYes = () => {
    contextValue.response.push('y parpadea')
    contextValue.text = 'Es un avion'
    history.push('/result')
  }

  const handleNo = () => {
    contextValue.response.push('y no parpadea')
    contextValue.text = 'Es un satélite o la Estación Espacial Internacional'
    history.push('/result')
  }

  return (
    <Question
      question="¿Parpadea?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default Blinks
