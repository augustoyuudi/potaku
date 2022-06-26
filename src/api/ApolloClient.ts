import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://graphql.anilist.co/',
})

// Cache implementation
const cache = new InMemoryCache()

export default new ApolloClient({
  link: httpLink,
  cache,
})
