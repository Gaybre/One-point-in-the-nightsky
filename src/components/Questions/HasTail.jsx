import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const HasTail = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)

  const handleYes = () => {
    contextValue.response.push('y tiene cola')
    contextValue.text = 'Es un cometa'
    history.push('/result')
  }

  const handleNo = () => {
    contextValue.response.push('y no tiene cola')
    contextValue.text = 'Es un objeto del cielo profundo: Galaxia || Cúmulo'
    history.push('/result')
  }

  return (
    <Question
      data={contextValue.questions.hasTail}
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default HasTail
