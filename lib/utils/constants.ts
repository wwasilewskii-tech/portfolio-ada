/**
 * Brand Colors - Adrianna Rauhut Portfolio
 * Navy (Granatowy) + Yellow (Żółty)
 */
export const BRAND_COLORS = {
  navy: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#1e3a8a',
    900: '#0f172a',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
} as const

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/**
 * Animation durations (in seconds)
 */
export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 1.2,
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  linkedin: '',
  behance: '',
  instagram: '',
  email: 'adrianna@example.com', // TODO: Update with real email
} as const

/**
 * Site metadata
 */
export const SITE_METADATA = {
  title: 'Adrianna Rauhut - Fotografka, Graficzka, Operatorka Kamery',
  description: 'Portfolio Adrianny Rauhut - artystki multimedialnej ze Szczecina. Fotografia, grafika, ilustracje literackie, projekty video.',
  keywords: [
    'fotografia',
    'grafika',
    'Szczecin',
    'fotografia artystyczna',
    'ilustracje',
    'design okładek',
    'operatorka kamery',
    'Adrianna Rauhut',
  ],
  url: 'https://adriannarauhut.com', // TODO: Update with real domain
  ogImage: '/logo.png',
  locale: 'pl_PL',
} as const
