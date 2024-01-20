import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: '📄 Pages',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      options: {
        list: [
          {title: 'Home Page', value: 'Home Page'},
          {title: 'Brands Page', value: 'Brands Page'},
          {title: 'Team Page', value: 'Team Page'},
          {title: 'Documents Page', value: 'Documents Page'},
          {title: 'Contact Page', value: 'Contact Page'},
        ],
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
          title: 'Hero',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
          title: 'Gallery',
        }),
        defineArrayMember({
          name: 'content block',
          type: 'contentBlockType',
          title: 'Content Block',
        }),
        defineArrayMember({
          name: 'brand content block',
          type: 'brandContentBlockType',
          title: 'Brand Content Block',
        }),
      ],
    }),
  ],
})
