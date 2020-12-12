import React from 'react'
import { WindupChildren } from 'windups'

import Card from './Card'

const Question = ({data, yes, no}) => (
  <section className="question">
    <h1>
      <span>
        <WindupChildren>
          {data.question || '¿Qué es una pregunta?'}
        </WindupChildren>
      </span>
    </h1>
    <div className="question__cards">
      <Card
        animation={data.animationYes}
        type="Sí"
        onClick={yes}
      />
      <Card
        animation={data.animationNo}
        type="No"
        onClick={no}
      />
    </div>
  </section>
)

export default Question
