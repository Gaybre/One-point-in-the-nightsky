import React from 'react'
import Nightsky from '../assets/nightsky-1.jpg'

const Card = ({type, onClick, image}) => {
  const cardType = (type === 'Sí') ? 'succes' : 'warning'

  return (
    <section
      className={`card--${cardType}`}
      onClick={onClick}
    >
      <img src={Nightsky} alt='Nightsky-img' />
      <h2>
        {type || 'No'}
      </h2>
    </section>
  )
}

export default Card
