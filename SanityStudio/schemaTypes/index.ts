import {defineType} from 'sanity'

const person = defineType({
  name: 'person',
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

export const schemaTypes = [person]
