let faders = [
  {
    cc: '1',
    n: 'Modulation',
    r: [],
    init: '100',
    clr: '#60DF21',
  },
  {
    cc: '11',
    n: 'Expression',
    r: [],
    init: '102',
    clr: '#DF4C21',
  },
  {
    cc: '2',
    n: 'Breath',
    r: [
      { i: '0', n: 'non vib', v: '10' },
      { i: '1', n: 'vib', v: '56' },
    ],
    init: '50',
    clr: '#A321DF',
  },
  {
    cc: '21',
    n: 'Vibrato',
    r: [
      { i: '0', n: 'non vib', v: '10' },
      { i: '1', n: 'vib', v: '56' },
    ],
    init: '45',
    clr: '#00DBA6',
  },
  {
    cc: '16',
    n: 'Speed',
    r: [],
    init: '72',
    clr: '#EBFF00',
  },

  {
    xy: [2, 4],
    n: ['Breath', 'Slide'],
    r: [],
    clr: '#A321DF',
  },
]

export default faders
