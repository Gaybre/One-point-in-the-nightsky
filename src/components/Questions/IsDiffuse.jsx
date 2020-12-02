import React from 'react'
import { useHistory } from 'react-router-dom'

import Question from '../Question'

const IsDiffuse = () => {
  const history = useHistory()

  const handleYes = () => history.push('/has-tail')
  const handleNo = () => history.push('/flicker')

  return (
    <Question
      question="¿Es difuso y débil?"
      yes={() => handleYes()}
      no={() => handleNo()}
    />
  )
}

export default IsDiffuse
