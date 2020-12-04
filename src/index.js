import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import ResultContext from './context/ResultContext'

const Value = {
  text: "llegaste al resultado",
  response: []
}

ReactDOM.render(
  <React.StrictMode>
    <ResultContext.Provider value={Value}>
      <App />
    </ResultContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
