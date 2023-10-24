import { Client, cacheExchange, fetchExchange } from '@urql/core';

export default new Client({
  url: 'https://graphql.anilist.co/',
  exchanges: [cacheExchange, fetchExchange],
});