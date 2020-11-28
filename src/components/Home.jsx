import React from 'react'

import Astronauta from '../assets/astronauta-meditando.png'

const Home = () => {
  return (
    <div className="home">
      <div>
        <h2>
          ¿Viste algo en el cielo y no sabes qué es?
        </h2>
        <h1>
          ¡Averiguémoslo!
        </h1>
      </div>
      <a href='htttps://.pngtree.com/so/astronauta'>
        <img src={Astronauta} alt='astronauta-meditando' />
      </a>
    </div>
  )
}

export default Home
