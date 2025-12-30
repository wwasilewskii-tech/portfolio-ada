import { MetadataRoute } from 'next'

/**
 * PWA Manifest Configuration
 * Enables progressive web app features like "Add to Home Screen"
 * Improves mobile SEO and user experience
 */
export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adriannarauhut.com'

  return {
    name: 'Adrianna Rauhut - Portfolio',
    short_name: 'A. Rauhut',
    description:
      'Portfolio Adrianny Rauhut - artystki multimedialnej ze Szczecina. Fotografia, grafika, ilustracje literackie, projekty video.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A', // navy-900
    theme_color: '#FBBF24', // yellow-400
    orientation: 'portrait-primary',
    icons: [
      {
        src: `${baseUrl}/logo.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: `${baseUrl}/logo.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['photography', 'design', 'portfolio', 'art'],
    lang: 'pl-PL',
    dir: 'ltr',
  }
}
