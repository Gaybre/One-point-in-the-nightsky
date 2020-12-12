import React from 'react'

import Nightsky from '../assets/nightsky-1.jpg'
import ObjectInTheSky from '../assets/star.png'

const Card = ({type, onClick, animation}) => {
  const cardType = (type === 'Sí') ? 'succes' : 'warning'

  return (
    <section
      className={`card--${cardType}`}
      onClick={onClick}
    >
      <img
        src={Nightsky}
        alt='Nightsky-img'
      />
      <img
        src={ObjectInTheSky}
        alt='object-in-the-Nightsky'
        className={`${animation} object-in-the-Nightsky`}
      />
      <h2>
        {type || 'No'}
      </h2>
    </section>
  )
}

export default Card
