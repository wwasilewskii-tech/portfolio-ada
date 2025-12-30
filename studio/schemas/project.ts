import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description shown on project card (max 120 characters)',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Main image shown in project grid',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Large hero image shown in project detail modal',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Fotografia', value: 'fotografia' },
          { title: 'Grafika', value: 'grafika' },
          { title: 'Projekty Video', value: 'video' },
          { title: 'Ilustracje Literackie', value: 'ilustracje' },
          { title: 'Design Okładek', value: 'design-okladek' },
          { title: 'Wystawy', value: 'wystawy' },
        ],
      },
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'array',
      description: 'Tools and equipment used (e.g., "Canon 5D Mark IV", "Adobe Photoshop")',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'Client or organization (if applicable)',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.min(2000).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Your role in the project (e.g., "Fotografka", "Graficzka")',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Location of the project or exhibition',
    }),
    defineField({
      name: 'exhibition',
      title: 'Exhibition Name',
      type: 'string',
      description: 'Name of exhibition (if applicable)',
    }),
    defineField({
      name: 'collaboration',
      title: 'Collaboration',
      type: 'string',
      description: 'Collaborators or organizations',
    }),
    defineField({
      name: 'caseStudy',
      title: 'Case Study',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pressLinks',
      title: 'Press Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'External link to project (if applicable)',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project prominently',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnailImage',
      subtitle: 'year',
    },
  },
})
