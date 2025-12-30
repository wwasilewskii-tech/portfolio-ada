import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity/client'
import { projectsQuery } from '@/lib/sanity/queries'

/**
 * Sitemap configuration
 * Provides search engines with a list of all pages to index
 * Dynamically includes all projects from Sanity CMS
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adriannart.pl'

  // Fetch projects from Sanity
  const projects = await client.fetch(projectsQuery).catch(() => [])

  // Generate project URLs (anchor links to sections on homepage)
  const projectUrls = projects.map((project: any) => ({
    url: `${baseUrl}/#${project.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Homepage (highest priority)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Projects section
    {
      url: `${baseUrl}/#projekty`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // About section
    {
      url: `${baseUrl}/#o-mnie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contact section
    {
      url: `${baseUrl}/#kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Individual projects
    ...projectUrls,
  ]
}
