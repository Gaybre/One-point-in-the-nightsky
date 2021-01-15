import React, { useContext } from 'react'
import ResultContext from '../context/ResultContext'

import randomOne from '../assets/character/astronauta-sobre-luna.png'
import randomTwo from '../assets/character/lectura.png'
import randomThree from '../assets/character/luna-globo.png'
import randomFour from '../assets/character/luna-y-notas.png'
import randomFive from '../assets/character/nube.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Result = () => {
  const contextValue = useContext(ResultContext)
  const image =  contextValue.finalResult

  const getRandomImage = () => {
    const random = Math.ceil(Math.random()*10)
    if (random <= 2) return randomOne
    if ((random === 3) || (random === 4)) return randomTwo
    if ((random === 5) || (random === 6)) return randomThree
    if ((random === 7) || (random === 8)) return randomFour
    if ((random === 9) || (random === 10)) return randomFive
  }

  return (
    <>
      <section className="result">
        <img className="result__image-result" src={(image !== '') ? image : randomOne} alt="resultado-final" />
        <h3 className="result__text">
          {contextValue.text || 'Esto es lo que viste en el cielo'}
        </h3>
        <Link className="result__button" to="#">
          <Button
            title="Necesito más información"
            typeStyle="outline"
          />
        </Link>
      </section>

      <img className="result__random-character floating" src={getRandomImage()} alt="random-character" />
    </>
  )
}

export default Result
