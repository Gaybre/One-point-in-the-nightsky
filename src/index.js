import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { dataQuestions, dataAnswers } from './utils/dataQuestions'

import ResultContext from './context/ResultContext'

const Value = {
  text: "llegaste al resultado",
  // animationYes: "",
  // animationNo: "",
  response: [],
  questions: dataQuestions,
  answers: dataAnswers,
  finalResult: ''
}

ReactDOM.render(
  <React.StrictMode>
    <ResultContext.Provider value={Value}>
      <App />
    </ResultContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
