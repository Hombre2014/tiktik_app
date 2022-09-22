import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'd85lgjjv',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
