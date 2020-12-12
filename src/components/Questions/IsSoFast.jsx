import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const IsSoFast = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)

  const handleYes = () => {
    contextValue.response.pop()
    contextValue.response.push('muy rápido')
    history.push('/brightness-increase')
  }
  const handleNo = () => {
    contextValue.response.push('.')
    contextValue.text = 'Es un satélite o el ingreso de basura espacial'
    history.push('/result')
  }

  return (
    <Question
      data={contextValue.questions.isSoFast}
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default IsSoFast