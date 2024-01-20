import {defineField, defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'headerText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtext',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkTo',
      type: 'string',
      options: {
        list: ['/', '/brands', '/team', '/documents', '/contact'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: PresentationIcon,
  preview: {
    select: {
      title: 'headerText',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'N/A',
        subtitle: 'Hero',
        media: image,
      }
    },
  },
})
