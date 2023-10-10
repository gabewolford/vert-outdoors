import {defineField, defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'

export const brandContentBlockType = defineType({
  name: 'brandContentBlockType',
  type: 'object',
  title: 'Content Block',
  fields: [
    defineField({
      name: 'brandName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandLogoImage',
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
    defineField({
      name: 'imageUrl',
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
    defineField({
      name: 'headerText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'websiteUrl',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bodyText',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bodyText2',
      type: 'text',
    }),
  ],
  icon: SplitVerticalIcon,
  preview: {
    select: {
      title: 'brandName',
      image: 'imageUrl',
    },
    prepare({title, image}) {
      return {
        title: title || 'N/A',
        subtitle: 'Brand Content Block',
        media: image || SplitVerticalIcon,
      }
    },
  },
})
