import React, { useContext } from 'react'
import ResultContext from '../context/ResultContext'

import Default from '../assets/guitarra.png'

const Result = ({image}) => {
  const ContextValue = useContext(ResultContext)
  return (
    <section className="result">
      <img className="floating" src={image ? image : Default} alt="resultado-final" />
      <h3>
        {ContextValue.text || 'Esto es lo que viste en el cielo'}
      </h3>
    </section>
  )
}

export default Result
