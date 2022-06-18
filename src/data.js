export default [
  {
    name: 'ROCK',
    deletes: [
      'LIZARD',
      'SCISSORS'
    ],
  },
  {
    name: 'PAPER',
    deletes: [
      'ROCK',
      'SPOCK'
    ],
  },
  {
    name: 'SCISSORS',
    deletes: [
      'PAPER',
      'LIZARD'
    ],
  },
  {
    name: 'LIZARD',
    deletes: [
      'SPOCK',
      'PAPER'
    ],
  },
  {
    name: 'SPOCK',
    deletes: [
      'SCISSORS',
      'ROCK'
    ],
  },
]
