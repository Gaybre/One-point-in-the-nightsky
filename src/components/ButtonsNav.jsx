import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ResultContex from '../context/ResultContext'

import Button from './Button'
import Refresh from '../assets/icons/refresh.png'
import Back from '../assets/icons/back.png'

const ButtonsNav = ({icons}) => {
  const history = useHistory()
  const contextValue = useContext(ResultContex)

  const handleRestart = () => {
    contextValue.response = []
    history.push('./')
  }

  const handleBack = () => {
    if ((contextValue.response.includes('muy rápido')) && contextValue.response.length <3) {
      contextValue.response.pop()
      contextValue.response.push('rápido')
    } else {
      contextValue.response.pop()
    }
    history.goBack()
  }

  if (icons) {
    return (
      <div className="buttons-nav">
        <Button
          typeStyle="text"
          title={<img src={Refresh} alt="Reiniciar" />}
          onClick={() => handleRestart()}
        />
        <Button
          typeStyle="text"
          title={<img src={Back} alt="Ir atrás" />}
          onClick={() => handleBack()}
        />
      </div>
    )
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
