import React, { useContext } from 'react'
import ResultContext from '../context/ResultContext'
import { WindupChildren } from "windups"

import Header from '../components/Header'
import ButtonsNav from '../components/ButtonsNav'

const Layout = ({children}) => {
  const Result = useContext(ResultContext)
  const Res = Result.response.join(' ')

  return (
    <main className="main">
      <Header />
      <h4>
        <span>
          <WindupChildren>
            {Res}
          </WindupChildren>
        </span>
      </h4>
      {children}
      <div className="main__buttons">
        <ButtonsNav />
      </div>
    </main>
  )
}

export default Layout
