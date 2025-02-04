import {defineType} from 'sanity'

const author = defineType({
  name: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Names',
    },
    {
      name: 'surname',
      type: 'string',
      title: 'Surname',
    },
  ],
})

export const schemaTypes = [author]
