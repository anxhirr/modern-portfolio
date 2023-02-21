import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const sanityConfig = {
  projectId: 'yciyzigz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-02-21',
  token: process.env.SANITY_TOKEN,
}

export const sanityClient = createClient(sanityConfig)

export const imageBuilder = imageUrlBuilder(sanityConfig)

export const urlFor = (source: any) => imageBuilder.image(source)
