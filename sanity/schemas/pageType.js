import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
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
          type: 'hero',
          title: 'Content Block',
        }),
      ],
    }),
  ],
})
