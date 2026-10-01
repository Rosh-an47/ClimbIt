export const colors = {
  cream: '#FAF6F0',
  warmWhite: '#FFFDF8',
  sand: '#EFE7DA',
  stone: '#E2D9C9',
  charcoal: '#1E1B18',
  graphite: '#4A453F',
  muted: '#8A8278',
  sky: '#7BA8C7',
  sunrise: '#E8A33D',
  alpenglow: '#D6714C',
  deepPine: '#3D5A4E',
  warning: '#B8453A',
  riskGreen: '#4A8A3A',
  riskYellow: '#C8A83A',
  riskOrange: '#C87A2A',
  riskRed: '#A53A3A',
}

export const routes = [
  { path: '/problem', label: 'Problem' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/business', label: 'Business' },
  { path: '/journey', label: 'Journey' },
  { path: '/contact', label: 'Contact' },
]

export const pageOrder = [
  { path: '/', label: 'Home', next: { path: '/problem', label: 'The problem' } },
  { path: '/problem', label: 'Problem', next: { path: '/how-it-works', label: 'How it works' } },
  { path: '/how-it-works', label: 'How It Works', next: { path: '/business', label: 'The business' } },
  { path: '/business', label: 'Business', next: { path: '/journey', label: 'Journey & governance' } },
  { path: '/journey', label: 'Journey', next: { path: '/contact', label: 'Request a demo' } },
  { path: '/contact', label: 'Contact', next: null },
]

export const pageAudioIndex = {
  '/': 0,
  '/problem': 1,
  '/how-it-works': 2,
  '/business': 3,
  '/journey': 4,
  '/contact': 5,
}
