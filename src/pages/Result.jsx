import React, { useContext } from 'react'
import ResultContext from '../context/ResultContext'

import Default from '../assets/astronauta-meditando.png'

const Result = ({text, image}) => {
  const values = useContext(ResultContext)
  return (
    <section className="result">
      <img className="floating" src={image ? image : Default} alt="resultado-final" />
      <h2>
        {values.text || 'Esto es lo que viste en el cielo'}
      </h2>
    </section>
  )
}

export default Result
