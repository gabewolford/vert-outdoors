import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const imageGalleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
    },
  ],
  icon: ImagesIcon,
  preview: {
    prepare() {
      return {
        title: 'Images',
        subtitle: 'Brand Logo Bar',
        media: ImagesIcon,
      }
    },
  },
})
