export const dataQuestions = {
  hasMovement: {
    question: '¿Se mueve?',
    animationYes: 'hasMovement',
    animationNo: ''
  },
  isDiffuse: {
    question: '¿Es difuso y débil?',
    animationYes: 'difuse',
    animationNo: ''
  },
  flicker: {
    question: '¿Titila?',
    animationYes: 'blinks',
    animationNo: ''
  },
  hasTail: {
    question: '¿Tiene cola?',
    animationYes: 'difuse hasTail',
    animationNo: 'difuse'
  },
  isFast: {
    question: '¿Rápido?',
    animationYes: 'hasFastMovement',
    animationNo: 'hasMovement'
  },
  blinks: {
    question: '¿Parpadea?',
    animationYes: 'hasFastMovementBlink',
    animationNo: 'hasMovement'
  },
  isSoFast: {
    question: '¿Tanto que casi no te da tiempo de verlo?',
    animationYes: 'hasVeryFastMovement',
    animationNo: 'hasFastMovement'
  },
  brightnessIncrease: {
    question: '¿Aumentó de brillo antes de desaparecer?',
    animationYes: 'brightnessIncrease',
    animationNo: 'hasVeryFastMovement'
  }
}
