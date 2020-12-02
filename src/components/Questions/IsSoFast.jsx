import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const IsSoFast = () => {
  const history = useHistory()
  const Result = useContext(ResultContext)

  const handleYes = () => history.push('/brightness-increase')
  const handleNo = () => {
    Result.text = 'Es un satélite o el ingreso de basura espacial'
    history.push('/result')
  }

  return (
    <Question
      question="¿Tanto que casi no te da tiempo de verlo?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default IsSoFast