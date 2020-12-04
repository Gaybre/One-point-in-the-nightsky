import React, { useContext } from 'react'
import ResultContext from '../context/ResultContext'

import Default from '../assets/astronauta-meditando.png'

const Result = ({image}) => {
  const ContextValue = useContext(ResultContext)
  return (
    <section className="result">
      <img className="floating" src={image ? image : Default} alt="resultado-final" />
      <h2>
        {ContextValue.text || 'Esto es lo que viste en el cielo'}
      </h2>
    </section>
  )
}

export default Result
