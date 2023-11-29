import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '0k88ujz0',
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_CLIENT_TOKEN
})