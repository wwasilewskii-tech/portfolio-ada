import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline on About section',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', type: 'string', title: 'Category' },
            {
              name: 'items',
              type: 'array',
              title: 'Items',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'careerTimeline',
      title: 'Career Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', type: 'string', title: 'Year' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'exhibitions',
      title: 'Exhibitions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', type: 'string', title: 'Year' },
            { name: 'title', type: 'string', title: 'Exhibition Title' },
            { name: 'location', type: 'string', title: 'Location' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', type: 'string', title: 'Year' },
            { name: 'title', type: 'string', title: 'Award Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page Content',
      }
    },
  },
})
