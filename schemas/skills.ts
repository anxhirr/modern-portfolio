import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'amount',
    //   title: 'Amount',
    //   type: 'number',
    // }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    // }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
})
