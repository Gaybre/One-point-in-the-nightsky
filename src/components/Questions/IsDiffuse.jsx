import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContext from '../../context/ResultContext'

import Question from '../Question'

const IsDiffuse = () => {
  const history = useHistory()
  const contextValue = useContext(ResultContext)


  const handleYes = () => {
    contextValue.response.push('difuso, débil')
    history.push('/has-tail')
  }

  const handleNo = () => {
    contextValue.response.push('claro a simple vista')
    history.push('/flicker')
  }

  return (
    <Question
      question="¿Es difuso y débil?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default IsDiffuse
