import React from 'react'
import { useHistory } from 'react-router-dom'
import { Pace, WindupChildren } from "windups"

import Astronauta from '../assets/sobre-cohete.png'
import skyWatchers from '../assets/skywatcher.png'
import Button from '../components/Button'

const Home = () => {
  const history = useHistory()

  const handleClick = () => {
    const $astronauta = document.querySelector('.home__image')
    const $entry = document.querySelector('.home__entry')
    $astronauta.classList.remove('floating')
    $astronauta.classList.add('astronautFadeOut')
    $entry.classList.add('flash')

    setTimeout(() => {
      const $home = document.querySelector('.home')
      $home.style.display = 'none'
      history.push('/has-movement')
    }, 2800)
  }

  return (
    <>
      <div className="home">
        <div className="home__entry">
          <WindupChildren>
            <h2>
                ¿Viste algo en el cielo y no sabes qué es?
            </h2>
            <Pace getPace={(char) => (char === " " ? 600 : 40)}>
              <h1>
                Tranquilo, <span>¡Averiguémoslo!</span>
              </h1>
            </Pace>
            <Button
              animation="fadeIn"
              onClick={() => handleClick()}
              typeStyle="outline"
              title="Empezar"
            />
          </WindupChildren>
        </div>
        <figure className="home__image">
          <img className="floating" src={Astronauta} alt='astronauta-meditando' />
        </figure>
      </div>
      <img className="sky-watchers" src={skyWatchers} alt="skyWatchers" />
    </>
  )
}

export default Home
