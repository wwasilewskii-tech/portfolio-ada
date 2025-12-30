/**
 * Image utility functions
 * For blur placeholders and image optimization
 */

/**
 * Generates a simple blur data URL for images
 * This creates a tiny 1x1 pixel base64 encoded SVG as a placeholder
 */
export function getBlurDataURL(color: string = '#0f172a'): string {
  const svg = `
    <svg width="1" height="1" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="1" fill="${color}"/>
    </svg>
  `
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

/**
 * Common blur placeholder for the portfolio
 * Uses navy-100 color (#d9e2ec) for a subtle loading effect
 */
export const DEFAULT_BLUR_DATA_URL = getBlurDataURL('#d9e2ec')

/**
 * Generate Sanity image URL with proper parameters
 * @param url - Sanity image URL
 * @param width - Desired width
 * @param quality - Image quality (1-100)
 */
export function getSanityImageUrl(
  url: string,
  width?: number,
  quality: number = 85
): string {
  if (!url) return ''

  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  params.append('q', quality.toString())
  params.append('auto', 'format') // Auto-detect best format (WebP, AVIF)

  return `${url}?${params.toString()}`
}
