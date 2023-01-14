import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '0k88ujz0',
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn: false,
    token:'skLLofLYFtz8Dq8uHVO6Sg9p3ETkVl0Cdm2iNmLiEOWKS7yMwYWv2DB52mnM7iTa6moNu08qWl8ExsmuHLYH0ETd8C0nRxDT0u1krcz6wqQYBniGgzb7k3qOFmfRFVwaVyZTrK5C2NyFmZ6e6j4m0hEaOVokMhqzzvOpMbIfy1qq9T2d63Te'
})