import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration
 * Instructs search engine crawlers which pages to crawl and index
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adriannart.pl'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/',      // Sanity Studio admin
          '/api/',         // API routes
          '/_next/',       // Next.js internals
          '/studio/*',     // All studio paths
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
