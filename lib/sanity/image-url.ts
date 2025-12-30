import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

/**
 * Generate image URL from Sanity image source
 */
export function urlFor(source: any) {
  return builder.image(source)
}
