import React from 'react'

const Button = ({typeStyle, title, animation, onClick}) => {
  const typeButton = typeStyle ? `btn--${typeStyle}` : 'btn--normal'

  return (
    <button
      className={`${typeButton} ${animation}`}
      onClick={onClick}
    >
      {title || 'ACEPTAR'}
    </button>
  )
}

export default Button
