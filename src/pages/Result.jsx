import React, { useContext } from 'react'
import ResultContext from '../context/ResultContext'

import Default from '../assets/guitarra.png'

const Result = () => {
  const contextValue = useContext(ResultContext)
  const image =  contextValue.finalResult
  return (
    <section className="result">
      <img className="result__image-result" src={(image !== '') ? image : Default} alt="resultado-final" />
      <h3>
        {contextValue.text || 'Esto es lo que viste en el cielo'}
      </h3>
    </section>
  )
}

export default Result
