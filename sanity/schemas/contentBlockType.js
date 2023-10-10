import {defineField, defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'

export const contentBlockType = defineType({
  name: 'contentBlockType',
  type: 'object',
  title: 'Content Block',
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
  icon: SplitVerticalIcon,
  preview: {
    select: {
      title: 'headerText',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'N/A',
        subtitle: 'Content Block',
        media: image || SplitVerticalIcon,
      }
    },
  },
})
