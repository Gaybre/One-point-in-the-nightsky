import React from 'react'
import { useHistory } from 'react-router-dom'

import AstronautLost from '../assets/guitarra.png'
import Button from '../components/Button'

const Lost = () => {
  const History = useHistory()
  const handleClick = () => History.push('/')

  return (
    <section>
      <img src={AstronautLost} alt="ruta-perdida" />
      <h2>
        No encontramos la ruta que estas buscando
      </h2>
      <Button
        title="Ir al inicio"
        typeStyle="normal"
        onClick={() => handleClick()}
      />
    </section>
  )
}

export default Lost
