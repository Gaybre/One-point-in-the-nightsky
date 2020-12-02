import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import ResultContext from './context/ResultContext'

ReactDOM.render(
  <React.StrictMode>
    <ResultContext.Provider value={{text: "llegaste al resultado", anotherText: "I am another text"}}>
      <App />
    </ResultContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
