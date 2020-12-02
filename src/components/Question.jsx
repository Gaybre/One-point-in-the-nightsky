import React from 'react'

import Card from './Card'

const Question = ({question, yes, no}) => (
  <section className="question">
    <h1>
      {question || '¿Qué es una pregunta?'}
    </h1>
    <div className="question__cards">
      <Card
        type="Sí"
        onClick={yes}
      />
      <Card
        type="No"
        onClick={no}
      />
    </div>
  </section>
)

export default Question
