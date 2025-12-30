import { groq } from 'next-sanity'

/**
 * GROQ Queries for Sanity CMS
 */

// Get all projects with basic info for gallery
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    featured,
    "thumbnailUrl": thumbnailImage.asset->url,
    "thumbnailBlurHash": thumbnailImage.asset->metadata.blurHash,
    categories,
    medium,
    client,
    year
  }
`

// Get single project by slug with all details
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    "coverImageUrl": coverImage.asset->url,
    "galleryImages": galleryImages[].asset->url,
    categories,
    medium,
    client,
    year,
    role,
    location,
    exhibition,
    collaboration,
    caseStudy,
    awards,
    pressLinks,
    externalLink
  }
`

// Get about page content
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    heroTitle,
    bio,
    skills,
    careerTimeline,
    exhibitions,
    awards
  }
`

// Get site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    email,
    linkedin,
    behance,
    instagram,
    socialMedia
  }
`
