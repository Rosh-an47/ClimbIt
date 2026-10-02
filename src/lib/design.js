export const colors = {
  cream: '#F1F4F0',
  warmWhite: '#F9FAF7',
  sand: '#E2E9E4',
  stone: '#C9D3CD',
  charcoal: '#0E211D',
  graphite: '#40504A',
  muted: '#7A8780',
  glacier: '#DDEAE5',
  sunrise: '#C6A15B',
  alpenglow: '#D96C42',
  deepPine: '#123C34',
  pine: '#1C5A4D',
  warning: '#C6503D',
  riskGreen: '#5C9861',
  riskYellow: '#D1A52F',
  riskOrange: '#D47737',
  riskRed: '#B9433A',
}

export const routes = [
  { path: '/', label: 'Overview' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/business', label: 'Business' },
  { path: '/journey', label: 'Journey & Governance' },
  { path: '/appendix', label: 'Appendix' },
]

export const pageOrder = [
  { path: '/', label: 'Overview', next: { path: '/how-it-works', label: 'How it works' } },
  { path: '/how-it-works', label: 'How It Works', next: { path: '/business', label: 'The business' } },
  { path: '/business', label: 'Business', next: { path: '/journey', label: 'Journey & governance' } },
  { path: '/journey', label: 'Journey', next: { path: '/appendix', label: 'Appendix' } },
  { path: '/appendix', label: 'Appendix', next: null },
]

export const pageAudioIndex = { '/': 0, '/how-it-works': 1, '/business': 2, '/journey': 3, '/appendix': 4 }
