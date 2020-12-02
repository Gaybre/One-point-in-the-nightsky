import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const Blinks = () => {
  const Result = useContext(ResultContext)
  const history = useHistory()

  const handleYes = () => {
    Result.text = 'Es un avion'
    history.push('/result')
  }
  const handleNo = () => {
    Result.text = 'Es un satélite o la Estación Espacial Internacional'
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
