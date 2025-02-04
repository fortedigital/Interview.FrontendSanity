import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'hecyyt84', // replace with your Sanity project ID
  dataset: 'production', // replace with your dataset name
  apiVersion: '2021-10-21', // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
})