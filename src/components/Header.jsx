import React from 'react'

import ButtonsNav from './ButtonsNav'

const Header = () => {
  return (
    <header className="header">
      <h3>
        ¿Qué es lo que ví en el cielo?
      </h3>
      <nav className="header__nav">
        <ButtonsNav />
      </nav>
    </header>
  )
}

export default Header
