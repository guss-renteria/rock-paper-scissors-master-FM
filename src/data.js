import icon_rock from '@/images/icon-rock.svg'
import icon_paper from '@/images/icon-paper.svg'
import icon_scissors from '@/images/icon-scissors.svg'
import icon_lizard from '@/images/icon-lizard.svg'
import icon_spock from '@/images/icon-spock.svg'

export default [
  {
    name: 'ROCK',
    icon: icon_rock,
    deletes: [
      'LIZARD',
      'SCISSORS'
    ],
  },
  {
    name: 'PAPER',
    icon: icon_paper,
    deletes: [
      'ROCK',
      'SPOCK'
    ],
  },
  {
    name: 'SCISSORS',
    icon: icon_scissors,
    deletes: [
      'PAPER',
      'LIZARD'
    ],
  },
  {
    name: 'LIZARD',
    icon: icon_lizard,
    deletes: [
      'SPOCK',
      'PAPER'
    ],
  },
  {
    name: 'SPOCK',
    icon: icon_spock,
    deletes: [
      'SCISSORS',
      'ROCK'
    ],
  },
]
