import Prismic from '@prismicio/client';

const prismicClient = Prismic.client(process.env.PRISMIC_API_URL as string, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export { prismicClient, Prismic };
