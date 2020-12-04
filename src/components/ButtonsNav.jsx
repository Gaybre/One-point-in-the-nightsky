import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContex from '../context/ResultContext'

import Button from './Button'

const ButtonsNav = () => {
  const history = useHistory()
  const Result = useContext(ResultContex)

  const handleRestart = () => {
    Result.response = []
    history.push('./')
  }
  const handleBack = () => {
    Result.response.pop()
    history.goBack()
  }

  return (
    <div className="buttons-nav">
      <Button
        typeStyle="text"
        title="Reiniciar"
        onClick={() => handleRestart()}
      />
      <Button
        typeStyle="text"
        title="Ir atrás"
        onClick={() => handleBack()}
      />
    </div>
  )
}

export default ButtonsNav
