import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const Flicker = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)

  const handleYes = () => {
    contextValue.response.push('y titila')
    contextValue.text = 'Es una estrella'
    history.push('/result')
  }

  const handleNo = () => {
    contextValue.response.push('y no titila')
    contextValue.text = 'Es un planeta'
    history.push('/result')
  }

  return (
    <Question
      data={contextValue.questions.flicker}
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default Flicker
