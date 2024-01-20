import {defineField} from 'sanity'

export default {
  name: 'team',
  type: 'document',
  title: '👥 Team',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      type: 'string',
      title: 'Region',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      validation: (Rule) => Rule.required(),
    }),
  ],
}
